const e = require("express");
let fs = require("fs").promises;
let path = require("path");

let config = require("../config");

module.exports = class SearchFeed {
  constructor() {}

  search(searchTerm, pageNo, sort, cb) {
    return this.getAll().then((data) =>
      this.performSearch(data, searchTerm, pageNo, sort)
    );
  }

  performSearch(data, searchTerm, pageNo, sort) {
      if (searchTerm) {
        data = this.searchIn(data, searchTerm);
      }

      if (sort) {
        data = this.sort(data, sort.order);
      }

      let total_results = data.length;

      if (pageNo) {
        data = data.slice(
          (pageNo - 1) * config.config.ITEMS_PER_PAGE,
          pageNo * config.config.ITEMS_PER_PAGE
        );
      }

      return {
        total_length: total_results,
        showing_results: data.length,
        data,
      }
  }

  sort(data, order) {
    return data.sort((a, b) => {
      if (a.dateLastEdited > b.dateLastEdited) {
        return order === "asc" ? 1 : -1;
      } else if (b.dateLastEdited > a.dateLastEdited) {
        return order === "asc" ? -1 : 1;
      } else {
        return 0;
      }
    });
  }

  searchIn(data, searchTerm) {
    if (searchTerm[0] == '"' && searchTerm[searchTerm.length - 1] == '"') {
      return this.getExactMatch(data, searchTerm.slice(1, -1));
    } else {
      return this.getNormalMatch(data, searchTerm);
    }
  }

  getExactMatch(data, searchTerm) {
    return data.filter((obj) => {
      return Object.keys(obj).find((key) => {
        if (key === "name" || key === "description") {
          return obj[key].indexOf(searchTerm) !== -1;
        }
      });
    });
  }

  getNormalMatch(data, searchTerm) {
    let terms = searchTerm.split(" ");
    return data.filter((obj) => {
      return Object.keys(obj).find((key) => {
        if (key === "name" || key === "description") {
          return terms.some((data) => obj[key].includes(data));
        }
      });
    });
  }

  getAll() {
    const filePath = path.join(
      path.dirname(require.main.filename),
      "data",
      "mock_data.json"
    );

    return fs.readFile(filePath).then((data) => JSON.parse(data));
  }
};

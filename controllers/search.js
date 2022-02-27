const SearchFeed = require("../models/SearchFeed");

exports.search = (req, res, next) => {
  const pageNo = req.query.page;
  const query = req.query.search;
  const sort = req.query.sort;
  const sortingOrder = req.query.sortorder;

  let feedSearch = new SearchFeed()
    .search(query || "", pageNo, { value: sort, order: sortingOrder })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

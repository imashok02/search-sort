const SearchFeed = require("../models/SearchFeed");
const config = require('../config')

test("Check if sorting with asc gives values in asc", () => {
  let search = new SearchFeed();

  let srcData = [
    {
      dateLastEdited: 77,
    },
    {
      dateLastEdited: 22,
    },
    {
      dateLastEdited: 9,
    },
  ];

  let expectedData = [
    {
      dateLastEdited: 9,
    },
    {
      dateLastEdited: 22,
    },
    {
      dateLastEdited: 77,
    },
  ];

  let sortedAsc = search.sort(srcData, "asc");
  expect(sortedAsc).toStrictEqual(expectedData);
});

test("search for the exact match", () => {
  let search = new SearchFeed();

  let data = [
    {
      name: "The Lord of the Rings: The Return of the King",
    },
    {
      name: "The Lion King",
    },
  ];

  let result = search.performSearch(data, '"the"');
  expect(result).toStrictEqual({
    total_length: 1,
    showing_results: 1,
    data: [
      {
        name: "The Lord of the Rings: The Return of the King",
      },
    ],
  });
});

test("search for the normal match", () => {
  let search = new SearchFeed();

  let data = [
    {
      name: "The Lord of the Rings: The Return of the King",
    },
    {
      name: "The Lion King",
    },
  ];

  let result = search.performSearch(data, "The King");

  expect(result).toStrictEqual({
    total_length: 2,
    showing_results: 2,
    data: [
      {
        name: "The Lord of the Rings: The Return of the King",
      },
      {
        name: "The Lion King",
      },
    ],
  });
});

test('pagination works correcty', () => {
    let search = new SearchFeed();

    let data = [
        {
          name: "The Lord of the Rings: The Return of the King",
        },
        {
          name: "The Lion King",
        },
      ];

    let result = search.performSearch(data, "", 2);
    expect(result.data.length).toBe(0)
})
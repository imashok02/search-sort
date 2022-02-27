# search-sort

## REST API for searching and sorting data.

## EndPoints:
 /search
 
 #### Results can be achieved by passing query params to the endpoint.
 * search => for search term you wanna query for( without search it returns all results)
 * page => Integer (page number for pagination. default is all)
 * sort => Boolean(true if you wanna sort)
 * sortorder => "asc || desc" (order for sorting, works only if sort is true)
 
 
 ###### Example query:
 > http://localhost:8000/search?page=1&search=District&sort=true&sortorder=asc

 ###### Example output 
 
 ```
 
{
  "total_length": 6,
  "showing_results": 3,
  "data": [
    {
      "name": "District Data Officer",
      "image": "http://lorempixel.com/640/480",
      "description": "Perspiciatis suscipit eius. Atque dolorem eligendi rerum et aut laborum et quidem. Excepturi minima omnis debitis necessitatibus suscipit voluptatem neque.",
      "dateLastEdited": "2018-01-19T11:21:04.700Z"
    },
    {
      "name": "District Data Liaison",
      "image": "http://lorempixel.com/640/480",
      "description": "Quis autem quia eos. Similique saepe error qui magnam sint doloremque quo quasi voluptatibus. Pariatur error repudiandae aut libero omnis esse voluptatem numquam. Est repellendus quo maxime iusto in inventore tempora harum.",
      "dateLastEdited": "2018-03-03T20:20:14.943Z"
    },
    {
      "name": "District Applications Representative",
      "image": "http://lorempixel.com/640/480",
      "description": "Libero optio nihil minima corporis aspernatur fugiat quia. Ea qui cupiditate impedit provident quas et accusamus occaecati quidem. Ut corrupti eum corporis id velit necessitatibus voluptatem est quibusdam. Deleniti qui quam perferendis reprehenderit ut.",
      "dateLastEdited": "2018-06-13T05:21:41.581Z"
    }
  ]
}
 
 ```
 
 #### Stack:
 
**Node.js, Express**

#### To Start
```
npm install
node start

To Run test

npm test


```

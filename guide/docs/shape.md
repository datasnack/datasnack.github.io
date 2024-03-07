# Shape

The `Shape` objects is a simple structure that holds the geometry of a specific region of interest. A Data Hub can contain as many shapes as you want. It follows a simple hierarchical approach, so each shape can have one parent and any number of children.


## Fields

| Field        | Type           | Description                                                  | Example |
| ------------ | -------------- | ------------------------------------------------------------ | ------- |
| `id`         | `int`          |                                                              |         |
| `parent_id`  | `int\|NULL`    |                                                              |         |
| `name`       | `varchar(255)` |                                                              |         |
| `properties` | `JSONField`    | For addionatl attributes that might be relevant for your usecase. |         |
| `geometry`   |                | Any type of POLYGON/MULTIPOLYON.                             |         |
|              |                |                                                              |         |
|              |                |                                                              |         |


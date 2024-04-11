# Shape

The `Shape` objects is a simple structure that holds the geometry of a specific region of interest. A Data Hub can contain as many shapes as you want. It follows a simple hierarchical approach, so each shape can have one parent and any number of children.

## Preparation

You need to prepare your data in the format needed by the Data Hub. It can be a GeoPackage or Shapefile with the following attributes:

| Field        | Type           | Description                                                  |
| ------------ | -------------- | ------------------------------------------------------------ |
| `id`         | `int`          | Primary ID used, you need to define it yourself so you can set the parent/child relationship. |
| `parent_id`  | `int\|NULL`    | In case the shape has a parent, use the parent ID.           |
| `name`       | `varchar(255)` | Name of the shape.                                           |
| `type`       | `varchar(255)` | Category of the shape, i.e. administrative level.            |
| `properties` | `JSONField`    | Simple key-value pairs as a JSON string. Can contain further attributes you might need on your shapes (country code, etc.). |
| `geometry`   |                | Any `POLYGON` or `MULTIPOLYGON`.                             |


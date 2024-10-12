# Shape

The `Shape` model provides a structure that holds the geometry of a specific region of interest. A Data Hub can contain as many shapes as you want. It follows a simple hierarchical approach, so each shape can have one parent and any number of children.

## Preparation

You need to prepare your data in the format needed by the Data Hub. It can be a GeoPackage or Shapefile with the following attributes:

| Field        | Type           | Description                                                  |
| ------------ | -------------- | ------------------------------------------------------------ |
| `id`         | `int`          | Primary ID used, you need to define it yourself, so you can set the parent/child relationship. |
| `parent_id`  | `int\|NULL`    | In case the shape has a parent, use the parent ID.           |
| `name`       | `varchar(255)` | Name of the shape.                                           |
| `type`       | `varchar(255)` | Category of the shape, i.e. the name of an administrative level. |
| `properties` | `JSONField`    | Simple key-value pairs as a JSON string. Can contain further attributes you might need on your shapes (country code, etc.). |
| `geometry`   |                | Any `POLYGON` or `MULTIPOLYGON`.                             |


In [this repository](https://github.com/datasnack/aoi-ghana) the preparation is shows for the administrative levels inside Ghana.

The prepared shapes can be imported into the Data Hub with the following CLI command: 

    $ python manage.py loadshapes data/<file>

The file should be located under the `data/` directory (in case it's executed inside the Docker container).
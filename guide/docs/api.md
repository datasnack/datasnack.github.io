# API

The Data Hub provides an API for accessing Shapes and Data Layer information/values.



## Shape geometries

Returns the shapes specifed shapes known to the system with ther geometries.

URL: `api/shapes/geometry`

| Parameter                   | Required | Type        | Explanation                                                  |
| --------------------------- | -------- | ----------- | ------------------------------------------------------------ |
| `shape_id`  or `shape_type` | x        | Int\|String | Returns a single shape in the case of `shape_id` or all shapes of the given type in `shape_type`. On of the two must be supplied. |
| `format`                    |          | String      | One of `geojson`, `gpkg`, `shp`, `csv`. `geojson` is default. |




## Processed data

Returns the processed data for the given Data Layer.

URL: `/api/datalayers/data/`

| Parameter                          | Required | Type        | Explanation                                                  |
| ---------------------------------- | -------- | ----------- | ------------------------------------------------------------ |
| `datalayer_id`  or `datalayer_key` | x        | Int\|String | One of `datalayer_id` or `datalayer_key` is required, if both are given `datalayer_id` is used. |
| `shape_type`                       |          | String      | String of an avilable Shape Type. If not given all types are returned. |
| `start_date`                       |          | String      | Inclusive starting date of the data, conforming to the Data Layer temporal type, i.e. `yyyy` or `yyyy-mm-dd` |
| `end_date`                         |          | String      | Inclusive end date of the data, conforming to the Data Layer temporal type, i.e. `yyyy` or `yyyy-mm-dd` |
| `format`                           |          | String      | One of `csv`, `excel`, `json`. `json` is default.            |

## Available Data Layers

Returns the available Data Layer specifications.

URL: `api/datalayers/datalayer`

| Parameter | Required | Type   | Explanation                              |
| --------- | -------- | ------ | ---------------------------------------- |
| `format`  |          | String | One of `json`, `csv`, `excel`. `json` is default. |


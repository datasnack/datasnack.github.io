# CLI

The Data Hub provides the following CLI commands that ca be run via Djangos `manage.py` system.

::: info
If you run the system inside a Docker container you need to prefix the commands with `docker-compose exec datahub`, i.e., `docker-compose exec data-hub python manage.py <command>`.
:::

## Load shapes

To import the prepared shape files use the following commands. A GeoPackage (`.gpkg`) or Shapefile (`.shp`) can be used. See the [Shape documentation](shape.md) for required/optional attributes in the file.


```sh
python manage.py loadshapes <file>
```


## Data Layer

To download or process a defined Data Layer.

```sh
python manage.py datalayer <data layer key> {download|process}
```

## Centroid

To calculate the centroid of all loaded shapes use the following command. 

```sh
python manage.py centroid
```

## Export

Export the database contents to a single file. This **doesn't** export raw data that are stored on the file system, only the database contents. It's a wrapper for [`pg_dump`](https://www.postgresql.org/docs/current/app-pgdump.html).

```sh
python manage.py dump [<file>]
```

## Import

Imports a previously created dump. It's a wrapper for [`pg_restore`](https://www.postgresql.org/docs/current/app-pgrestore.html).

```sh
python manage.py restore <file>
```


# CLI

The Data Hub provides the following CLI commands that ca be run via Djangos `manage.py` system.

::: info
If you run the system inside a Docker container you need to prefix the commands with `docker compose exec datahub`, i.e., `docker compose exec datahub python manage.py <command>`.
:::

## Load shapes

To import the prepared shape files use the following commands. A GeoPackage (`.gpkg`) or Shapefile (`.shp`) can be used. See the [Shape documentation](shape.md) for required/optional attributes in the file.


```sh
python manage.py loadshapes <file>
```


## Data Layer

To interact with the Data Layers on the CLI the following management commands exist. `<key>` stands for the key of a Data Layer, you can provide multiple keys separated by `,` and use patterns with `*`.

Managing Data Layers:

```sh
python manage.py dl_init <key>
python manage.py dl_copy <source_key> <target_key>
python manage.py dl_rename <source_key> <target_key>

# Batch update of a single field of the Data Layer model
python manage.py dl_update <key|s> --attr <attr> --value <value>

# Delete metadata, log, processed data, class file, 
# add --data to also delete data dir 
python manage.py dl_delete <key>
```

Processing:

```sh
python manage.py dl_download <key|s>
python manage.py dl_process <key|s>

# Delete processed data and log
python manage.py dl_reset <key|s>
```

Exporting and importing:

```sh
# Metadata (model definitions) of the Data Layers
python manage.py dl_dump_data <key|s>
python manage.py dl_dump_meta <key|s>

# Processed data
python manage.py dl_restore_data <file>
python manage.py dl_restore_meta <file>
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


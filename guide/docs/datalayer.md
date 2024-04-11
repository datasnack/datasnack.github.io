# Data Layer







## Data Layer Description





### Data Layer metadata



| Field           | Description                                                  | Database | Source code          |
| --------------- | ------------------------------------------------------------ | :--------: | :------------------: |
| `key`           | Unique identifer of the Data Layer inside the Data Hub.      | x        | x                    |
| `name`          | Human readbale description in one line.                      | x        |                      |
| `description`   | Description of the Data Layer. Describe data, or weaknesses, etc. | x        |                      |
| `category`      | Human readbale name of a category describing the data. Like "Weather" or "Infrastrcuture". | x        |                      |
| `tags`          |                                                              | x        |                      |
| `date_included` | First integration of the data layer into the Hub | x | |
| `related_to` | Comma sperated list of `key`s of other Data Layers this is related to, i.e., because the both descripte the same paramter. The relationship is symetrical, so if only one direction of a relationship is described, the other side will be visible in the Data Hub as well. |  | |
| `operation`     | Description how the data was processed (sum, mean, count, …). | x        | x  (actual function) |
| `unit`          | suffix for human representation (°C, mm, entitiies, …)       |          | x                    |
| `value_type`    | Float, Int, Percent, Bool                                    |          | x                    |
| `precision`     |                                                              |          | x                    |
| `time_col`      | Temporal resolution of the integrated data (Anually, Daily, …)- |          | x                    |

After integrating a Data Layer in the system and performing the data download and processing actions, the system will provide a  overviews that contains:

- Spatial coverage: on which shape types and and on how many shapes inside each type actual data could be derived.
- Temporal coverage: how many data points could be integrated, how complete are the data between the first and last data points (how many values are missing accodring to the temporal resolution).
- Processing history: a log that contains the single download and processing steps with timestamps, as well es warnings/errors that occured during these steps.



### Original data metadata

Orignal metadata, describing the soruce data of the Data Layer. This information should provide a quick overview of the nature of the data used in this data layer. It does not follow a "formal" specification since not all data sources provide metadata in such manner.

| Field                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `format`             | MIME-Type of the data type, if availbale. If not free text, i.e., "API", "PDF". |
| `format_description` | Further Description/links for consuming/understanding the format. |
| `format_unit`        | Unit used to describe values in the source, lik percentage, mm/day, … |
| `spatial_details`    | Type of the geogrpahic data. Lile "0.1km raster", "GPS coordindates", "administrative units", … |
| `spatial_coverage`   | What extent does the data cover, lika a country or Global.   |
| `temporal_details`   | Annually, Daily, Cross-Sectional                             |
| `temporal_coverage`  | From when to when does the source provide data.              |
| `langauge`           | Language the data is provided/documented/published in. ISO 639-2 or -3 code (like, `de`, `en` or `eng`). |
| `source`             | Insitution/Organization that published the data              |
| `source_link`        | URL to the source.                                           |
| `license`            | Lincsense of the data. If avaiable use [SPDX license identifier](https://spdx.org/licenses/). |
| `citation`           | Preferred citation by the authors of the data. (TODO: Free text? Or specify smth. like bibtex?) |
| `date_published`     | Date the data was first published, year or ISO 8601 format `yyyy-mm-dd`. |
| `date_last_accessed` | Date the information was last access/checked.                |

Each Data Layer can have multiple sources attached to it. This might be usefull if a Data Layer is collected from multiple source, or the source provides multiple DOIs/citiations for its data. Additionally further items can be connected with the Data Layer, i.e. authors/institutions or publications.

| Field         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `pid_type`    | `DOI`, `ROR` or `ORCID`                                      |
| `pid`         | Persistent identifier of some sorts                          |
| `description` | Describe why this source is relevant for the Data Layer and what it contains. |

  
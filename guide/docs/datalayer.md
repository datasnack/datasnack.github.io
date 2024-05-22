# Data Layer

To create a new Data Layer you need first to decide on a unique identifier for it -- the `key`. A common convention is to use something like `<source>_<parameter>`, i.e. `worldpop_popd` (a source from **WorldPop** describing **pop**ulation **d**ensity).

The source files for Data Layers are created inside the folder `src/datalayers/`. The filename should be `<key>.py`. Inside a new class needs to defined, but the class name should be in CamelCase (i.e. `WorldpopPopd`), following the Python convention for class names. It's derived form the `BaseLayer` class (or another/custom class that bundles functionality for a specific data source).

Next you need to specify the temporal dimension of your data source, as well as the type of value it contains. This is defined via constants inside the `__init__(self)` method.



| Temporal resolution                              | Constant                    |
| ------------------------------------------------ | --------------------------- |
| Data is provided per year (default).             | `LayerTimeResolution.YEAR`  |
| Data is provided on a monthly basis. *) plannend | `LayerTimeResolution.MONTH` |
| Data is provided on a daily basis.               | `LayerTimeResolution.DAY`   |



| Value Type                                | Constant                    |
| ----------------------------------------- | --------------------------- |
| Numerical floating point Value (default). | `LayerValueType.VALUE`      |
| Percentage (0 to 1).                      | `LayerValueType.PERCENTAGE` |
| Binary value (`True`, `False`).           | `LayerValueType.BINARY`     |


Now you can define the source of the Data Layer based on the template below. After creating the source file it's required to create a corresponding entry via the Django frontend using the same key (this is also where you can set the metadata documention).


::: tip
Please also check to the source code and other example data layers for additional function the framework provides for consuming and harmonizing data.
:::


```python
from datalayers.datasources.base_layer import BaseLayer
from datalayers.datasources.base_layer import LayerValueType
from datalayers.datasources.base_layer import LayerTimeResolution

class ExampleLayer(BaseLayer):

    def __init__(self):
        super().__init__()
        self.time_col = LayerTimeResolution.YEAR
        self.value_type = LayerValueType.VALUE

    def download(self):
        # ...

    def process(self, shapes=None, save_output=False):
        # ...
```

## Data download


Inside the `download()` method you need to define on how to download the original data. In the easiest way this could just be a download of a single file.

```python
def download(self):
    # _save_url_to_file() downloads the file and saves it into
    # the Data Layer specific folder in `data/datalayers/<key>/`.
    self._save_url_to_file("https://example.test/data.csv")
```

For more complex integrations you can use the `self.get_data_path() -> Path` method to get the actual storage directory for the Data Layer (points to `data/datalayers/<key>/`).

## Data processing

Inside the processing routine you need to define how the downloaded data should be processed in regard to the loaded Shapes. 

Suppose the `data.csv` look like the following table:

| shape_name | year | value |
| ---------- | ---- | ----- |
| Region-A   | 2022 | 2     |
| Region-A   | 2023 | 3     |
| Region-B   | 2022 | 2     |
| Region-B   | 2023 | 4     |
| Region-C   | 2022 | 1     |



```python
def process(self, shapes=None, save_output=False):

    # get all loaded shapes from the Data Hub
    if shapes is None:
        shapes = Shape.objects.all()

    # open the previously downlaoded CSV file
    df = pd.load_csv(self.get_data_path() / 'data.csv')

    for shape in shapes:
        
        # clip to rows for current shape
        dfx = df[df['shape_name'] == shape.name]

        # iterate over rows per year
        for i, row in dfx.iterrows()

            # self.rows = [] should contain one entry for each 
            # shape-time combination that is avaiable from the data.
            self.rows.append({
                'year':     row['year'],
                'shape_id': shape.id,
                'value':    row['value']
            })

    # persists data inside self.rows to the PostGIS database
    self.save()
```

## Documentation

The documentation of a Data Layers follows one guiding principle:

::: warning Important
Anything related to data processing needs to be in source code!
:::

Regarding metadata/description this principle weakened, since this information can be edited via the web based backend, and is by doing so not forced using source control.

Int the following tables the distinction between the source based and database based information is shown. As well as the option to document the original data source.

### Technical information


| Field           | Description                                                  | Database   | Source code          |
| --------------- | ------------------------------------------------------------ | :--------: | :------------------: |
| `key`           | Unique identifier of the Data Layer inside the Data Hub.     | x          | x                    |
| `name`          | Human readable description in one line.                      | x          |                      |
| `description`   | Description of the Data Layer. Describe data, or weaknesses, etc. | x        |                      |
| `category`      | Human readable name of a category describing the data. Like "Weather" or "Infrastructure". | x        |                      |
| `tags`          |                                                              | x          |                      |
| `date_included` | First integration of the data layer into the Hub             | x          |                      |
| `related_to` | Comma separated list of `key`s of other Data Layers this is related to, i.e., because the both describe the same parameter. The relationship is symmetrical, so if only one direction of a relationship is described, the other side will be visible in the Data Hub as well.               |            |                      |
| `operation`     | Description how the data was processed (sum, mean, count, …). | x         | x (actual function)  |
| `unit`          | suffix for human representation (°C, mm, entities, …).       |            | x                    |
| `value_type`    | Float, Int, Percent, Bool.                                   |            | x                    |
| `precision`     | Decimal places to show on processed values.                  |            | x                    |
| `time_col`      | Temporal resolution of the integrated data (Annually, Daily, …). |         | x                    |

After integrating a Data Layer in the system and performing the data download and processing actions, the system will provide an overview that contains:

- Spatial coverage: on which shape types and on how many shapes inside each type actual data could be derived.
- Temporal coverage: how many data points could be integrated, how complete are the data between the first and last data points (how many values are missing according to the temporal resolution).
- Processing history: a log that contains the single download and processing steps with timestamps, as well as warnings/errors that occurred during these steps.

### Original data metadata

Original metadata, describing the source data of the Data Layer. This information should provide a quick overview of the nature of the data used in this data layer. It does not follow a "formal" specification since not all data sources provide metadata in such manner.

| Field                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `format`             | MIME-Type of the data type, if available. If not free text, i.e., "API", "PDF". |
| `format_description` | Further Description/links for consuming/understanding the format. |
| `format_unit`        | Unit used to describe values in the source, like percentage, mm/day, … |
| `spatial_details`    | Type of the geographic data. Like "0.1km raster", "GPS coordinates", "administrative units", … |
| `spatial_coverage`   | What extent does the data cover, like a country or Global.   |
| `temporal_details`   | Annually, Daily, Cross-Sectional                             |
| `temporal_coverage`  | From when to when does the source provide data.              |
| `langauge`           | Language the data is provided/documented/published in. ISO 639-2 or -3 code (like, `de`, `en` or `eng`). |
| `source`             | Institution/Organization that published the data              |
| `source_link`        | URL to the source.                                           |
| `license`            | License of the data. If available use [SPDX license identifier](https://spdx.org/licenses/). |
| `citation`           | Preferred citation by the authors of the data. (TODO: Free text? Or specify smth. like bibtex?) |
| `date_published`     | Date the data was first published, year or ISO 8601 format `yyyy-mm-dd`. |
| `date_last_accessed` | Date the information was last access/checked.                |

Each Data Layer can have multiple sources attached to it. This might be useful if a Data Layer is collected from multiple source, or the source provides multiple DOIs/citations for its data. Additionally, further items can be connected with the Data Layer, i.e. authors/institutions or publications.

| Field         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `pid_type`    | `DOI`, `ROR` or `ORCID`                                      |
| `pid`         | Persistent identifier of some sorts                          |
| `description` | Describe why this source is relevant for the Data Layer and what it contains. |

  
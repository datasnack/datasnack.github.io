# What is the Data Hub?

The Data Hub is a [geographic information system](https://en.wikipedia.org/wiki/Geographic_information_system) (GIS) featuring a data fusion engine designed for data harmonization, alongside an interactive dashboard for effective data exploration and collaboration. Its key objective is to merge data of multiple formats and sources across temporal and spatial axes, allowing users to combine, analyze, and interpret the data.

- All data processing is **reproducible** by mandating its definition in Python code.
- The system is **Open Source** (AGPLv3 license), allowing anyone to explore and modify it.
- The system must be installed either on your computer or a server within your organization, ensuring you maintain full data sovereignty.

Use cases:

- Data processing
- Data dashboard designed for interdisciplinary teams/projects that contains data relevant to their activities


Key technical aspects (for details see [Technology](docs/technology.md)):

- Developed in **Python** to harness the extensive GIS ecosystem
- Web frontend developed with the **Django** framework
- Processed data is stored in **PostGIS** database


The system comprises itself of two components: the **Shapes** and the **Data Layers**.

## Shape

A Shape is single geometry describing a generic area of interest. This can be any form of a `POYLGON` or `MULTIPOLYGON`, i.e., an administrative area of a country or subdivision or a generic geometry.

Between Shapes a hierarchical relationship can be used to model subdivisions of larger shapes into to smaller sub parts (as in different administrative levels of a country).

## Data Layer

The Data Layer encapsulates a single, specific parameter, i.e., precipitation or population density. For that it provides a hook to programmatically download the raw data from the source, process the data and map them to each available Shape.

Additionally, the Data Layer allows storing metadata of the sources that can be viewed as well. 
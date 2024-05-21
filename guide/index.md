# What is the Data Hub?

The Data Hub is a [geographic information system](https://en.wikipedia.org/wiki/Geographic_information_system) (GIS) with a data fusion engine for harmonizing diverse data sources. Its focus is to harmonize diverse data on temporal and spatial axes, to allow the user to combine and analyze this information. 

- All data processing is **reproducible** by requiring it to be defined in Python code.
- The system is **Open Source** (MIT license) so that anyone can investigate it.
- The system has to be used on your computer or on a server inside your organization, so you have complete data sovereignty.

Use cases:

- Data processing
- Data platform for a team / project that contains only the selected data relevant for the team.


Key technical aspects (for details see [Technology](docs/technology.md)):

- Developed in **Python** to harness the large GIS ecosystem
- Web frontend developed with the **Django** framework
- Processed data is stored in **PostGIS** database


The system comprises itself of two components: the **Shapes** and the **Data Layers**.

## Shape

A Shape is single geometry describing a generic area of interest. This can be any form of a `POYLGON` or `MULTIPOLYGON`, i.e., an administrative area of a country or subdivision or a generic geometry.

Between Shapes a hierarchical relationship can be used to model subdivisions of larger shapes into to smaller sub parts (as in different administrative levels of a country).

## Data Layer

The Data Layer encapsulates a single, specific parameter, i.e., precipitation or population density. For that it provides a hook to programmatically download the raw data from the source, process the data and map them to each available Shape.

Additionally, the Data Layer allows storing metadata of the sources that can be viewed as well. 
# What is the Data Hub?

The Data Hub is a [geographic information system](https://en.wikipedia.org/wiki/Geographic_information_system) (GIS). Its focus is to harmonize diverse data sources on temporal and spatial axes, to allow the user to combine and analyze this information. 

- All data processing is **reproducible** by requiring it to be defined in code.
- The system is **Open Source** (MIT license) so that anyone can investigate it.
- The system has to be used on your computer or inside your organization, so you have complete data sovereignty.

Use cases:

- Data processing
- Data platform for a team / project that contains only the selected data relevant for the team.


Key technical aspects (for details see [Technology](docs/technology.md)):

- Developed in **Python** to harness the large GIS ecosystem
- Web frontend developed with the **Django** framework
- Processed data is stored in **PostGIS** database
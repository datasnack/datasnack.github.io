# Technology

In this section the used technologies and frameworks and the reason behind using them is explained.


## Backend

### Python

For the programming language Python was chosen due to its large ecosystem regarding geodata processing, data science in general, as well as a quick development workflow.

Downsides are a suboptimal dependency management and no typing. Though type hints are used in the project


#### Pandas

#### GeoPandas

#### Rasterio

#### 

### Django 

For the web facing parts the [Django web framework](https://www.djangoproject.com/) is used. For the HTML templates the [Django template language](https://docs.djangoproject.com/en/5.0/ref/templates/language/) is used (default choice). The choice for Django was made due to its large community and continued development as well as the available documentation and structure which provides guidance as well for the core development as new users. 


#### Taggit

Django app for tagging models.

### PostGIS

The PostgreSQL based PostGIS database for spatial data provides easy handling of spatial data types as well as the benefits of a relational database.


## Frontend

### Bootstrap

For the styling of HTML/CSS the [Bootstrap](https://getbootstrap.com/) framework is used. It provides ready-to-use HTML components and a documentation, as well as grid system and general styling defaults/helpers. In contrast to other frontend frameworks, like Tailwind, the choice of Bootstrap was made to provide and use components directly without the need of running a frontend build process. This applies to the "core" development as well as the extensibility for the user in custom Data Hub instances with individual pages.


### Leaflet

### DataTables

### Plotly.js

### D3.js

### Highlight.js

## Infrastructure

### Docker

Containers
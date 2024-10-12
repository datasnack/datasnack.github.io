# Technology

On this page most top level technologies and frameworks and the reason behind using them is explained.


## Backend

### Python

For the programming language Python was chosen due to its large ecosystem regarding geodata processing, data science in general, as well as a quick development workflow.

Downsides are a suboptimal dependency management and no typing. Though type hints are used in the project


### Pandas and GeoPandas

### Rasterio

Processing of raster files (like GeoTiff).

### Django 

For the web facing parts the [Django web framework](https://www.djangoproject.com/) is used. For the HTML templates the [Django template language](https://docs.djangoproject.com/en/5.0/ref/templates/language/) is used (default choice). The choice for Django was made due to its large community and continued development as well as the available documentation and structure which provides guidance as well for the core development as new users. 


#### Taggit

Django app for tagging models.

### PostGIS

The PostgreSQL based PostGIS database for spatial data provides easy handling of spatial data types as well as the benefits of a relational database.


## Frontend

### Bootstrap

For the styling of HTML/CSS the [Bootstrap](https://getbootstrap.com/) framework is used. It provides ready-to-use HTML components and a documentation, as well as grid system and general styling defaults/helpers. In contrast to other frontend frameworks, like Tailwind, the choice of Bootstrap was made to provide and use components directly without the need of running a frontend build process. This applies to the "core" development as well as the extensibility for the user in custom Data Hub instances with individual pages.

### Octicons

Used for icons in the user interface.

### DataTables (+ jQuery)

Interactive sorting and searching of client side tables.


### [Leaflet](https://leafletjs.com/)

Interactive maps with Data Hub specific data overlaid (Shapes, choropleth maps).


### Plotly.js

Flexible charting library for visualizations of time series of the processed data.

### D3.js



### Highlight.js

Syntax highlighting for source code files shown in the frontend.

### Svelte

Building of dynamic reusable components in the Data Hub frontend (like the chart component).

## Infrastructure

### Docker

Containers for distribution and deployment.


## Licenses

The following table contains most first class dependencies of the Data Hub project. The Data Hub itself is licensed under the MIT license.

| Dependency                                                   | License         |
| ------------------------------------------------------------ | --------------- |
| Python                                                       | PSF (BSD style) |
| [PostGIS](https://github.com/postgis/postgis)                | GPL-2.0         |
| [GDAL](https://github.com/OSGeo/gdal)                        | MIT             |
| [PROJ](https://github.com/OSGeo/PROJ/)                       | MIT             |
| **Python packages:**                                         |                 |
| [Pandas](https://github.com/pandas-dev/pandas/)              | BSD-3-Clause    |
| [GeoPandas](https://github.com/geopandas/geopandas)          | BSD-3-Clause    |
| [Rasterio](https://github.com/rasterio/rasterio)             | BSD-3-Clause    |
| [shapely](https://github.com/shapely/shapely)                | BSD-3-Clause    |
| [numpy](https://github.com/numpy/numpy)                      | BSD-3-Clause    |
| [geojson](https://github.com/jazzband/geojson)               | BSD-3-Clause    |
| [osmnx](https://github.com/gboeing/osmnx)                    | MIT             |
| [Django](https://github.com/django/django)                   | BSD-3-Clause    |
| [Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar) | BSD-3-Clause    |
| [Django Taggit](https://github.com/jazzband/django-taggit)   | BSD-3-Clause    |
| [django-environ](https://github.com/joke2k/django-environ)   | MIT             |
| **Web components:**                                          |                 |
| [Bootstrap](https://github.com/twbs/bootstrap)               | MIT             |
| [Octicons](https://github.com/primer/octicons)               | MIT             |
| [Leaflet](https://github.com/Leaflet/Leaflet)                | BSD-2-Clause    |
| [Leaflet.loading](https://github.com/ebrelsford/Leaflet.loading) | MIT             |
| [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) | MIT             |
| [DataTables](https://github.com/DataTables/DataTables)       | MIT             |
| [Plotly.js](https://github.com/plotly/plotly.js)             | MIT             |
| [Highlight.js](https://github.com/highlightjs/highlight.js)  | BSD-3-Clause    |
| [D3.js](https://github.com/d3/d3)                            | ISC             |
| [jQuery](https://github.com/jquery/jquery)                   | MIT             |
| [Svelte](https://github.com/sveltejs/svelte)                 | MIT             |

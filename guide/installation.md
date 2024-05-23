# Installation

::: warning
Currently the Data Hub is in the early stage of development and *not* ready for production use. The shown routines might change quickly and not provide a documented migration path.
:::

The Data Hub itself functions as a framework for your individual data, so to install it without a use case might not be the best approach. For this reason we will install an example setup of the [Data Hub with data for Ghana](https://github.com/datasnack/dh-ghana). It will already include preprocessed data, so you don't need to wait to download and process the raw data (though of course you can also do that!). After installing it and familiarizing yourself with the setup you should be able to create a new instance with your own data.

The Data Hub is a GIS application with specialized dependencies, like GDAL, that might be complicated to install. So it's recommended to use the installation path via Docker. The Docker container bundles all dependencies and is encapsulated from the host system it runs on and by doing so should minimize complications or incompatibilities.

---

At the moment we do not provide a ready to use Docker image of the Data Hub framework on a public container registry. So you need to first build the image locally. 

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Clone the Data Hub repository: `git clone git@github.com:datasnack/datahub.git`
- Build the container `docker build -t datahub:latest .`

---

After that follow these steps to install the Ghana Hub on your system: 

1. Clone the repository to a new folder: `git clone git@github.com:datasnack/dh-ghana.git`
2. Copy the `.env.example` to `.env`: `cp .env.example .env`
3. Set `SECRET_KEY=` inside the `.env` with a secret value. Use this to create a random value: `python3 -c 'import secrets; print(secrets.token_hex(100))`
4. Run `$ docker-compose up -d`. This will spin up the Data Hub Django project as well as a PostGIS database.

Wait/check until [http://localhost:8000/](http://localhost:8000/) is available in your browser and shows the Data Hub interface.

From the [Release page](https://github.com/datasnack/dh-ghana/releases) of the Ghana Hub repo download the latest `.dump` file and save it inside the `data/` directory of the Ghana Hub folder. This contains the shapes for Ghana as well as the pre-processed Data Layers. 

Import it by running: `docker-compose exec data-hub python manage.py restore data/<dump file>`

Now you should be able to browse and interact with the Data Hub. Login with the user `admin` and the password `admin`. 


## File system structure

This section is aimed to explain the concepts behind the structure of the Data Hub based on the previous example.

The following snippet shows the important parts of the file system structure:

```sh
.
├── .editorconfig
├── .env.example         # Configuration of the Data Hub
├── .gitignore
├── README.md
├── data
│   ├── datalayers       # Storage of raw data of the Data Layers 
│   │                    # (created after first download)
│   ├── datalayers.local # Local copy of data sources that can't be 
│   │                    # dynamically downloaded
│   ├── datalayerspec    # Documentation of the Data Layers as CSV file
│   └── shapes           # Shape files this Data Hub is based on
├── docker-compose.yml
└── src
    ├── datalayer        # Data Layer source files
    └── ghana            # Custom extenions (Django app)
```

## Data Layer

Each Data Layer has a corresponding script file inside the `src/datalayer` folder. The filename has to be the Key associated with it, i.e. `example_layer`. The file contains a class with the key in CamelCase (`ExampleLayer`). Each Data Layer needs to define a `download()` method in which the download of the raw data is pragmatically defined. Also a `process()` method is required in that the actual processing for each shape file is done.

```python
import re
import os
import numpy as np

from datalayers.datasources.base_layer import BaseLayer

class ExampleLayer(BaseLayer):

    def download(self):
        # ...

    def process(self, shapes=None, save_output=False):
        # ...
```

To run the download methods you need to execute the following command: `python manage.py datalayer <key> {process|download}`.
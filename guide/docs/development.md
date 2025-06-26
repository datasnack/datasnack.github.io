# Development

This section describes the setup for local development on the Data Hub. 

## Dependencies

The development setup depends on:

- [Docker](https://www.docker.com/products/docker-desktop/)
- Python
- [uv](https://docs.astral.sh/uv/)
- npm

## Setup

Setup of the local environment: 

```sh
# clone repository
git clone git@github.com:datasnack/datahub.git
cd datahub

cp .env.example .env
# set DEBUG=True in .env
# set SECRET_KEY in .env

# start PostGIS
docker compose up -d postgis

# Install python deps with uv in an venv
uv pip install -r pyproject.toml
# activate venv
source .venv/bin/activate

# Install database
python manage.py migrate

# Create admin user
python manage.py createsuperuser
```

Now you can start the Data Hub with `python manage.py runserver`.

### Python Debugger

To run the application through a debugger follow [this guide](https://code.visualstudio.com/docs/python/tutorial-django#_create-a-debugger-launch-profile) for an example on how to debug Django projects in Visual Studio Code. 


### Formatting and Linting 

The project contains a [`.editorconfig`](https://editorconfig.org/) for common standards regarding handling indenting.

The Python code is linted and formatted according to the [ruff](https://docs.astral.sh/ruff/) configuration in the `pyproject.toml`.

For JavaScript and CSS the code is linted and formatted with the defaults of [biomejs.dev](https://biomejs.dev/).


## Frontend

For the frontend the JavaScript and CSS assets are bundles with [Vite](https://vite.dev/). Run `npm install` to install the needed dependencies.

Use `npm run dev` during development, with hot reloading (works only with `DEBUG=True`).

Use `npm run prod` do build production ready assets.


## Data Hub instance inside core

Die `datahub` repository should be agnostic to specific instances of the Data Hub. It is the base framework on which new instances are build upon. Nevertheless, developing a new instance based upon the Docker image can be cumbersome (and also developing core features without use case specific Data Layers). 

For that reason it is recommended to use them alongside and symlink `data/` and `src/` into the `datahub` repository. 

```
.                                                       
├── datahub                                             
│   ├── app/                                            
│   ├── data/  <-------- symlinked from instance ──┐    
│   ├── datahub/                                   │    
│   ├── datalayers/                                │    
│   ├── shapes/                                    │    
│   ├── src/   <-------- symlinked from instance ──┼─┐  
│   ├── templates/                                 │ │  
│   ├── .env                                       │ │
│   ├── README.md                                  │ │
│   ├── manage.py                                  │ │
│   └── pyproject.toml                             │ │
└── dh-ghana                                       │ │
    ├── data/  ────────────────────────────────────┘ │
    ├── src/   ──────────────────────────────────────┘
    ├── .env                                          
    ├── README.md                                     
    └── docker-compose.yml                            
```

In the `.env` file inside `datahub` you then need to provide the `dh-ghana` database credentials. The provided `docker-compose.yml` doesn't expose the PostGIS databases port to the host system, so the Django application on the host won't be able to connect to it. You can create a `docker-compose.override.yml` to expose the port like this:

```yaml
services:
  postgis:
    ports:
      - 5432:5432
```

## Extend

The Data Hub is a Django based application, so you can actually extend with [Django Apps](https://docs.djangoproject.com/en/dev/ref/applications/) (like plugins) and overwrite existing templates. 

Create a custom app like this:

```sh
mkdir src/<name>
python manage.py startapp <name> ./src/<name>
```

Inside the `.env` file you than need to add the key of the new app to the `INSTALLED_USER_APPS` variable (comma separated list) like `src.<name>`. Finally, inside the created app in `src/<name>/apps.py` change `name = <name>` to `name = src.<name>`. You need to restart the application/Docker container after adding the new app.
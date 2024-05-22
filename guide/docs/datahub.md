# Data Hub

The Data Hub is a Django project that has three parts (Django apps):

- `app`: common function, "glue" code, frontend
- `shape`: anything related to Shapes
- `datalayers`: anything related to Data Layers

Tough a strict separation of Shapes and Data Layer is no always possible, so in contrast to a singular Django App they can't stand on its own.
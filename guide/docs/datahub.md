# Data Hub

The Data Hub is a Django project that has three parts (Django apps):

- `app`: common function, "glue" code, frontend
- `shape`: anything related to Shapes
- `datalayers`: anything related to Data Layers

Tough a strict separation of Shapes and Data Layer is not always possible, in contrast to an ideal, self-contained Django App they can't be used on its own.
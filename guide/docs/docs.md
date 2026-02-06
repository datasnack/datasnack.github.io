# Documentation pages

The Data Hub allows you to create generic documentation pages below the *Docs* section in the navigation.
For this create [Markdown files](https://www.markdownguide.org/basic-syntax/) inside the `./docs/` folder of your project.

The File `Home.md` inside this folder is used to display the home page of your Data Hub. Other than that you free to create any and as many files as needed. The navigation shows files up to one folder depth.

- To **sort** the items in the navigation you can prepend a prefix to the filename like this `10_*`, `20_*`, … This prefix will not show in the navigation item name.
- For **translating** pages you can create files with the same name but an additional suffix consisting of the language code, i.e., if `Project.md` contains the English variant, `Project.de.md` contains the German one. English is expected to be the default language.

Additionally, you can add a front matter, a YAML based configuration before a `---` separator at the beginning of your Markdown files consisting of further attributes of the files. This can be used to change the display name of an entry, i.e., for translated pages that should not have the filename (English) as navigation link:


```md [Project.de.md]
---
title: Projekt
---

# Projekt

Lorem… 
```

## Links

Besides the standard way of creating links in markdown (`[<text>](<url>)`), you can also link to parts of the Data Hub. 

To link to other markdown pages inside the `docs/`folder use the filepath form the `docs/` folder, i.e., `[other page](./10_Other page.md)` (the path needs to originate in `docs/`).

To link to Shapes, Shape types and Data Layers you can use the following syntax. If you leave the text empty it will be automatically set to the name of the object.

- Shapes: `[](shape_key=<key>)`
- Shape type: `[](type_key=<key>)`
- Data Layer: `[](datalayer_key=<key>)` 

Additionally you can also use the Django Template URL tag like this: `[]({% url "<app>:<name>" [parameters] %})`

## Images & files

To insert images in a document you can use the standard Markdown syntax for images `![<alt text>](<path>)`. The path should originate form `docs/`, i.e., `![alt](./image.png`) to include the image saved at `docs/image.png`. 

If you need more complex markup in an HTML `<img>` you can use the `{% file "<path>" %}` Django Template tag like this: 

```
<img src="{% file './images/GabonDepartments.svg' %}" alt="...">
```

The path again needs to originate from inside the `docs/` folder.

This can also be used inside links to, i.e. link to files: `[PDF file]({% file './infos.pdf' %})`.


## Variables

The Markdown content gets processed by the Django Template Engine beforehand. So you can also use variables and template tags available from the Django framework. The variables names need to be put between double curly braces like this <code v-pre>{{ var_name }}</code>.

| Variable name        | Content                       |
| -------------------- | ----------------------------- |
| `{{ datahub_name }}` | Name of the Data Hub instance |


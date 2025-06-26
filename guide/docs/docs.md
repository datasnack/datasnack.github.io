# Documentation pages

The Data Hub allows you to create generic documentation pages below the *Docs* section in the navigation.
For this create [Markdown files](https://www.markdownguide.org/basic-syntax/) inside the `./docs/` folder of your project.

The File `Home.md` inside this folder is used to display the home page of your Data Hub. Other than that you free to create any and as many files as needed. The navigation shows the up to one folder depth.

- To **sort** the items in the navigation you can prepend a prefix to filename like this `10_*`, `20_*`, … This prefix will not show in the navigation item name.
- For **translating** pages you can create files with the same name but an additional suffix consisting of the language code, i.e., if `Project.md` contains the English variant, `Project.de.md` contains the German one. English is expected to be the default language.

Additionally, you can add a front matter, a YAML based configuration between `---` separators at the beginning of your Markdown files consisting of further attributes of the files. This can be used to change the display name of an entry, i.e., for translated pages that should not have the file (English) name as navigation entry use this:


```md [Project.de.md]
---
title: Projekt
---

# Projekt

Lorem… 
```

## Images

You can add images to your documentation, the files need to be placed inside the folder `./docs/images/`. Inside the Markdown files include them with <code v-pre>![]({% static "$filename %})</code>. For example the image at `./docs/images/example.png` would be included by <code v-pre>![]({% static "example.png" %})</code>.


## Variables

The Markdown content gets processed by the Django Template Engine beforehand. So you can also use variables and template tags available from the Django framework. The variables names need to be put between double curly braces like this <code v-pre>{{ var_name }}</code>.



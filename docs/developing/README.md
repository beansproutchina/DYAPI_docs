# Developing Introduction

As a developer, we should know how to develop a backend service. The following sections will introduce you the basic concepts of backend development and how to use DYAPI2 to develop a backend service.

With the help of DYAPI2, creating a backend service is just creating Models, Controllers, and Middlewares. Let's have a peek of DYAPI2 project file structure arrangement.

## File Structure

The file structure of a DYAPI2 project is as follows:
```
├── config 
│    ├── settings.js
│    ├── middlewares.js
│    └── <Your-Js-Files>
├── data
├── dyapi
│    ├── dyapi.js
│    ├── jwt.dyapi.js
│    ├── JsonContainer.dyapi.js
│    ├── SQLiteContainer.dyapi.js
│    └── SqlUtility.js
├── create.js
├── update.js
├── index.js
└── package.json
```

The `create.js` and `update.js` files create and update DYAPI framework. If you don't want the DYAPI framework stay up to date, you can remove these files.

The `index.js` file is the entry point of the project.

The `dyapi` directory contains the core codes of DYAPI, which will be discussed in detail in next sections.

The `data` directory is where we should put database files in, but is not compulsory.

In the `config` directory, there is a `settings.js` file containing [Global Settings](./globalSettings.md) of the project. **Normally, application developers' `js` files should also be put in this directory, which will be automatically loaded when the server starts.** These files define models, controllers and middlewares for the project. Due to the importance of the order of middlewares, we recommend you register all the middlewares in the `Middlewares.js` file.


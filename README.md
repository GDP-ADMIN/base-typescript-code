# Base TypeScript Code

This is a TypeScript project template for TypeScript development in GDP Labs.

Please note that this is a general template. When you use TypeScript to start a project, you'll most likely use a more specific tech stack:

1. For frontend, you'll probably use [NextJS](https://nextjs.org) or [Angular](https://angular.io/).
2. For backend, you'll probably use [NextJS](https://nextjs.org), [NestJS](https://nestjs.com/), or [Express](https://expressjs.com/).
3. For mobile, you'll probably use [React Native](https://reactnative.dev/).

Please apply the concept in this repo appropriately and **adjust as necessary**.

## Minimum Requirements

1. Node version 18 or higher.

## Getting Started

1. Install [NVM](https://github.com/nvm-sh/nvm) if you haven't already. NVM will allow you to switch Node version easily.
2. There's a list of recommended extension in `.vscode/extensions.json`. Install it by following [this documentation](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions).
   1. Open [VSCode user settings](https://code.visualstudio.com/docs/getstarted/settings) and add the following settings for [psioniq.psi-header extension](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header). This will allow you to insert header comment by executing command `Header Insert` (Cmd + P then type `> Header Insert`):

```
"psi-header.variables": [
    ["author", "Your name"],
    ["authoremail", "Your email"],
    ["modifyauthor", "Your name"],
    ["modifyauthoremail", "Your email"]
  ],
  "psi-header.templates": [
    {
      "language": "*",
      "template": [
        "<<filename>>",
        "DEFAULT DESCRIPTION. EDIT OR DELETE THIS.",
        "",
        "Author: <<author>> (<<authoremail>>)",
        "Created at: <<filecreated('MMMM Do YYYY')>>",
        "-----",
        "Last Modified: <<dateformat('MMMM Do YYYY')>>",
        "Modified By: <<modifyauthor>> (<<modifyauthoremail>>)",
        "-----",
        "Reviewed by:",
        "  -",
        "---",
        "References:",
        "  -",
        "---",
        "Copyright (c) <<year>> GDP LABS. All rights reserved."
      ]
    }
  ],
  "psi-header.changes-tracking": {
    "isActive": true,
    "modAuthor": "Modified By: ",
    "modDate": "Last Modified: "
  },
```

## Running Locally

1. Run `npm install`.

This project is meant to be a sample. It's not runnable. When you create a TypeScript project, you'll most likely use a more specific tech-stack/framework (like the ones described in the beginning of this README) and each of them will provide a way to run the project.

## Linting and Formatting

1. If you use VSCode, the linting and formatting will be done automatically on save.
2. If you need to run it programmatically, you can run the following scripts:
   1. `npm run prettier`: checking Prettier formatting.
   2. `npm run prettier-fix`: checking and fix Prettier formatting.
   3. `npm run lint`: checking lint using ESLint.
   4. `npm run lint-fix`: checking and fix lint using ESLint.

## Test

1. Run `npm test`.
2. If you want to generate coverage report, run `npm run test:coverage`.

## Deployment

Majority of CI/CD pipelines in GDP Labs will trigger CI/CD when there's a new push to the `main` branch.

Specific to this sample project, there's no deployment.

## Folder & File Structure

These are short descriptions for each folder/file. Majority of individual files also contain header comments. Please check them out before trying to read the code.

Please note that this is a general template. View it as guideline and adjust accordingly to your project's needs.

1. `.vscode`

It contains VSCode settings. It's recommended to use VSCode as your IDE.

`extensions.json`: contains recommended extensions. Install it by following [this documentation](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions).

`settings.json`: this will set the VSCode formatter to Prettier and make it format the code on save.

2. `src`

Contains the source code for your project

3. `tests`

Contains test source code for your project

4. `.eslintignore`

Contains files and folders to be ignored by eslint configuration at ``.eslintrc.js`

5. `.eslintrc.js`

Contains linting configuration for eslint

6. `.gitignore`

Contains files & folders to be ignored by git.

7. package-lock.json

Describes the dependency tree generated by installing dependencies in `package.json`.

8. `package.json`

Various script and dependency list.

9. `README.md`

This file.

10. `sonar-project.properties`

Contains configuration for SonarQube, a sofware to analyze code quality.

11. `tsconfig.json`

TypeScript configuration file.

12. `vitest.config.js`

Configuration file for `vitest`, a Unit Test library.

## References

1. [TypeScript Style Guide](https://docs.google.com/document/d/1LNgP9RUv2XILrLHE1Vto2TfbraA6CaOBq4TtzFmfDzc).
2. [Python Style Guide](https://docs.google.com/document/d/1uRggCrHnVfDPBnG641FyQBwUwLoFw0kTzNqRm92vUwM).

If you cannot access any of the references, please contact your manager or team lead.

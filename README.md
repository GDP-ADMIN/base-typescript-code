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
2. Run `npm start`.

## Deployment

Just push to the `main` branch. The CI/CD will automatically deploy the code to the server.

## Folder Structure

Short description on what each folder contains. Majority of individual files also contain header comments. Please check them out before trying to read the code.

1. [TODO]

## References

1. [TypeScript Style Guide](https://docs.google.com/document/d/1LNgP9RUv2XILrLHE1Vto2TfbraA6CaOBq4TtzFmfDzc).
2. [Python Style Guide](https://docs.google.com/document/d/1uRggCrHnVfDPBnG641FyQBwUwLoFw0kTzNqRm92vUwM).

If you cannot access any of the references, please contact your manager or team lead.

# Contributing

Open three windows in the terminal from the root of the mono-repo.

Terminal 1: `cd packages/themestress-docs && npm i && npm start`

Terminal 2: `cd packages/themestress && npm i && npm run watch`

Terminal 3: `cd packages/themestress-docs`

Terminal 1 will run the docs where you can experiement with the code being developed in `packages/themestress`.

Terminal 2 will setup a watch on `packages/themestress`. When changes are made, it will output the build to a lib folder in the root.

When you get an error about the themestress package in `terminal 1`, run `npm run linkdocs` in `terminal 3`. This will use `npm link` to connect the lib folder to the docs for development. This command might need to be run every now and then.


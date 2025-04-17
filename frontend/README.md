# Frontend

This project is built with Next.js 15+, Tailwind CSS 4, and shadcn/ui.

### Requirements

- Node.js 20+ and npm / yarn

### Getting started

Run the following command on your local environment:

```shell
git clone <github-url>
cd my-project-name

npm install
# or
yarn install
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
# or
yarn dev
```

Open http://localhost:3000 to see your project.

### Project structure

```shell
.
├── README.md                       # README file
├── public                          # Public assets folder
└── src
    ├── app                         # Next JS App (App Router)
    ├── components                  # React components
    │   └── ui                      # UI components
    └── features                    # Components and actions specific to a feature
    └── libs                        # 3rd party libraries configuration
    ├── locales                     # Locales folder (i18n messages)
    ├── styles                      # Styles folder
    └── layouts                     # Layout folder
```

### Deploy to production

You can generate a production build with:

```shell
$ npm run build
```

It generates an optimized production build. To test the generated build, run:

```shell
$ npm run start
```

This command starts a local server using the production build. You can now open http://localhost:3000 in your preferred browser to see the result.

# Github Trending Repos

This web app lists the most starred repositories on Github, built using React.js, TypeScript and SASS for styling 🚀.

To visit the actual repository, simply click the repository card and it will automatically open the repository link in a new browser tab.

## Live Demo

To see how the app looks like, please check this live demo: <https://trending-repos.onrender.com/>

## API Rate Limit

Github API has a rate limit of 10 requests/min (For non authenticated users), so you might experience some problems if you keep scrolling so quickly.

## Dependencies

- Node.js
- TypeScript

## Dev Environment

First create a `.env` file in the project root directory and add this environment variable to it.

```text
REACT_APP_API_URL=https://api.github.com/search
```

Run the app in development mode. This will by default start the app at `localhost:3000`

```text
yarn dev
```

Builds the app for production

```text
yarn build
```

This will build the app for production to the `build` folder.

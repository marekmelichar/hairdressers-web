# Add homepage to package.json:

"homepage": "/wp-content/plugins/react-wordpress/widget/build"

# How it works together :
- This repo is a source of [Hairdresser's customers web app](https://janamelicharova.cz/#/customers)
- After `yarn build` we take the build folder, and load it into [`hairdressers-react-wordpress-glue`](https://github.com/marekmelichar/hairdressers-react-wordpress-glue) repo
- [`hairdressers-react-wordpress-glue`](https://github.com/marekmelichar/hairdressers-react-wordpress-glue) repo provides us the shortcode `[erw_widget]`, which we can take and use it inside any theme, but for this purpose we are using the intentionally empty `hairdressers-theme-master`
- Then we use the REST API plugin repo [`hairdressers-customers-api`](https://github.com/marekmelichar/hairdressers-customers-api)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## prerequisite
To run the application npm and node.js should be installed.

### Used Tools and Libraries
1) create-react-app (React.js)
2) axios (For Api calls)
### Testing tools
1) enzyme
2) enzyme-adapter-react-16
3) react-test-renderer
4) jest
### Deployment
1) Heroku
2) Firebase

### Features of application
* Application Fetches spacex 100 missions details on first load
* Fiters are provided in the application
* Single filter and combined filter
* Filter colour change on selection
* Responsive UI for all kind of device

### Development Approach
* Test driven approch followed
* Used PureComponent instead of component to avoid unnecessary re-rendering
* Sending API calls ony when state changes
* Used axios baseURL feature
* Used flexbox and media query for responsive UI
* Segregation of functional and class based component
* Used functional component for UI and functinality purpose
* API calls and state management in class based component

## Available Scripts

In the project directory, you can run:
## npm install
install all dependencies
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
### Performance optimization
1) Checked if user is clicking already selected year. In that case don't send API calls again.
2) Checked if user is clicking already selected lanch staus and landing status. In that case don't send API calls again.
3) Extended PureComponent instead of Component to avoid unnecessary rerendering.

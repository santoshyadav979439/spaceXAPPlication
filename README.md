This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Prerequisite
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
### Performance optimization
* Checked if user is clicking already selected year. In that case don't send API calls again.
* Checked if user is clicking already selected lanch staus and landing status. In that case don't send API calls again.
* Extended PureComponent instead of Component to avoid unnecessary rerendering.
### Deployment Links
* https://spacex-application.herokuapp.com/
* https://spacex-api-b3cbb.web.app/
### How to run application on local

## `npm start`
install all dependencies
### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm test`
Launches the test runner in the interactive watch mode.

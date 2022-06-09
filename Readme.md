# React Native Redux Generator

React Native Redux generator is a tool to complete the initial setup for your react-native app without writing the complete boilerplate code to start your app.

This generator is created with the help of yeomen generator, in which we have provision for integrating the some basic ui components of react native, redux, routing, assets handling, typography, i18n, networking and unit testing setup.

## Steps to use and create app

Here are the steps to follow to download the files. You should have installed the latest versions of node and yarn/npm.

- Install the yeoman genrator with the following command.
  
    `yarn global add yo@latest`

- confirm yeoman version

    `yo --version`
- Checkout the current repository in not.

    `git checkout https://github.com/dev-pacific22/react-native-redux-generator.git`
- Go the  **react-native-redux-generator** directory and execute yarn to install the depedencies.

    `yarn`
- Execute the link command to link current package and access it globally.
  
    `yo link`
- Create react native app.

    `npx react-native init "appName"`
- Go the app directory and execute the command.

    `yo react-native-redux`

    This command will add all the setup to your project according to your selection.
- Run the application.

    `npx pod install`

    `react-native run-ios`

**Note:** This should have to launch your application or you might get some error with respect to dependencies or path specs, you can correct it by opening the app in xcode and vscode and making the needful correction.

If it worked as expected you can go through the project and make the modification according to your project requirements.

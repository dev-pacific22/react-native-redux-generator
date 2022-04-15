const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
  }

  // first stage
  async prompting() {
    this.log("Generator starting... 🤖");
    const config = this.fs.readJSON(this.destinationPath("package.json"));

    this.answers = await this.prompt([
      // {
      //   type: "list",
      //   name: "type",
      //   message: "What shall we create today?",
      //   choices: ["screen", "redux-module"]
      // },
      {
        type: "input",
        name: "moduleName",
        message: "Enter the name for your module",
        default: config.name,
      },
      {
        type: "input",
        name: "theme",
        message: "Do you need a native base theme for your project? y/n",
        default: "n",
      },
      {
        type: "input",
        name: "unittest",
        message:
          "Do you basic unit testing setup with jest and enzyme for your project? y/n",
        default: "n",
      },
    ]);
  }

  async install() {
    await this.yarnInstall(
      [
        "babel-preset-react-native-stage-0",
        // React Navigation dependencies.
        "@react-navigation/native",
        "@react-navigation/stack",
        "react-native-reanimated",
        "react-native-gesture-handler",
        "react-native-screens",
        "react-native-safe-area-context",
        "@react-native-community/masked-view",
        // "react-native-safe-area-view",

        "react-native-vector-icons",
        "i18n-js",
        "lodash",
        "prop-types",
        // redux: dependencies
        "react-redux",
        "redux",
        "redux-thunk",
        "redux-logger",
        "redux-devtools-extension",
        "axios", // network dependencies
        // The UI dependencies
        "native-base",
        "react-native-svg",
        "validator",
        "react-native-loading-spinner-overlay",
        "react-native-modal",
      ],
      { cwd: this.destinationRoot() }
    );
    if (this.answers.unittest == "y") {
      await this.yarnInstall(
        ["enzyme", "enzyme-adapter-react-16", "react-dom"],
        { dev: true }
      );
    }
    // this.spawnCommand('react-native', ['link']);
  }

  // second stage
  writing() {
    this.log("Writing files... 📝");
    this.fs.delete(this.destinationPath("__tests__"));

    this.fs.copyTpl(
      this.templatePath("**/*.js"),
      this.destinationPath(""),
      this.answers
    );

    if (this.answers.theme == "y") {
      this.fs.delete(this.destinationPath("App.js"));
      this.fs.copy(
        this.templatePath("src/AppTheme.js"),
        this.destinationPath("src/App.js")
      );
      this.log("Written App theme....");
    } else {
      this.fs.copy(this.templatePath("**/App.js"), this.destinationPath(""));
      this.log("Written App...");
    }
    this.fs.copy(this.templatePath("**/*.json"), this.destinationPath(""));
    this.fs.copy(this.templatePath("**/*.png"), this.destinationPath(""));
    this.fs.copy(this.templatePath("**/*.jpg"), this.destinationPath(""));
    // this.fs.copy(this.templatePath('**/*.gif'), this.destinationPath(''));
    // this.fs.copyTpl(
    //   this.templatePath('babelrc'),
    //   this.destinationPath('.babelrc')
    // );
  }

  // last stage
  end() {
    if (this.answers.theme == "y") {
      this.log("Added themes... 🤖");
      // this.spawnCommand("node", ["node_modules/native-base/ejectTheme.js"]);
    }
    this.log("Bye... 👋");
  }
};

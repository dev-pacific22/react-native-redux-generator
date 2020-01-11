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
        name: "name",
        message: "Enter the for your module",
        default: config.name
      }
    ]);
  }

  async install() {
    await this.yarnInstall(
      [
        "babel-preset-react-native-stage-0",
        "react-navigation",
        "react-navigation-stack",
        "react-native-gesture-handler",
        "react-native-safe-area-view",
        "react-native-safe-area-context",
        "@react-native-community/masked-view",
        "react-native-vector-icons",
        "i18n-js",
        "lodash",
        // redux: dependencies
        "react-redux",
        "redux",
        "redux-thunk",   
        "axios", // network dependencies
        // The UI dependencies
        "native-base",
        "validator"
      ],
      { cwd: this.destinationRoot() }
    );
    // this.spawnCommand('react-native', ['link']);
  }

  // second stage
  writing() {
    this.log("Writing files... 📝");
    this.fs.delete(this.destinationPath("__tests__"));
    this.fs.delete(this.destinationPath("App.js"));

    this.fs.copyTpl(
      this.templatePath("**/*.js"),
      this.destinationPath(""),
      this.answers
    );
    this.fs.copy(this.templatePath("**/App.js"), this.destinationPath(""));
    this.fs.copy(this.templatePath("**/*.json"), this.destinationPath(""));
    this.fs.copy(this.templatePath("**/*.png"), this.destinationPath(""));
    // this.fs.copy(this.templatePath('**/*.gif'), this.destinationPath(''));
    // this.fs.copyTpl(
    //   this.templatePath('babelrc'),
    //   this.destinationPath('.babelrc')
    // );
  }

  // last stage
  end() {
    this.log("Bye... 👋");
  }
};

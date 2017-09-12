var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  install() {
    this.installDependencies({
      npm: true,
      bower: true
    });
  }
  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'project',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    },{
      type    : 'input',
      name    : 'version',
      message : 'Your project version',
      default : '0.0.1'
    },{
      type    : 'input',
      name    : 'author',
      message : 'Your project Author name',
      default : 'GE OG SG Merlions'
    },{
      type    : 'input',
      name    : 'authorMail',
      message : 'Your project Author Email',
      default : 'ogdx.sg.merlions@ge.com'
    },{
      type    : 'input',
      name    : 'pxDevAppName',
      message : 'Your project\'s Predix Cloud App Name (Development Environment)',
      default : 'my-app-dev'
    },{
      type    : 'input',
      name    : 'pxPrdAppName',
      message : 'Your project\'s Predix Cloud App Name (Production Environment)',
      default : 'my-app-prd'
    }]).then((answers) => {
      this.log("Hold your breath...");
      this._writeToFiles(answers);
      this._copyCommons();
    });
  }

  _writeToFiles(ans) {
    this.fs.copyTpl(
      this.templatePath('files/_index.html'),
      this.destinationPath('public/_index.html'),
      ans
    );
    this.fs.copyTpl(
      this.templatePath('files/bower.json'),
      this.destinationPath('bower.json'),
      ans
    );
    this.fs.copyTpl(
      this.templatePath('files/manifest-dev.yml'),
      this.destinationPath('manifest-dev.yml'),
      ans
    );
    this.fs.copyTpl(
      this.templatePath('files/manifest-release.yml'),
      this.destinationPath('manifest-release.yml'),
      ans
    );
    this.fs.copyTpl(
      this.templatePath('files/package.json'),
      this.destinationPath('package.json'),
      ans
    );
    this.fs.copyTpl(
      this.templatePath('files/version.json'),
      this.destinationPath('version.json'),
      ans
    );
  }

  _copyCommons() {
    this.fs.copy(
      this.templatePath('app'),
      this.destinationRoot()
    );
    this._copyDots();
  }

  _copyDots() {
    this.fs.copy(
      this.templatePath('dots/.bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('dots/.cfignore'),
      this.destinationPath('.cfignore')
    );
    this.fs.copy(
      this.templatePath('dots/.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );
    this.fs.copy(
      this.templatePath('dots/.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('dots/.jshintrc'),
      this.destinationPath('.jshintrc')
    );
  }
};

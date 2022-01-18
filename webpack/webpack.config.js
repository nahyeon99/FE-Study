// npx webpack --mode development --entry ./src/app.js -o ./dist
// 위의 명령을 webpack.config.js 파일에 명시해둔 것

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
};

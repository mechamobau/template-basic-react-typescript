import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html"
});

const root = path.resolve(__dirname, "..");

const config: webpack.Configuration = {
  // Declara o ambiente como ambiente de produção
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: `${root}/dist`,
    filename: "bundle.js"
  },
  resolve: {
    // Adiciona as extensões .ts e .tsx como extensões possíveis de resolver
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // Todos os arquivos contendo '.ts' ou '.tsx' serão manipuladas
      // pelo 'awesome-typescript-loader'

      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  plugins: [htmlPlugin]
};

export default config;

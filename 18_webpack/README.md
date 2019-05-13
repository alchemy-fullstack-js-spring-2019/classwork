# Webpack

## Agenda

* Single Page Apps (SPA)
  * One HTML file
  * Changes to the view are handled by JavaScript
* Bundling with Webpack

## New Dependencies

* `npm i -D webpack webpack-cli`
* `npm i -D webpack-dev-server`
* `npm i -D babel-loader @babel/core @babel/preset-env eslint eslint-plugin-babel babel-eslint`
* `npm i -D style-loader css-loader url-loader file-loader`
* `npm i -D postcss-loader postcss-nested autoprefixer`
* `npm i -D html-webpack-plugin clean-webpack-plugin`
* `npm i -D identity-obj-proxy`

## Single Page Apps

Single Page Apps (SPAs) have one HTML file with very little content. Most of
the page is rendered and updated using JavaScript.

## Webpack

Webpack is used to bundle multiple JavaScript files into a single file. Webpack
is configured by creating a `webpack.config.js` file at the root of your project.

```js
// webpack.config.js
// export a configuration object
module.exports = {

};
```

Additionally, we need to add a `build` script to our `package.json`

```js
"build": "webpack -p"
```

### Entry

In order to start bundling JavaScript files you need to provide an entry point.
This acts as the main JavaScript file.

When using the built in JavaScript module system, your entry point is the file
you provide to the `script` tag.

```js
// webpack.config.js
// export a configuration object
module.exports = {
  entry: './src/index.js'
};
```

If not provided, the entry field defaults to `./src/index.js`.

### Output

After Webpack has bundled your JavaScript it needs to output the bundle somewhere.
To specify where the bundle is saved provided an `output` key.

```js
// webpack.config.js
// export a configuration object
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.js'
  }
};
```

If not provided, the output field defaults to `./dist/main.js`.

#### Cache

Browsers will often cache files locally. If the browser finds a file in its cache
it will not make a request to get the file. This can cause issues if you've updated
your JavaScript, but the browser continues to load an older version from cache. To
prevent this webpack allows you to make unique filenames as output.

```js
// webpack.config.js
// export a configuration object
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.[hash].js'
  }
};
```

Here `[hash]` will be a unique hash creating a unique file name.


### DevServer

During development we can bundle our code and start a development server to view our code
in a browser. To do this we need to setup `webpack-dev-server`

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.[hash].js'
  },
  devServer: {
    port: 7890
  }
};
```

Additionally, we need to add a `start` script to our `package.json`

```js
"start": "webpack-dev-server --hot --mode development",
```

### DevTool

Since our JavaScript is bundled together, our error messages stop making sense. Instead of
getting error messages (line numbers and file names) based on our pre-bundled code, errors
are presented based on our bundled code. This makes debugging hard.

To prevent this we can add a source map which maps lines from the bundled file to our
original source files.

```js
"start": "webpack-dev-server --hot --mode development --devtool eval-source-map",
"build": "webpack -p --devtool source-map"
```

### Loaders

Webpack can also run your JavaScript files through loaders, which allows you to transpile
(or transform) your JavaScript.

Loader | Behavior
------ | --------
`babel-loader` | Transpile modern JavaScript into versions compatible with older browsers
`style-loader` | Inject CSS by importing into JavaScript files
`css-loader` | `@import` and `url` are treated like imports
`postcss-loader` | Transpile PostCSS into CSS
`url-loader` | Import files (like images) into JavaScrip. Transforms them into base64 data urls
`file-loader` | Import files into JavaScript.

Loaders are added as `rules`. Each rule takes a `test`, an optional `excludes`, and a `use`
field. `test` is a regular expression that selects the files that should run through the loader.
`excludes` is a regular expression that deselects files that should be skipped by the loader.
`use` is an object with `loader` (the name of the loader to use) and `options` (options to
pass to the loader). Alternatively, `use` can be an array of objects.

```js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.[hash].js'
  },
  devServer: {
    port: 7890
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
```

### Plugins

Plugin | Behavior
------ | --------
`html-webpack-plugin` | Inject bundled JavaScript into an HTML template
`clean-webpack-plugin` | Delete old bundle files
`dotenv-webpack` | Import environment from a `.env` file

Plugins allow us to customize the webpack bulid process. Plugins are added
with a `plugins` field.

```js
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.[hash].js'
  },
  devServer: {
    port: 7890
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
```

## Babel

When using babel we need to add a `.babelrc` file for it to
transpile our code correctly.

```js
{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": []
}
```

## Updated .eslintrc

```js
{
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "jest": true
  },
  "plugins": [
    "babel"
  ],
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "no-console": "warn",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-in-parens": [
      "error"
    ],
    "space-infix-ops": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "comma-spacing": "error",
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
        "overrides": {
          "do": {
            "after": false
          },
          "for": {
            "after": false
          },
          "if": {
            "after": false
          },
          "switch": {
            "after": false
          },
          "while": {
            "after": false
          },
          "catch": {
            "after": false
          }
        }
      }
    ],
    "array-bracket-spacing": "error",
    "babel/no-invalid-this": 1,
    "babel/semi": 0
  }
}
```

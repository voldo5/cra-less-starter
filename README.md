# Create React App LESS starter

Create React App boilerplate with LESS compiler setup, Ant Design React UI library.

Setup Less with create-react-app, add Ant Design React UI library, get default variables from ant-design default.less file.

https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less  
https://github.com/voldo5/cra-less-starter  
https://dev.to/joefstack/how-to-setup-less-with-react-without-ejecting-1nej

npx create-react-app cra-less-starter
npm install less less-watch-compiler concurrently --save-dev

add file less-watcher.config.json
{
"watchFolder": "src/",
"outputFolder": "src/",
"sourceMap": true,
"runOnce": false,
"enableJs": true
}

npm install concurrently --save-dev

add to package.json
"scripts": {
"start": "concurrently --kill-others \"less-watch-compiler --config less-watcher.config.json\" \"react-scripts start\"",
…
},

npm i -S craco-antd antd
npm install
npm start

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

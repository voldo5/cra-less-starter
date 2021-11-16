## Create React App boilerplate with LESS compiler setup

## and Ant Design React UI library.

#### Task: <span style="color:blue"> Setup Less with create-react-app boilerplate, add Ant Design React UI library, get default variables from ant-design default.less file.</span>

There is not such an easy solution to handle compiling **_Less_** stylesheets. This is problematic because to manually configure webpack to compile **_Less_** stylesheets requires us to eject from the default **_create-react-app_** configuration. So, set it up with react app, without having to eject from **_create-react-app_** and modifying webpack config manually. We also add **_antd_** (Ant Design React UI library) to project. The antd use **_Less_** **_language_** extension for CSS, so we show, also, how to get default variables from antd less files.

You can find more details here:

https://dev.to/joefstack/how-to-setup-less-with-react-without-ejecting-1nej

https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less  
https://github.com/voldo5/cra-less-starter

**Create project commands:**

```js
npx create-react-app cra-less-starter
npm install less less-watch-compiler concurrently --save-dev
```

add file **less-watcher.config.json**

```js
{
"watchFolder": "src/",
"outputFolder": "src/",
"sourceMap": true,
"runOnce": false,
"enableJs": true
}
```

```js
npm install concurrently --save-dev
```

add to **package.json**

```js
"scripts": {
"start": "concurrently --kill-others \"less-watch-compiler --config less-watcher.config.json\" \"react-scripts start\"",
…
},
```

```js
npm i -S craco-antd antd
npm install
npm start
```

add link to antd less default variables in **App.less** file

```js
@import "antd/lib/style/themes/default.less";
```

and, for example, add two variables

```js
@app-primary: #0f3460;
@app-secondary: #d9322c;
```

and, for example, use antd default variable **@height-lg** in **custom-btn** class

```js
.custom-btn {
  background: @app-secondary;
  height: @height-lg + 6;
}
```

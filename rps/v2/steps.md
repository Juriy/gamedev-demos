1. npm install --save-dev babel-cli

2. Update package.json:

+   "scripts": {
+     "build": "babel client/js -d client/dist"
+   },

3. npm run build

This should do no translation at all. Just take the source and copy-paste it to the folder.

Installing Babel Modules
-----------------

npm install --save-dev babel-preset-es2015 babel-preset-stage-1

change .babelrc

{
  "presets": ["es2015", "stage-1"]
}
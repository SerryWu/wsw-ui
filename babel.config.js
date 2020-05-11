module.exports = {
  presets:[
    "@babel/preset-env",
    {
      "modules": false,
      "targets": {
          "browsers": [
              "Android >= 4",
              "iOS >= 8"
          ]
      },
      "useBuiltIns": "usage"
    }
  ],
  plugins:[
    "@babel/plugin-transform-runtime",
    ["import", {
      "libraryName": "wsw-ui",
      "libraryDirectory": "lib",
      "style": true,       
    }]
  ]
}


const presets = [
      "@babel/preset-env",

      "@vue/babel-preset-jsx"
];

const plugins = [
  "@babel/plugin-transform-runtime",
];


// if (process.env["NODE_ENV"] === "test") {
//     presets[0][1].modules = "commonjs";
// }



module.exports = { presets, plugins };
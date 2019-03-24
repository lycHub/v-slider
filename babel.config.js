module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
# Changelog

December 6, 2021

- Upgraded all packages to latest version: Webpack v5, React 17, etc.
- Disabled esLint.
- The hot reload is not broken, we need to review how to implemented with the new webpack dev server because the `public` property is not allowed anymore as a paratmeter for the deServer, we tried the following iwthout any luck:

```js
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      webSocketURL: publicUrl
    },
  },
```

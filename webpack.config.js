module.exports = {
  // ... other Webpack configuration options ...

  module: {
    rules: [
      // ... other rules ...

      {
        test: /\.html$/,
        use: "null-loader",
      },
    ],
  },

  // ... other Webpack configuration options ...
};

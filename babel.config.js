module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "module:react-native-dotenv",
      [
        "module-resolver",
        {
          root: ["src"],
          extensions: ["json", "js", "svg", "png", "jpg", "jsx"],
          alias: {
            views: "./src/views",
            constants: "./src/constants",
            assets: "./src/assets",
            underscore: "lodash",
            helpers: "./src/helpers",
            context: "./src/context",
            routes: "./src/routes",
            hooks: "./src/hooks",
            shared: "./src/shared",
            services: "./src/services",
            layouts: "./src/layouts",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};

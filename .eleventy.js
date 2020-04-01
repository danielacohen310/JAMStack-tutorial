module.exports = function(config) {

  // For HTTPS local serving
  // config.setBrowserSyncConfig({
  //   https: {
  //     key: '/localhost.key',
  //     cert: '/localhost.cert'
  //   }
  // });

  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };
};

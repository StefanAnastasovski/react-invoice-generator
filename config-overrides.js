const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@app": "src/app",
    "@images": "src/assets/images",
    "@components": "src/components",
    "@features": "src/features",
    "@pages": "src/pages",
    "@layouts": "src/layouts",
  })(config);

  return config;
};

const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@app": "src/app",
    "@images": "src/assets/images",
    "@icons": "src/assets/icons",
    "@components": "src/components",
    "@features": "src/features",
    "@pages": "src/pages",
    "@layouts": "src/layouts",
    "@styles": "src/styles",
    "@stores": "src/stores",
    "@constants": "src/constants",
    "@hooks": "src/hooks",
    "@utils": "src/utils",
    "@config": "src/config",
  })(config);

  return config;
};

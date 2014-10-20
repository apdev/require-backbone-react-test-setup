var paths = {
  jquery: "vendor/jquery.2.1.0",
  underscore: "vendor/lodash.compat.2.4.1",
  backbone: "vendor/backbone.1.1.2",
  
  react: "vendor/react.0.10.0",
  JSXTransformer: "vendor/plugins/JSXTransformer.0.10.0",

  text: "vendor/plugins/require.text.2.0.10",
  jsx: "vendor/plugins/require.jsx.0.1.0",
};

if (typeof module !== "undefined") {
  module.exports = {
    paths: paths
  };
} else {
  require.config({
    paths: paths,
    shim: {
      "backbone": {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },

      "underscore": {
        exports: "_"
      }
    }
  });

  require(
    [
      "jsx!app/view/base",
      "react",
      "backbone"
    ],
    function (BaseView, React, Backbone) {
      "use strict";

      React.renderComponent(BaseView(), document.getElementById("page"));
    }
  );
}


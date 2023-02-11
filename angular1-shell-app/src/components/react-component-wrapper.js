// import React from "react";
// import ReactDOM from "react-dom";
// const ReactApp = import("reactApp/App");

export default {
  template: `
        <h2>An angular 1.8 wrapper component for a async loaded react component</h2>
        <div id="react-root"></div>
      `,
  controller: function () {
    this.$postLink = () => {
      // moved loading of all shared depdendencies to when component is rendered
      // so react is only loaded when the component has to be rendered.
      // When Webpack comes across this syntax ("import()"), it automatically starts code-splitting your app
      const React = import("react");
      const ReactDOM = import("react-dom");
      const ReactApp = import("reactApp/App");

      // ReactApp.then((r) => {
      Promise.all([React, ReactDOM, ReactApp]).then(
        ([React, ReactDOM, ReactApp]) => {
          console.log("rendering react component");
          const el = React.createElement(ReactApp.default);
          ReactDOM.render(el, document.getElementById("react-root"));
        }
      );
    };
  },
};

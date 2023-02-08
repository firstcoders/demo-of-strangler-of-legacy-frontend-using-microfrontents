import React from "react";
import ReactDOM from "react-dom";
const ReactApp = import("reactApp/App");

export default {
  template: `
        <h2>An angular 1.8 wrapper component for a react component</h2>
        <div id="react-root"></div>
      `,
  controller: function () {
    this.$postLink = () => {
      ReactApp.then((r) => {
        console.log("rendering react component");
        const el = React.createElement(r.default);
        ReactDOM.render(el, document.getElementById("react-root"));
      });
    };
  },
};

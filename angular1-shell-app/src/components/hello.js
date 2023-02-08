export default {
  controller: function () {},
  template: `
        <h2>An angular 1.8 component</h2>
        <react-component-wrapper></react-component-wrapper>
      `,
};

// Note: You can also wrap a controller or a directive
// in a Custom Element!

// export class MfeAngularJs extends HTMLElement {
//   connectedCallback() {
//     const root = document.createElement("hello-component");
//     this.appendChild(root);
//     angular.bootstrap(root, ["app"]);
//   }
// }

// customElements.define("angularjs-element", MfeAngularJs);

export default {
  controller: function ($element) {
    $element.css({
      border: "5px dashed var(--angular-component-border-color)",
      display: "block",
      padding: "1rem",
    });
  },
  template: `
        <h2>An angular 1.8 component</h2>
      `,
};

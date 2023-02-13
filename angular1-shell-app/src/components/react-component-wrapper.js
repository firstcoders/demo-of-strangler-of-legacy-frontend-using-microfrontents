export default {
  template: `
        <h2>An angular 1.8 wrapper component</h2>
        <div data-react-root></div>
      `,
  controller: function ($element) {
    $element.css({
      border: "5px dashed var(--angular-component-border-color)",
      display: "block",
      padding: "1rem",
    });

    // ref to react root
    let reactRoot;

    this.$postLink = async () => {
      // load these depdendencies to when component is rendered
      // so react is only loaded when the component has to be rendered.
      // When Webpack comes across this syntax ("import()"), it automatically starts code-splitting your app
      const [React, ReactDOM, ReactApp] = await Promise.all([
        import("react"),
        import("react-dom/client"),
        import("reactApp/App"),
      ]);

      console.log("rendering react component in shadow dom");

      const reactElement = React.createElement(ReactApp.default, {
        basePath: "react",
      });

      const container = document.querySelector("[data-react-root]", $element);

      // This is to show how to do style encapsulation in order so we dont get style polution from any legacy css
      // Top level css can theme the component using css vars (which do cascade down, unlike normal css rules).
      const shadow = container.attachShadow({ mode: "open" });

      // One can efficiently share styles with multiple shadow-DOM components using constructable stylesheets.
      // @see https://web.dev/constructable-stylesheets/
      // Although this is probably not a good idea in most cases, e.g.
      // @see https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng
      // It is a good idea for components to be stand-alone and not depend on pre-loaded styles
      const constructedStylesheet = new CSSStyleSheet();
      await constructedStylesheet.replace(
        ".constructed-stylesheet-color-pink { color: pink; }"
      );
      shadow.adoptedStyleSheets = [constructedStylesheet];

      reactRoot = ReactDOM.createRoot(shadow);
      reactRoot.render(reactElement);
    };

    this.$onDestroy = async () => {
      // tnis is to ensure that the normal lifecycle hooks (such as componentWillUnmount are called)
      console.debug("Unmounting react root");
      reactRoot.unmount();
    };
  },
};

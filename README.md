This is a POC showing several ideas:

<ul>
<li>It shows how one can start including new REACT/VueJS (or else) components in a shell app built with a legacy front-end framework by using <a href="https://webpack.js.org/concepts/module-federation/" target="blank">Module Federation</a>.</li>
<li>It explores a way in which a nested App or component can inform the shell app router about any sub-routing by exporting a routes module.</li>
<li>It shows how nested Apps can benefit from style encapsulation by utilising a shadow DOM, thereby ensuring that legacy CSS rules of the shell app do not pollute styling.</li>
<li>It explores how the nested App can inject it's styles into it's relevant shadowDOM.</li>
</ul>
<a
          href="https://github.com/firstcoders/demo-of-strangler-of-legacy-frontend-using-microfrontents"
          target="blank"
          >https://github.com/firstcoders/demo-of-strangler-of-legacy-frontend-using-microfrontents</a
        >

# Links

## Micro-frontends

- https://servian.dev/how-micro-frontend-frameworks-are-replacing-legacy-monoliths-f66f34d06a2

## Module Federation

- https://github.com/module-federation/module-federation-examples

## Shadow-DOM

- https://www.wpeform.io/blog/render-react-app-shadow-dom-styled-components/

## Styles

- https://web.dev/constructable-stylesheets/
- https://dev.to/westbrook/why-would-anyone-use-constructible-stylesheets-anyways-19ng

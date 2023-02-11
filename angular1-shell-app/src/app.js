import angular from "angular";
import helloComponent from "./components/hello";
import reactComponentWrapper from "./components/react-component-wrapper";
import "@uirouter/angularjs";

const registerFederatedComponentRoutes = (
  $stateProvider,
  routes,
  namespace
) => {
  routes.map(({ name, path }) => {
    $stateProvider.state({
      name: `${namespace}.${name}`,
      url: path,
      template: "<div>Subnav</div>",
    });
  });
};

angular
  .module("app", ["ui.router"])
  .config(($stateProvider) => {
    $stateProvider
      .state({
        name: "angular",
        url: "/angular",
        template: "<div ui-view></div>",
      })
      .state({
        name: "angular.subnav",
        url: "/subnav",
        component: "helloComponent",
      })
      .state({
        name: "reactApp",
        url: "/react",
        component: "reactAppWrapperComponent",
      });

    // dynamically load routes exposed by the federated component and add to the angular router.
    import("reactApp/routes").then((module) =>
      registerFederatedComponentRoutes(
        $stateProvider,
        module.default.routes,
        "reactApp"
      )
    );
  })
  .component("helloComponent", helloComponent)
  .component("reactAppWrapperComponent", reactComponentWrapper);

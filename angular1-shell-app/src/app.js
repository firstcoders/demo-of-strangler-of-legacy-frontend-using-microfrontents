import angular from "angular";
import helloComponent from "./components/hello";
import reactComponentWrapper from "./components/react-component-wrapper";
import "@uirouter/angularjs";

angular
  .module("app", ["ui.router"])
  // .config([
  //   "$routeProvider",
  //   function config($routeProvider) {
  //     $routeProvider
  //       .when("/angular", {
  //         template: "<hello-component></hello-component><div ui-view></div>",
  //       })
  //       .when("/angular/sub-nav", {
  //         template: "<p>A sub view</p>",
  //       })
  //       .when("/react", {
  //         template: "<react-component-wrapper></react-component-wrapper>",
  //       })
  //       .when("/react/sub-nav", {
  //         template: "<p>A sub view</p>",
  //       })
  //       .otherwise("/angular");
  //   },
  // ])
  .config(function ($stateProvider) {
    $stateProvider
      .state({
        name: "angular",
        url: "/angular",
        template: "<div ui-view></div>",
      })
      .state({
        name: "angular.subnav",
        url: "/subnav",
        template: "<hello-component></hello-component>",
      })
      .state({
        name: "react",
        url: "/react",
        template: "<react-component-wrapper></react-component-wrapper>",
      })
      .state({
        name: "react.subnav",
        url: "/subnav",
        template: "<div>Subnav</div>",
      });
  })
  .component("helloComponent", helloComponent)
  .component("reactComponentWrapper", reactComponentWrapper);

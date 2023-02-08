import angular from "angular";
import helloComponent from "./components/hello";
import reactComponentWrapper from "./components/react-component-wrapper";

angular
  .module("app", [])
  .component("helloComponent", helloComponent)
  .component("reactComponentWrapper", reactComponentWrapper);

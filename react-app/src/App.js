import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubNav from "./components/Subnav";
import SubNav2 from "./components/Subnav2";
import styles from "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }

  render() {
    const basePath = this.props.basePath || "";

    return (
      <div ref={this.el} className="container">
        <h2>React App with Subnavigation</h2>
        <Router>
          <nav>
            <Link to={`${basePath}/subnav`}>Subnav</Link>
            <Link to={`${basePath}/subnav2`}>Subnav2</Link>
          </nav>

          <Routes>
            <Route path={`${basePath}/subnav`} element={<SubNav />} />
            <Route path={`${basePath}/subnav2`} element={<SubNav2 />} />
          </Routes>
        </Router>
      </div>
    );
  }

  componentDidMount() {
    // @see https://webpack.js.org/loaders/style-loader/#lazystyletag
    // @see also https://webpack.js.org/loaders/style-loader/#insert for inserting in the shadowRoot

    // if the component is rendered in a shadow DOM then styles cannot be inserted into the <head> (the usual behavior for webpacks style-loader)
    // since style encapsulation would prevent those styles from taking effect in the shadow. Styles need to be inserted in the shadowRoot.
    // Try to get the shadowRoot here where the styles can be inserted
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode
    const target =
      this.el.current.getRootNode() !== document
        ? this.el.current.getRootNode() // if rootNode is not document, then it's a shadowRoot
        : undefined;

    // perform style injection
    styles.use({ target });
  }

  componentWillUnmount() {
    console.debug("Component cleanup");
    styles.unuse();
  }
}

export default App;

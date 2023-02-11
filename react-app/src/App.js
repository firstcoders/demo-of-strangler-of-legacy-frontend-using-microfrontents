import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SubNav from "./components/Subnav";
import SubNav2 from "./components/Subnav2";

const App = (props) => {
  return (
    <div>
      <h1>React App with Subnavigation</h1>
      <Router>
        <nav>
          <Link to={`/${props.basePath}/subnav`}>Subnav</Link>
          <Link to={`/${props.basePath}/subnav2`}>Subnav2</Link>
        </nav>

        <Routes>
          <Route path={`/${props.basePath}/subnav`} element={<SubNav />} />
          <Route path={`/${props.basePath}/subnav2`} element={<SubNav2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

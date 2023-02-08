import React, { Suspense } from "react";
const ReactApp = React.lazy(() => import("reactApp/App"));
// const Angular1App = React.lazy(() => import("angular1App/App"));

import("angular1App");

// const Angular1App = import("angular1App/App");

// Angular1App.then((r) => console.log(r));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Shell App</h1>
        <Suspense fallback={"loading..."}>
          <ReactApp />
        </Suspense>
      </div>
    </div>
  );
};

export default App;

import React from "react";

function Tasks(e) {
  const project = () => {
    switch (e) {
      case "one":
        return <h1>One</h1>;
      case "two":
        return <h1>Two</h1>;
      case "three":
        return <h1>Three</h1>;

      default:
        return <h1>No project match</h1>;
    }
  };
  return <div>{project(e)}</div>;
}

export default Tasks;

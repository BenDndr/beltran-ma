import React from "react";

function Hello() {
  const sayHello = () => {
    console.log("Hello");
  };
  return (
    <div>
      <h3>hello component</h3>
      <button onClick={sayHello()}>Hello</button>
    </div>
  );

}

export default Hello;

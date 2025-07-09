import React from "react";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

document.body.style.backgroundColor = "#F5F6F7";

setTheme("sap_horizon");

function App() {
  return (
    <>
      <header>
        <h1>Hello World</h1>
      </header>
    </>
  );
}

export default App;

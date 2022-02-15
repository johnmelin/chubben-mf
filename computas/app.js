import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const reactVersion = require("./package.json").dependencies["react"];

    return (
      <div>
        <header>
          <h1 className="information-header">Computas</h1>
          <p className="version">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width="24"
            />
            Version: {reactVersion}
          </p>
        </header>
      </div>
    );
  }
}

class ReactApp extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define("computas-element", ReactApp);

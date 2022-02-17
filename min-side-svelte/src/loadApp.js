import App from "./App.svelte";

const mount = (el) => {
    new App({
        target: el
    });
};

class MinSideApp extends HTMLElement {
  connectedCallback() {
    mount(this);
  }
}

customElements.define("minside-element", MinSideApp);

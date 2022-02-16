import { createApp } from "vue";
import App from "./App";

class VueApp extends HTMLElement {
  connectedCallback() {
    const app = createApp(App);
    app.mount(this);
  }
}

customElements.define("karriere-element", VueApp);

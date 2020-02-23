import { html, createShadowElement } from "shadow-render";
import { mainContainer } from "./appStyle.js";

let AppEntry = createShadowElement({
  state: {
    name: "Welcome To The Shadows"
  },

  methods: {},

  lifecycle: {
    onMount: ctx => {
      setTimeout(() => {
        ctx.setState({
          name: ` Edit App.js to get started `
        });
      }, 3000);
    }
  },

  template: ctx => {
    return html(`
            <div style="${mainContainer}" id="main-container"> 
                <div style="padding:20px;"> ${ctx.state.name} </div>
            </div>
        `);
  }
});

customElements.define("app-entry", AppEntry);

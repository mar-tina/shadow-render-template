import { init, html } from "shadow-render";
import "./components/app.js";

let newtemplate = html(
  "<div>" +
    " <app-entry> </app-entry> " +
    "</div>"
);

const myTemplate = () => newtemplate;

init("#app", myTemplate());

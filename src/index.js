"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./ui/styles.css");
const nickson_1 = require("./nickson");
// import form from "bootstrap";
// import * as form from "bootstrap";
// import edwin from "fob";
// import {CarouselEvent, form} from "bootstrap";
const app = document.querySelector("#app");
if (app) {
    // app.innerHTML = `<h2>Date: ${new Date().getUTCDate()} Time: ${new Date().getTime().toString().slice(0, 24)}</h2>`;
    app.innerHTML = `<h2>Date: ${new Date().toString().slice(0, 24)}</h2>`;
}
class TODOApp {
    constructor() {
        this.eventHandler = (event) => {
            nickson_1.addTask(event);
        };
        this.tasks = [];
        const submitButton = document.getElementById("button1");
        if (submitButton) {
            submitButton.addEventListener("click", this.eventHandler);
        }
    }
}
// tslint:disable-next-line:no-unused-expression
new TODOApp();
//# sourceMappingURL=index.js.map

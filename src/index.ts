import "./ui/styles.css";
import { Task, addTask } from "./nickson";

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
    tasks: Task[];

    constructor() {

        this.tasks = [];

        const submitButton = document.getElementById("button1");

        if (submitButton) {
            submitButton.addEventListener("click", this.eventHandler);
        }
    }

    eventHandler = (event: Event) => {
        addTask(event);
    }

}

// tslint:disable-next-line:no-unused-expression
new TODOApp();

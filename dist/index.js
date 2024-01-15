"use strict";
class Project {
    constructor() {
        this.templateElem = document.querySelector("#project");
        this.renderElem = document.querySelector("#app");
        const imported = document.importNode(this.templateElem.content, true);
        this.formElem = imported.firstElementChild;
        this.formElem.id = "user-input";
        this.titleElem = this.formElem.querySelector("#title");
        this.descElem = (this.formElem.querySelector("#description"));
        this.peopleElem = this.formElem.querySelector("#people");
        this.attach();
        this.config();
    }
    attach() {
        this.renderElem.insertAdjacentElement("afterbegin", this.formElem);
    }
    config() {
        this.formElem.addEventListener("submit", (e) => {
            e.preventDefault();
            let userInput = [
                this.titleElem.value,
                this.descElem.value,
                +this.peopleElem.value
            ];
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.titleElem.value = "";
            this.descElem.value = "";
            this.peopleElem.value = "";
        });
    }
}
const project = new Project();

"use strict";
class Input {
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
    attach() {
        this.renderElem.insertAdjacentElement("afterbegin", this.formElem);
    }
}
class List {
    constructor(type) {
        this.type = type;
        this.templateElem = document.querySelector("#list");
        this.renderElem = document.querySelector("#app");
        const imported = document.importNode(this.templateElem.content, true);
        this.sectionElem = imported.firstElementChild;
        this.attach();
        this.contentRender();
    }
    contentRender() {
        const listId = `${this.type}-projects-list`;
        this.sectionElem.querySelector("ul").id = listId;
        this.sectionElem.querySelector("h2").innerText = `${this.type.toUpperCase()} PROJECTS`;
    }
    attach() {
        this.renderElem.insertAdjacentElement("beforeend", this.sectionElem);
    }
}
class State {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new State();
        return this.instance;
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, desc, nums) {
        const newProject = {
            id: Math.random().toString(),
            title,
            description: desc,
            people: nums
        };
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projInput = new Input();
const activeList = new List("active");
const finishedList = new List("finished");
const prjState = State.getInstance();

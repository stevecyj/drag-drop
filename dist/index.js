"use strict";
class Project {
  constructor() {
    this.templateElem = document.querySelector("#project");
    this.renderElem = document.querySelector("#app");
    const imported = document.importNode(this.templateElem.content, true);
    this.formElem = imported.firstElementChild;
    this.attach();
  }
  attach() {
    this.renderElem.insertAdjacentElement("afterbegin", this.formElem);
  }
}
const project = new Project();

class Project {
  templateElem: HTMLTemplateElement
  renderElem: HTMLTemplateElement
  formElem: HTMLTemplateElement
  constructor() {
    this.templateElem = <HTMLTemplateElement>document.querySelector("#project")
    this.renderElem = <HTMLTemplateElement>document.querySelector("#app")

    const imported = document.importNode(this.templateElem.content, true)
    this.formElem = <HTMLTemplateElement>imported.firstElementChild

    this.attach()
  }

  private attach() {
    this.renderElem.insertAdjacentElement("afterbegin", this.formElem)
  }
}

const project = new Project()

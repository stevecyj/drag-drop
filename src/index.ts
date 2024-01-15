class Project {
  templateElem: HTMLTemplateElement;
  renderElem: HTMLTemplateElement;
  formElem: HTMLTemplateElement;
  titleElem: HTMLInputElement;
  descElem: HTMLInputElement;
  peopleElem: HTMLInputElement;
  constructor() {
    this.templateElem = <HTMLTemplateElement>document.querySelector("#project");
    this.renderElem = <HTMLTemplateElement>document.querySelector("#app");

    const imported = document.importNode(this.templateElem.content, true);
    this.formElem = <HTMLTemplateElement>imported.firstElementChild;
    this.formElem.id = "user-input";

    this.titleElem = <HTMLInputElement>this.formElem.querySelector("#title");
    this.descElem = <HTMLInputElement>(
      this.formElem.querySelector("#description")
    );
    this.peopleElem = <HTMLInputElement>this.formElem.querySelector("#people");

    this.attach();

    this.config();
  }

  private attach() {
    this.renderElem.insertAdjacentElement("afterbegin", this.formElem);
  }

  private config() {
    this.formElem.addEventListener("submit", (e) => {
      e.preventDefault();
      let userInput: [string, string, number] = [
        this.titleElem.value,
        this.descElem.value,
        +this.peopleElem.value
      ];
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
    });
  }
}

const project = new Project();

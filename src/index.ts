class Input {
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

      this.titleElem.value = "";
      this.descElem.value = "";
      this.peopleElem.value = "";
    });
  }

  private attach() {
    this.renderElem.insertAdjacentElement("afterbegin", this.formElem);
  }
}

class List {
  templateElem: HTMLTemplateElement;
  renderElem: HTMLTemplateElement;
  sectionElem: HTMLTemplateElement;
  constructor(private type: "active" | "finished") {
    this.templateElem = <HTMLTemplateElement>document.querySelector("#list");
    this.renderElem = <HTMLTemplateElement>document.querySelector("#app");
    const imported = document.importNode(this.templateElem.content, true);
    this.sectionElem = <HTMLTemplateElement>imported.firstElementChild;

    this.attach();
    this.contentRender();
  }

  contentRender() {
    const listId = `${this.type}-projects-list`;
    this.sectionElem.querySelector("ul")!.id = listId;
    this.sectionElem.querySelector(
      "h2"
    )!.innerText = `${this.type.toUpperCase()} PROJECTS`;
  }

  private attach() {
    this.renderElem.insertAdjacentElement("beforeend", this.sectionElem);
  }
}

const projInput = new Input();

const activeList = new List("active");
const finishedList = new List("finished");

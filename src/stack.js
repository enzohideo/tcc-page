class Stack {
  hide = "display: none;";
  show = "";
  map = {}; // I known... TODO: Use Map

  constructor(elm, visible_id) {
    this.elm = elm;
    for (const child of this.elm.childNodes) {
      const id = child.id;
      this.map[id] = child;
      if (id !== visible_id) {
        child.style = this.hide;
      }
    }
    this.visible_id = visible_id;
  }

  view(id) {
    this.map[this.visible_id].style = this.hide;
    this.map[id].style = this.show;
    this.visible_id = id;
  }
}

class Selector {
  map = {};

  constructor(elements, selected_id, className) {
    this.className = className;
    for (const child of elements) {
      const id = child.id;
      this.map[id] = child;
      if (id == selected_id) {
        child.classList.add(className);
      }
    }
    this.selected_id = selected_id;
  }

  select(id) {
    this.map[this.selected_id].classList.remove(this.className);
    this.map[id].classList.add(this.className);
    this.selected_id = id;
  }
}

const searchParams = new URL(window.location.href).searchParams;
const defaultTab = searchParams.get("tab") || "proposal";
console.log(defaultTab);

// TODO: Remove stack in favour of Selector
const stack = new Stack(document.getElementById("stack"), defaultTab);
const selector = new Selector(
  document.querySelectorAll("nav > button"),
  `tab-${defaultTab}`,
  "tab-selected",
);

document.getElementById("tab-proposal").onclick = () => {
  stack.view("proposal");
  selector.select("tab-proposal");
};

document.getElementById("tab-progress").onclick = () => {
  stack.view("progress");
  selector.select("tab-progress");
};

document.getElementById("tab-monograph").onclick = () => {
  stack.view("monograph");
  selector.select("tab-monograph");
};

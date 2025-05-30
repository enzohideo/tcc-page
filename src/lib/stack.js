export class Stack {
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

export class Selector {
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

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

const stack = new Stack(document.getElementById("stack"), "proposal");

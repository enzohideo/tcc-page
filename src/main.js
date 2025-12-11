import { Stack, Selector } from "./lib/stack";
import "prismjs";

const searchParams = new URL(window.location.href).searchParams;
const startingTab = searchParams.get("tab") || "resumo";

// TODO: Remove stack in favour of Selector
const stack = new Stack(document.getElementById("stack"), startingTab);
const selector = new Selector(
  document.querySelectorAll("nav > button"),
  `tab-resumo`,
  "tab-selected",
);

document.getElementById("tab-resumo").onclick = () => {
  stack.view("resumo");
  selector.select("tab-resumo");
};

document.getElementById("tab-monografia").onclick = () => {
  stack.view("monografia");
  selector.select("tab-monografia");
};

const startingTabElm = document.getElementById(`tab-${startingTab}`);
window.addEventListener("load", startingTabElm.onclick);

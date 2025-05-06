import { Stack, Selector } from "./lib/stack";

const searchParams = new URL(window.location.href).searchParams;
const startingTab = searchParams.get("tab") || "proposal";

// TODO: Remove stack in favour of Selector
const stack = new Stack(document.getElementById("stack"), startingTab);
const selector = new Selector(
  document.querySelectorAll("nav > button"),
  `tab-proposal`,
  "tab-selected",
);

document.getElementById("tab-proposal").onclick = () => {
  stack.view("proposal");
  selector.select("tab-proposal");
};

document.getElementById("tab-schedule").onclick = () => {
  stack.view("schedule");
  selector.select("tab-schedule");

  document.querySelectorAll("#schedule iframe").forEach((iframe) => {
    iframe.style.height = `${iframe.contentWindow.document.documentElement.scrollHeight}px`;
  });
};

document.getElementById("tab-commits").onclick = () => {
  stack.view("commits");
  selector.select("tab-commits");
};

document.getElementById("tab-monograph").onclick = () => {
  stack.view("monograph");
  selector.select("tab-monograph");
};

const startingTabElm = document.getElementById(`tab-${startingTab}`);
window.addEventListener("load", startingTabElm.onclick);

import generate_history from "./history.js";
import generate_summary from "./summary.js";
import html from "./index.html?raw";
import inject from "../lib/inject";

inject("#commits", html);

generate_history();
generate_summary();

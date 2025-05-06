import inject from "../lib/inject";
import longTermHTML from "./long-term.html?raw";
import shortTermHTML from "./short-term.html?raw";
import reportsHTML from "./reports.html?raw";

inject("#schedule-long-term", longTermHTML);
inject("#schedule-short-term", shortTermHTML);
inject("#schedule-reports", reportsHTML);

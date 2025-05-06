import inject from "../inject";
import shortTermHTML from "./short-term.html?raw";
import longTermHTML from "./long-term.html?raw";

inject("#schedule-long-term", longTermHTML);
inject("#schedule-short-term", shortTermHTML);

import inject from "../lib/inject";

import scheduleHTML from "./index.html?raw";
import longTermHTML from "./long-term.html?raw";
import shortTermHTML from "./short-term.html?raw";
import progressHTML from "./progress.html?raw";

inject("#schedule", scheduleHTML);
inject("#schedule-long-term", longTermHTML);
inject("#schedule-short-term", shortTermHTML);
inject("#schedule-progress", progressHTML);

import { demoSRP } from "./01-single-responsibility-principle/index.js";
import { demoOCP } from "./02-open-closed-principle/index.js";
import { demoLSP } from "./03-liskov-substitution-principle/index.js";
import { demoISP } from "./04-interface-segregation-principle/index.js";
import { demoDIP } from "./05-dependency-inversion-principle/index.js";

function runAll(): void {
  demoSRP();
  demoOCP();
  demoLSP();
  demoISP();
  demoDIP();
}

const arg = process.argv[2]?.toLowerCase();

switch (arg) {
  case "srp":
    demoSRP();
    break;
  case "ocp":
    demoOCP();
    break;
  case "lsp":
    demoLSP();
    break;
  case "isp":
    demoISP();
    break;
  case "dip":
    demoDIP();
    break;
  case "all":
  case undefined:
    runAll();
    break;
  default:
    console.log("Argumento no reconocido. Usa: srp | ocp | lsp | isp | dip | all");
}

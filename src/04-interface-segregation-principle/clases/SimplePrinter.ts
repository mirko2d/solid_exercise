import { IPrinter } from "../interfaces/IPrinter.js";

export class SimplePrinter implements IPrinter {
  print(document: string): void {
    console.log(`Imprimiendo documento simple: ${document}`);
  }
}

import { IPrinter } from "../interfaces/IPrinter.js";
import { IScanner } from "../interfaces/IScanner.js";
import { IFax } from "../interfaces/IFax.js";

export class MultiFunctionPrinter implements IPrinter, IScanner, IFax {
  print(document: string): void {
    console.log(`MFP imprime: ${document}`);
  }
  scan(): string {
    const scanned = "Documento escaneado";
    console.log("MFP escanea documento.");
    return scanned;
  }
  fax(number: string, document: string): void {
    console.log(`MFP envía fax al ${number} con documento: ${document}`);
  }
}

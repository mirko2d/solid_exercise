import { SimplePrinter } from "./clases/SimplePrinter.js";
import { MultiFunctionPrinter } from "./clases/MultiFunctionPrinter.js";
import { IPrinter } from "./interfaces/IPrinter.js";
import { IScanner } from "./interfaces/IScanner.js";
import { IFax } from "./interfaces/IFax.js";

function usePrinter(printer: IPrinter): void {
  printer.print("Contrato.pdf");
}

function useScanner(scanner: IScanner): void {
  const result = scanner.scan();
  console.log(`Resultado scan: ${result}`);
}

function useFax(faxMachine: IFax): void {
  faxMachine.fax("555-1234", "Factura.pdf");
}

export function demoISP(): void {
  console.log("--- ISP Demo ---");
  const simple = new SimplePrinter();
  usePrinter(simple);

  const mfp = new MultiFunctionPrinter();
  usePrinter(mfp);
  useScanner(mfp);
  useFax(mfp);
}

if (process.argv[1] && process.argv[1].includes("index.ts")) {
  demoISP();
}

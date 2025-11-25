import { Report } from "./clases/Report.js";
import { ReportPrinter } from "./clases/ReportPrinter.js";
import { ReportSaver } from "./clases/ReportSaver.js";

export function demoSRP(): void {
  console.log("--- SRP Demo ---");
  const report = new Report("Ventas Q1", "Total ventas: 12345\nDetalle: ...");
  const printer = new ReportPrinter();
  const saver = new ReportSaver();

  printer.print(report);
  saver.save(report, "./", "ventas-q1.txt");
}

// Ejecutar si se llama directamente
if (process.argv[1] && process.argv[1].includes("index.ts")) {
  demoSRP();
}

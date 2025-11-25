import { Report } from "./Report.js";

export class ReportPrinter {
  print(report: Report): void {
    console.log(`Imprimiendo reporte: ${report.title}`);
    console.log("Contenido:\n" + report.content);
  }
}

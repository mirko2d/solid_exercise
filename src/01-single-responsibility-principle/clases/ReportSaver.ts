import { Report } from "./Report.js";
import { writeFileSync } from "fs";
import { join } from "path";

export class ReportSaver {
  save(report: Report, directory: string = ".", filename: string = "report.txt"): void {
    const filePath = join(directory, filename);
    writeFileSync(filePath, `Titulo: ${report.title}\n\n${report.content}`, { encoding: "utf8" });
    console.log(`Reporte guardado en: ${filePath}`);
  }
}

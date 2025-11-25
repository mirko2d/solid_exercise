import { IReport } from "../interfaces/IReport.js";

export class Report implements IReport {
  constructor(public title: string, public content: string) {}
}

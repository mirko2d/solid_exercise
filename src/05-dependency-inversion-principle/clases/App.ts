import { IDatabase } from "../interfaces/IDatabase.js";

export class App {
  constructor(private db: IDatabase) {}

  start(): void {
    console.log("Iniciando aplicación...");
    this.db.connect();
  }
}

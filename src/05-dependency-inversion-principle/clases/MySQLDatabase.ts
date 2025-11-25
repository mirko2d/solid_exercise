import { IDatabase } from "../interfaces/IDatabase.js";

export class MySQLDatabase implements IDatabase {
  connect(): void {
    console.log("Conectado a MySQL");
  }
}

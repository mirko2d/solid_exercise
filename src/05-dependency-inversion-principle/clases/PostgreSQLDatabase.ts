import { IDatabase } from "../interfaces/IDatabase.js";

export class PostgreSQLDatabase implements IDatabase {
  connect(): void {
    console.log("Conectado a PostgreSQL");
  }
}

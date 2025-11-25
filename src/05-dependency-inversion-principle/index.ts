import { App } from "./clases/App.js";
import { MySQLDatabase } from "./clases/MySQLDatabase.js";
import { PostgreSQLDatabase } from "./clases/PostgreSQLDatabase.js";

export function demoDIP(): void {
  console.log("--- DIP Demo ---");
  const appMySQL = new App(new MySQLDatabase());
  appMySQL.start();
  const appPostgres = new App(new PostgreSQLDatabase());
  appPostgres.start();
}

if (process.argv[1] && process.argv[1].includes("index.ts")) {
  demoDIP();
}

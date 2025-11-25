import { IBird } from "./interfaces/IBird.js";
import { IFlyingBird } from "./interfaces/IFlyingBird.js";
import { Sparrow } from "./clases/Sparrow.js";
import { Penguin } from "./clases/Penguin.js";

function feed(bird: IBird): void {
  bird.eat();
}

function makeItFly(bird: IFlyingBird): void {
  bird.fly();
}

export function demoLSP(): void {
  console.log("--- LSP Demo ---");
  const sparrow = new Sparrow();
  const penguin = new Penguin();

  // Ambos pueden ser tratados como IBird
  feed(sparrow);
  feed(penguin);

  // Solo aves voladoras pasan a esta función
  makeItFly(sparrow);
  // makeItFly(penguin); // Esto sería error de compilación, prevenido por el tipo
  penguin.swim();
}

if (process.argv[1] && process.argv[1].includes("index.ts")) {
  demoLSP();
}

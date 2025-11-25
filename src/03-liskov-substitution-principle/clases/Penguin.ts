import { IBird } from "../interfaces/IBird.js";

export class Penguin implements IBird {
  species = "Pingüino";
  eat(): void {
    console.log(`${this.species} come peces.`);
  }
  swim(): void {
    console.log(`${this.species} nada ágilmente en agua fría.`);
  }
}

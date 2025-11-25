import { IFlyingBird } from "../interfaces/IFlyingBird.js";

export class Sparrow implements IFlyingBird {
  species = "Gorrión";
  eat(): void {
    console.log(`${this.species} picotea semillas.`);
  }
  fly(): void {
    console.log(`${this.species} vuela rápidamente.`);
  }
}

import { IBird } from "./IBird.js";

export interface IFlyingBird extends IBird {
  fly(): void;
}

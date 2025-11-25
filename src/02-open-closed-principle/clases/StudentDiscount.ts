import { IDiscount } from "../interfaces/IDiscount.js";

export class StudentDiscount implements IDiscount {
  description = "Estudiante 15%";
  apply(amount: number): number {
    return amount * 0.85;
  }
}

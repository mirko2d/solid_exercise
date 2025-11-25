import { IDiscount } from "../interfaces/IDiscount.js";

export class RegularDiscount implements IDiscount {
  description = "Cliente regular 10%";
  apply(amount: number): number {
    return amount * 0.9;
  }
}

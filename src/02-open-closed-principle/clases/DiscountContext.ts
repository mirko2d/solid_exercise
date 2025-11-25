import { IDiscount } from "../interfaces/IDiscount.js";

export class DiscountContext {
  constructor(private strategy: IDiscount) {}

  setStrategy(strategy: IDiscount): void {
    this.strategy = strategy;
  }

  calculate(amount: number): number {
    console.log(`Aplicando descuento: ${this.strategy.description}`);
    return this.strategy.apply(amount);
  }
}

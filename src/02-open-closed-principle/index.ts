import { DiscountContext } from "./clases/DiscountContext.js";
import { RegularDiscount } from "./clases/RegularDiscount.js";
import { VipDiscount } from "./clases/VipDiscount.js";
import { StudentDiscount } from "./clases/StudentDiscount.js";
import { IDiscount } from "./interfaces/IDiscount.js";

// Nueva estrategia agregada sin modificar clases existentes
class SeniorDiscount implements IDiscount {
  description = "Adulto mayor 30%";
  apply(amount: number): number {
    return amount * 0.7;
  }
}

export function demoOCP(): void {
  console.log("--- OCP Demo ---");
  const amount = 100;
  const context = new DiscountContext(new RegularDiscount());

  console.log(`Total regular: ${context.calculate(amount)}`);
  context.setStrategy(new VipDiscount());
  console.log(`Total VIP: ${context.calculate(amount)}`);
  context.setStrategy(new StudentDiscount());
  console.log(`Total estudiante: ${context.calculate(amount)}`);
  context.setStrategy(new SeniorDiscount());
  console.log(`Total adulto mayor: ${context.calculate(amount)}`);
}

if (process.argv[1] && process.argv[1].includes("index.ts")) {
  demoOCP();
}

import { IDiscount } from "../interfaces/IDiscount.js";

export class VipDiscount implements IDiscount {
  description = "Cliente VIP 20%";
  apply(amount: number): number {
    return amount * 0.8;
  }
}

export interface IDiscount {
  description: string;
  apply(amount: number): number; // returns final amount after discount
}

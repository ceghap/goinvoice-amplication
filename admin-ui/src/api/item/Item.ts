import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";

export type Item = {
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  product?: Array<Product>;
  updatedAt: Date;
};

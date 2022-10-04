import { Item } from "../item/Item";
import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  items?: Item | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};

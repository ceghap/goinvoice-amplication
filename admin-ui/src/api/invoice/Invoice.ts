import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";
import { User } from "../user/User";

export type Invoice = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  items?: Array<Item>;
  updatedAt: Date;
  user?: User | null;
};

import { Address } from "../address/Address";
import { Invoice } from "../invoice/Invoice";

export type Customer = {
  addresses?: Array<Address>;
  companyName: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  invoice?: Array<Invoice>;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};

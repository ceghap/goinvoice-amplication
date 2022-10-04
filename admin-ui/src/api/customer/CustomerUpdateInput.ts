import { AddressUpdateManyWithoutCustomersInput } from "./AddressUpdateManyWithoutCustomersInput";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  addresses?: AddressUpdateManyWithoutCustomersInput;
  companyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  invoice?: InvoiceUpdateManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
};

import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  addresses?: AddressCreateNestedManyWithoutCustomersInput;
  companyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  invoice?: InvoiceCreateNestedManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
};

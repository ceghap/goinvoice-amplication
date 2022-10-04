import { InvoiceUpdateManyWithoutUsersInput } from "./InvoiceUpdateManyWithoutUsersInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  invoices?: InvoiceUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  products?: ProductUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};

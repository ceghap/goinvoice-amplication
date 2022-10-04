import { CustomerCreateNestedManyWithoutInvoicesInput } from "./CustomerCreateNestedManyWithoutInvoicesInput";
import { ItemCreateNestedManyWithoutInvoicesInput } from "./ItemCreateNestedManyWithoutInvoicesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceCreateInput = {
  customers?: CustomerCreateNestedManyWithoutInvoicesInput;
  items?: ItemCreateNestedManyWithoutInvoicesInput;
  user?: UserWhereUniqueInput | null;
};

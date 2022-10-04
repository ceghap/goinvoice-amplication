import { CustomerUpdateManyWithoutInvoicesInput } from "./CustomerUpdateManyWithoutInvoicesInput";
import { ItemUpdateManyWithoutInvoicesInput } from "./ItemUpdateManyWithoutInvoicesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceUpdateInput = {
  customers?: CustomerUpdateManyWithoutInvoicesInput;
  items?: ItemUpdateManyWithoutInvoicesInput;
  user?: UserWhereUniqueInput | null;
};

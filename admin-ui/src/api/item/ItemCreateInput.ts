import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductCreateNestedManyWithoutItemsInput } from "./ProductCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  product?: ProductCreateNestedManyWithoutItemsInput;
};

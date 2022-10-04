import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductUpdateManyWithoutItemsInput } from "./ProductUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  product?: ProductUpdateManyWithoutItemsInput;
};

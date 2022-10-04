import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  product?: ProductListRelationFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  lastName?: StringNullableFilter;
  products?: ProductListRelationFilter;
  username?: StringFilter;
};

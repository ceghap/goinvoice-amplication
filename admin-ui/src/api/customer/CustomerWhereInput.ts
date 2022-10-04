import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type CustomerWhereInput = {
  addresses?: AddressListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invoice?: InvoiceListRelationFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
};

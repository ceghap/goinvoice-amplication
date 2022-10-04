import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  user?: UserWhereUniqueInput;
};

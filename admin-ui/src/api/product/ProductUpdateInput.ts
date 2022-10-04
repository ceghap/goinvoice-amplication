import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  items?: ItemWhereUniqueInput | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};

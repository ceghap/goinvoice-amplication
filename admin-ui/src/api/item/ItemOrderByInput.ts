import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  updatedAt?: SortOrder;
};

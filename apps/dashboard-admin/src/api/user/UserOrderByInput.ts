import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastActiveAt?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};

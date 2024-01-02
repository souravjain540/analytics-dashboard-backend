import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  startTimestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

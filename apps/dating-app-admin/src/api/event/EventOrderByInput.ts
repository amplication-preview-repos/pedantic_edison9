import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  eventName?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  updatedAt?: SortOrder;
};

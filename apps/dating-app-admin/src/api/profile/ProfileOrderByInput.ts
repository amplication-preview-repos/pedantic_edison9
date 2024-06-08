import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  age?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  profilePicture?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

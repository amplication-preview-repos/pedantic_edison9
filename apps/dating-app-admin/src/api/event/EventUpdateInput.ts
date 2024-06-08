import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventUpdateInput = {
  date?: Date | null;
  description?: string | null;
  eventName?: string | null;
  location?: LocationWhereUniqueInput | null;
};

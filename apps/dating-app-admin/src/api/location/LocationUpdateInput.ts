import { EventUpdateManyWithoutLocationsInput } from "./EventUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  events?: EventUpdateManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
};

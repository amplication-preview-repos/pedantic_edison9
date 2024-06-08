import { EventCreateNestedManyWithoutLocationsInput } from "./EventCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  events?: EventCreateNestedManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
};

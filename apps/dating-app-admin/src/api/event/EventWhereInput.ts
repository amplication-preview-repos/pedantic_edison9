import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  eventName?: StringNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
};

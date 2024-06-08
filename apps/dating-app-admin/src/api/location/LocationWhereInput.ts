import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
};

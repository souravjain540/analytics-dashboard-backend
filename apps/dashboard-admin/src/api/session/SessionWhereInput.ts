import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SessionWhereInput = {
  duration?: StringNullableFilter;
  id?: StringFilter;
  startTimestamp?: DateTimeNullableFilter;
  userId?: StringFilter;
};

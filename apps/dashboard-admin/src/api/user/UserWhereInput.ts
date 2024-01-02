import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  lastActiveAt?: DateTimeNullableFilter;
  username?: StringFilter;
};

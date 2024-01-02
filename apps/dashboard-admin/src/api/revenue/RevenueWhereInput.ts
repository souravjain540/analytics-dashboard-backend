import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RevenueWhereInput = {
  amount?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};

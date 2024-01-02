import { Revenue as TRevenue } from "../api/revenue/Revenue";

export const REVENUE_TITLE_FIELD = "amount";

export const RevenueTitle = (record: TRevenue): string => {
  return record.amount?.toString() || String(record.id);
};

import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "duration";

export const SessionTitle = (record: TSession): string => {
  return record.duration?.toString() || String(record.id);
};

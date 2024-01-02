import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  id: string;
  lastActiveAt: Date | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

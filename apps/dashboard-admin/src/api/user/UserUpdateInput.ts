import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  lastActiveAt?: Date | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

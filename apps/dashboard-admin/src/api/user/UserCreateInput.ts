import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  lastActiveAt?: Date | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};

import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  age: number | null;
  bio: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
  user?: User | null;
};

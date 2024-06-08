import { Event } from "../event/Event";

export type Location = {
  address: string | null;
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  latitude: number | null;
  longitude: number | null;
  updatedAt: Date;
};

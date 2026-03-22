import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Announcement {
    id: bigint;
    title: string;
    content: string;
    createdAt: Time;
    sport: Sport;
}
export type Time = bigint;
export interface Venue {
    id: bigint;
    name: string;
    description: string;
    sport: Sport;
    location: string;
}
export interface Event {
    id: bigint;
    status: EventStatus;
    title: string;
    date: Time;
    description: string;
    sport: Sport;
    location: string;
}
export enum EventStatus {
    upcoming = "upcoming",
    completed = "completed"
}
export enum Sport {
    football = "football",
    general = "general",
    badminton = "badminton"
}
export interface backendInterface {
    addAnnouncement(title: string, content: string, sport: Sport, createdAt: Time): Promise<bigint>;
    addEvent(title: string, sport: Sport, date: Time, location: string, description: string, status: EventStatus): Promise<bigint>;
    addVenue(name: string, sport: Sport, location: string, description: string): Promise<bigint>;
    getAnnouncements(): Promise<Array<Announcement>>;
    getEvents(): Promise<Array<Event>>;
    getEventsBySport(sport: Sport): Promise<Array<Event>>;
    getUpcomingEvents(): Promise<Array<Event>>;
    getVenues(): Promise<Array<Venue>>;
}

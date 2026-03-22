import { useQuery } from "@tanstack/react-query";
import { type Announcement, type Event, Sport, type Venue } from "../backend.d";
import { useActor } from "./useActor";

export function useAllEvents() {
  const { actor, isFetching } = useActor();
  return useQuery<Event[]>({
    queryKey: ["events", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEvents();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpcomingEvents() {
  const { actor, isFetching } = useActor();
  return useQuery<Event[]>({
    queryKey: ["events", "upcoming"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUpcomingEvents();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBadmintonEvents() {
  const { actor, isFetching } = useActor();
  return useQuery<Event[]>({
    queryKey: ["events", "badminton"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEventsBySport(Sport.badminton);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFootballEvents() {
  const { actor, isFetching } = useActor();
  return useQuery<Event[]>({
    queryKey: ["events", "football"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEventsBySport(Sport.football);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAnnouncements() {
  const { actor, isFetching } = useActor();
  return useQuery<Announcement[]>({
    queryKey: ["announcements"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAnnouncements();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useVenues() {
  const { actor, isFetching } = useActor();
  return useQuery<Venue[]>({
    queryKey: ["venues"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getVenues();
    },
    enabled: !!actor && !isFetching,
  });
}

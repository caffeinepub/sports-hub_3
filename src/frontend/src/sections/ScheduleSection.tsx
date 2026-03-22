import { EventCard, EventCardSkeleton } from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useBadmintonEvents,
  useFootballEvents,
  useUpcomingEvents,
} from "@/hooks/useQueries";
import { motion } from "motion/react";
import { useState } from "react";
import { EventStatus, Sport } from "../backend.d";
import type { Event } from "../backend.d";

const allSampleEvents: Event[] = [
  {
    id: 1n,
    title: "Weekend Badminton Tournament",
    sport: Sport.badminton,
    date: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Court A & B, SportsHub",
    description: "Open singles and doubles tournament for all skill levels.",
    status: EventStatus.upcoming,
  },
  {
    id: 4n,
    title: "5-a-Side Friday Night League",
    sport: Sport.football,
    date: BigInt(Date.now() + 5 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Field 1, SportsHub",
    description:
      "Weekly 5-a-side competitive league. All skill levels welcome.",
    status: EventStatus.upcoming,
  },
  {
    id: 2n,
    title: "Junior Badminton Training Camp",
    sport: Sport.badminton,
    date: BigInt(Date.now() + 14 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Court C, SportsHub",
    description: "Intensive 3-day training camp for players aged 10-18.",
    status: EventStatus.upcoming,
  },
  {
    id: 5n,
    title: "Youth Football Academy Trial",
    sport: Sport.football,
    date: BigInt(Date.now() + 10 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Field 2, SportsHub",
    description:
      "Open trials for our youth football academy program (ages 8-16).",
    status: EventStatus.upcoming,
  },
  {
    id: 3n,
    title: "Mixed Doubles League Round 5",
    sport: Sport.badminton,
    date: BigInt(Date.now() + 21 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "All Courts, SportsHub",
    description: "Fifth round of the SportsHub Mixed Doubles League.",
    status: EventStatus.upcoming,
  },
  {
    id: 6n,
    title: "11-a-Side Championship Final",
    sport: Sport.football,
    date: BigInt(Date.now() + 28 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Main Field, SportsHub",
    description: "The grand finale of the SportsHub football championship.",
    status: EventStatus.upcoming,
  },
];

export function ScheduleSection() {
  const [tab, setTab] = useState("all");
  const { data: allEvents, isLoading: loadingAll } = useUpcomingEvents();
  const { data: badmintonEvents, isLoading: loadingBad } = useBadmintonEvents();
  const { data: footballEvents, isLoading: loadingFoot } = useFootballEvents();

  const resolvedAll =
    allEvents && allEvents.length > 0 ? allEvents : allSampleEvents;
  const resolvedBadminton =
    badmintonEvents && badmintonEvents.length > 0
      ? badmintonEvents
      : allSampleEvents.filter((e) => e.sport === Sport.badminton);
  const resolvedFootball =
    footballEvents && footballEvents.length > 0
      ? footballEvents
      : allSampleEvents.filter((e) => e.sport === Sport.football);

  const isLoading =
    tab === "all" ? loadingAll : tab === "badminton" ? loadingBad : loadingFoot;
  const events =
    tab === "all"
      ? resolvedAll
      : tab === "badminton"
        ? resolvedBadminton
        : resolvedFootball;

  return (
    <section id="schedule" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
              Full Calendar
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-foreground leading-none mb-4">
            SCHEDULE
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Stay up-to-date with all upcoming events, tournaments, and training
            sessions across both sports.
          </p>
        </motion.div>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList
            className="mb-8 bg-card border border-border h-12 p-1"
            data-ocid="schedule.filter.tab"
          >
            <TabsTrigger
              value="all"
              data-ocid="schedule.all.tab"
              className="h-10 px-6 font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All Events
            </TabsTrigger>
            <TabsTrigger
              value="badminton"
              data-ocid="schedule.badminton.tab"
              className="h-10 px-6 font-semibold data-[state=active]:bg-badminton data-[state=active]:text-primary-foreground"
            >
              Badminton
            </TabsTrigger>
            <TabsTrigger
              value="football"
              data-ocid="schedule.football.tab"
              className="h-10 px-6 font-semibold data-[state=active]:bg-football data-[state=active]:text-primary-foreground"
            >
              Football
            </TabsTrigger>
          </TabsList>

          {["all", "badminton", "football"].map((tabVal) => (
            <TabsContent key={tabVal} value={tabVal}>
              {isLoading ? (
                <div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  data-ocid="schedule.loading_state"
                >
                  <EventCardSkeleton key="skel-1" />
                  <EventCardSkeleton key="skel-2" />
                  <EventCardSkeleton key="skel-3" />
                  <EventCardSkeleton key="skel-4" />
                  <EventCardSkeleton key="skel-5" />
                  <EventCardSkeleton key="skel-6" />
                </div>
              ) : events.length === 0 ? (
                <div
                  className="text-center py-20"
                  data-ocid="schedule.empty_state"
                >
                  <div className="text-muted-foreground text-5xl mb-4">📅</div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    No events scheduled
                  </h3>
                  <p className="text-muted-foreground">
                    Check back soon for upcoming events.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  data-ocid="schedule.list"
                >
                  {events.map((event, i) => (
                    <EventCard
                      key={String(event.id)}
                      event={event}
                      index={i + 1}
                    />
                  ))}
                </motion.div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

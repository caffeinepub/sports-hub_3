import { EventCard, EventCardSkeleton } from "@/components/EventCard";
import { useFootballEvents } from "@/hooks/useQueries";
import { Award, CheckCircle2, Clock, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import { EventStatus, Sport } from "../backend.d";

const fieldStats = [
  { icon: Shield, label: "Full-size Fields", value: "2" },
  { icon: Clock, label: "Floodlit Until", value: "10pm" },
  { icon: Users, label: "Coaches on Staff", value: "4" },
  { icon: Award, label: "Leagues / Year", value: "8+" },
];

const sampleEvents = [
  {
    id: 4n,
    title: "5-a-Side Friday Night League",
    sport: Sport.football,
    date: BigInt(Date.now() + 5 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Field 1, SportsHub",
    description:
      "Weekly 5-a-side competitive league. Teams of 5 with rolling subs. All skill levels welcome.",
    status: EventStatus.upcoming,
  },
  {
    id: 5n,
    title: "Youth Football Academy Trial",
    sport: Sport.football,
    date: BigInt(Date.now() + 10 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Field 2, SportsHub",
    description:
      "Open trials for our youth football academy program (ages 8-16). Bring boots and your A-game.",
    status: EventStatus.upcoming,
  },
  {
    id: 6n,
    title: "11-a-Side Championship Final",
    sport: Sport.football,
    date: BigInt(Date.now() + 28 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Main Field, SportsHub",
    description:
      "The grand finale of the SportsHub football championship. Top 2 teams battle for the trophy.",
    status: EventStatus.upcoming,
  },
];

const rules = [
  "Matches are two halves of 45 minutes with a 15-minute break.",
  "The offside rule applies; attackers must not be behind the last defender.",
  "Yellow card = warning; two yellows or one red = dismissal.",
  "A penalty is awarded for fouls inside the box.",
  "Goal kicks and corner kicks restart play after the ball leaves the field.",
];

export function FootballSection() {
  const { data: events, isLoading } = useFootballEvents();
  const displayEvents = events && events.length > 0 ? events : sampleEvents;

  return (
    <section id="football" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 bg-football pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5 bg-football pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <div className="flex items-center gap-3 mb-4 justify-end">
            <span className="text-football text-sm font-bold uppercase tracking-[0.2em]">
              Field Sport
            </span>
            <span className="h-px w-8 bg-football" />
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-foreground leading-none mb-4">
            FOOTBALL
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl ml-auto">
            Full-size pitches, floodlit for evening play. Our coaching staff
            includes ex-professionals ready to elevate your game.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="flex flex-col justify-center gap-6 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {fieldStats.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-football/20 rounded-xl p-4"
                >
                  <item.icon className="w-5 h-5 text-football mb-2" />
                  <div className="font-display font-bold text-2xl text-foreground">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-football/20 rounded-xl p-5">
              <h3 className="font-display font-bold text-lg text-football mb-3 uppercase tracking-wider">
                Rules Summary
              </h3>
              <ul className="space-y-2">
                {rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-football flex-shrink-0 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-football/20 order-1 md:order-2">
            <img
              src="/assets/generated/football-action.dim_600x400.jpg"
              alt="Football Action"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-6">
            Upcoming <span className="text-football">Football Events</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
              <>
                <EventCardSkeleton key="skel-1" />
                <EventCardSkeleton key="skel-2" />
                <EventCardSkeleton key="skel-3" />
              </>
            ) : (
              displayEvents
                .slice(0, 6)
                .map((event, idx) => (
                  <EventCard
                    key={String(event.id)}
                    event={event}
                    index={idx + 1}
                  />
                ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { EventCard, EventCardSkeleton } from "@/components/EventCard";
import { useBadmintonEvents } from "@/hooks/useQueries";
import { Award, CheckCircle2, Clock, Feather, Users } from "lucide-react";
import { motion } from "motion/react";
import { EventStatus, Sport } from "../backend.d";

const courtStats = [
  { icon: Feather, label: "Courts Available", value: "4" },
  { icon: Clock, label: "Open Hours", value: "6am–10pm" },
  { icon: Users, label: "Coaches on Staff", value: "6" },
  { icon: Award, label: "Tournaments / Year", value: "24+" },
];

const sampleEvents = [
  {
    id: 1n,
    title: "Weekend Badminton Tournament",
    sport: Sport.badminton,
    date: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Court A & B, SportsHub",
    description:
      "Open singles and doubles tournament for all skill levels. Cash prizes for top 3 in each category.",
    status: EventStatus.upcoming,
  },
  {
    id: 2n,
    title: "Junior Badminton Training Camp",
    sport: Sport.badminton,
    date: BigInt(Date.now() + 14 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "Court C, SportsHub",
    description:
      "Intensive 3-day training camp for players aged 10-18. Coached by national-level instructors.",
    status: EventStatus.upcoming,
  },
  {
    id: 3n,
    title: "Mixed Doubles League Round 5",
    sport: Sport.badminton,
    date: BigInt(Date.now() + 21 * 24 * 60 * 60 * 1000) * 1_000_000n,
    location: "All Courts, SportsHub",
    description:
      "Fifth round of the SportsHub Mixed Doubles League. Teams must register by the previous Thursday.",
    status: EventStatus.upcoming,
  },
];

const rules = [
  "A match is best of 3 games; each game is first to 21 points.",
  "A player must win by at least 2 points; at 29-all, 30 wins.",
  "The shuttle must land within the opponent's court boundaries.",
  "Players alternate serving after each point is scored.",
  "Let is called for interference; the rally is replayed.",
];

export function BadmintonSection() {
  const { data: events, isLoading } = useBadmintonEvents();
  const displayEvents = events && events.length > 0 ? events : sampleEvents;

  return (
    <section id="badminton" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 bg-badminton pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5 bg-badminton pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-badminton" />
            <span className="text-badminton text-sm font-bold uppercase tracking-[0.2em]">
              Court Sport
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-foreground leading-none mb-4">
            BADMINTON
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Experience the thrill of the shuttlecock on our state-of-the-art
            courts. From beginners to pros — everyone has a place.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-badminton/20">
            <img
              src="/assets/generated/badminton-action.dim_600x400.jpg"
              alt="Badminton Action"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="grid grid-cols-2 gap-4">
              {courtStats.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-badminton/20 rounded-xl p-4"
                >
                  <item.icon className="w-5 h-5 text-badminton mb-2" />
                  <div className="font-display font-bold text-2xl text-foreground">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-badminton/20 rounded-xl p-5">
              <h3 className="font-display font-bold text-lg text-badminton mb-3 uppercase tracking-wider">
                Rules Summary
              </h3>
              <ul className="space-y-2">
                {rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-badminton flex-shrink-0 mt-0.5" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display font-bold text-2xl text-foreground mb-6">
            Upcoming <span className="text-badminton">Badminton Events</span>
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

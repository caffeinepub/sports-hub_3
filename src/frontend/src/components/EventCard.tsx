import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { type Event, EventStatus, Sport } from "../backend.d";

interface EventCardProps {
  event: Event;
  index: number;
}

function formatDate(time: bigint): string {
  const ms = Number(time) / 1_000_000;
  return new Date(ms).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(time: bigint): string {
  const ms = Number(time) / 1_000_000;
  return new Date(ms).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function EventCard({ event, index }: EventCardProps) {
  const isBadminton = event.sport === Sport.badminton;
  const isUpcoming = event.status === EventStatus.upcoming;

  return (
    <div
      data-ocid={`event.item.${index}`}
      className={`relative bg-card border rounded-xl p-5 hover:border-opacity-80 transition-all duration-300 group overflow-hidden ${
        isBadminton
          ? "border-badminton/20 hover:border-badminton/50 hover:glow-badminton"
          : "border-football/20 hover:border-football/50 hover:glow-football"
      }`}
    >
      {/* Sport accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 ${
          isBadminton ? "bg-badminton" : "bg-football"
        }`}
      />

      {/* Background glow */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none ${
          isBadminton ? "bg-badminton" : "bg-football"
        }`}
      />

      <div className="flex items-start justify-between gap-3 mb-3">
        <Badge
          variant="outline"
          className={`text-xs font-semibold uppercase tracking-wider ${
            isBadminton
              ? "border-badminton/50 text-badminton bg-badminton/10"
              : "border-football/50 text-football bg-football/10"
          }`}
        >
          {event.sport}
        </Badge>
        <Badge
          variant={isUpcoming ? "default" : "secondary"}
          className={`text-xs ${
            isUpcoming
              ? "bg-primary/20 text-primary border-primary/30"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {event.status}
        </Badge>
      </div>

      <h3 className="font-display font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {event.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {event.description}
      </p>

      <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{formatTime(event.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </div>
  );
}

export function EventCardSkeleton() {
  return (
    <div
      data-ocid="event.loading_state"
      className="bg-card border border-border rounded-xl p-5 animate-pulse"
    >
      <div className="h-5 w-24 bg-muted rounded mb-3" />
      <div className="h-6 w-3/4 bg-muted rounded mb-2" />
      <div className="h-4 w-full bg-muted rounded mb-1" />
      <div className="h-4 w-2/3 bg-muted rounded mb-4" />
      <div className="space-y-2">
        <div className="h-4 w-40 bg-muted rounded" />
        <div className="h-4 w-32 bg-muted rounded" />
        <div className="h-4 w-48 bg-muted rounded" />
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Trophy, label: "Championships", value: "24+" },
  { icon: Users, label: "Active Members", value: "1,200+" },
  { icon: Calendar, label: "Events / Year", value: "150+" },
];

export function HomeSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x500.jpg"
          alt="Sports Hub Hero"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 z-0 noise-bg opacity-50 pointer-events-none" />

      {/* Decorative sport lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-badminton/20 to-transparent pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-football/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">
              Premier Sports Hub
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight mb-6"
          >
            <span className="block text-foreground">WHERE</span>
            <span className="block">
              <span className="text-badminton text-glow-badminton">
                CHAMPIONS
              </span>
            </span>
            <span className="block text-foreground">ARE MADE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            The ultimate hub for badminton and football enthusiasts. World-class
            courts, professional coaching, and a thriving community of athletes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("badminton")}
              data-ocid="home.badminton.primary_button"
              className="bg-badminton text-primary-foreground hover:bg-badminton/90 font-semibold px-8 glow-badminton"
            >
              Explore Badminton
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("football")}
              data-ocid="home.football.secondary_button"
              className="border-football text-football hover:bg-football/10 font-semibold px-8"
            >
              Explore Football
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-display font-extrabold text-2xl text-foreground leading-none">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sport cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-20"
        >
          {/* Badminton card */}
          <button
            type="button"
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-badminton/20 hover:border-badminton/60 transition-all duration-500 glow-badminton text-left"
            onClick={() => scrollTo("badminton")}
            data-ocid="home.badminton.card"
          >
            <img
              src="/assets/generated/badminton-action.dim_600x400.jpg"
              alt="Badminton"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-badminton text-xs font-bold uppercase tracking-[0.2em] mb-1">
                Court Sports
              </div>
              <h2 className="font-display font-extrabold text-3xl text-foreground">
                BADMINTON
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                4 professional courts · Daily coaching · Weekly tournaments
              </p>
            </div>
          </button>

          {/* Football card */}
          <button
            type="button"
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-football/20 hover:border-football/60 transition-all duration-500 glow-football text-left"
            onClick={() => scrollTo("football")}
            data-ocid="home.football.card"
          >
            <img
              src="/assets/generated/football-action.dim_600x400.jpg"
              alt="Football"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-football text-xs font-bold uppercase tracking-[0.2em] mb-1">
                Field Sports
              </div>
              <h2 className="font-display font-extrabold text-3xl text-foreground">
                FOOTBALL
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                2 full-size fields · Pro training · League competitions
              </p>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

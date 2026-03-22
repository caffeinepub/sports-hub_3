import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Badminton", href: "badminton" },
  { label: "Football", href: "football" },
  { label: "Products", href: "products" },
  { label: "Schedule", href: "schedule" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = [
        "home",
        "badminton",
        "football",
        "products",
        "schedule",
        "contact",
      ];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-badminton">SPORTS</span>
            <span className="text-foreground">HUB</span>
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            const isBadminton = link.href === "badminton";
            const isFootball = link.href === "football";
            return (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  data-ocid={`nav.${link.href}.link`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? isBadminton
                        ? "text-badminton"
                        : isFootball
                          ? "text-football"
                          : "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                        isBadminton
                          ? "bg-badminton"
                          : isFootball
                            ? "bg-football"
                            : "bg-primary"
                      }`}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Button
          className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => scrollTo("schedule")}
          data-ocid="nav.schedule.button"
        >
          View Schedule
        </Button>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.mobile.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    data-ocid={`nav.mobile.${link.href}.link`}
                    className="w-full text-left px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Instagram, Twitter, Youtube, Zap } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                <span className="text-badminton">SPORTS</span>HUB
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for badminton and football. Train,
              compete, and excel.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.instagram.link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.twitter.link"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.youtube.link"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Sports
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#badminton"
                  className="text-muted-foreground hover:text-badminton transition-colors"
                  data-ocid="footer.badminton.link"
                >
                  Badminton
                </a>
              </li>
              <li>
                <a
                  href="#football"
                  className="text-muted-foreground hover:text-football transition-colors"
                  data-ocid="footer.football.link"
                >
                  Football
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-ocid="footer.schedule.link"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Facilities
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>4 Badminton Courts</li>
              <li>2 Football Fields</li>
              <li>Fitness Center</li>
              <li>Pro Shop</li>
              <li>Changing Rooms</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span>6am – 10pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>7am – 9pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>8am – 8pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} SportsHub. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

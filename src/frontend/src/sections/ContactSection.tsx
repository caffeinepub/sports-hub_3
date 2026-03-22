import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "42 Sports Avenue, District 5, Metropolis",
  },
  { icon: Phone, label: "Phone", value: "+1 (555) 867-5309" },
  { icon: Mail, label: "Email", value: "info@sportshub.com" },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 6am–10pm | Sat–Sun: 7am–9pm",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    sport: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl text-foreground leading-none mb-4">
            CONTACT US
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Ready to join SportsHub? Have questions? Reach out — our team is
            always on the field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden h-56 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <MapPin className="w-10 h-10 text-primary mb-2" />
                <p className="text-muted-foreground text-sm">
                  42 Sports Avenue, Metropolis
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  District 5 — Central Sports District
                </p>
              </div>
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <title>Grid background</title>
                  <defs>
                    <pattern
                      id="grid"
                      width="30"
                      height="30"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 30 0 L 0 0 0 30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-card border border-primary/30 rounded-2xl"
              >
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. Our team will get back to you within
                  24 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.close_button"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-card border border-border rounded-2xl p-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-muted-foreground text-xs uppercase tracking-wider"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Alex Johnson"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      required
                      data-ocid="contact.name.input"
                      className="bg-background border-border focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-muted-foreground text-xs uppercase tracking-wider"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      required
                      data-ocid="contact.email.input"
                      className="bg-background border-border focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="sport"
                    className="text-muted-foreground text-xs uppercase tracking-wider"
                  >
                    Interested In
                  </Label>
                  <select
                    id="sport"
                    value={form.sport}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, sport: e.target.value }))
                    }
                    data-ocid="contact.sport.select"
                    className="w-full h-10 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a sport...</option>
                    <option value="badminton">Badminton</option>
                    <option value="football">Football</option>
                    <option value="both">Both Sports</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-muted-foreground text-xs uppercase tracking-wider"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals, availability, or any questions..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    rows={5}
                    data-ocid="contact.message.textarea"
                    className="bg-background border-border focus-visible:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11"
                  data-ocid="contact.submit_button"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

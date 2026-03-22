import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Sport = "all" | "badminton" | "football";
type Category = "all" | "Apparel" | "Footwear" | "Equipment";

interface Product {
  id: number;
  name: string;
  sport: "badminton" | "football";
  category: "Apparel" | "Footwear" | "Equipment";
  desc: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pro Carbon Racket",
    sport: "badminton",
    category: "Equipment",
    desc: "Lightweight carbon fiber frame with tension up to 30lbs",
    price: "$89.99",
    image: "/assets/generated/badminton-racket.dim_600x600.jpg",
  },
  {
    id: 2,
    name: "Feather Shuttlecock (6-pack)",
    sport: "badminton",
    category: "Equipment",
    desc: "Tournament-grade goose feather birdies, 77-speed",
    price: "$24.99",
    image: "/assets/generated/badminton-shuttlecock.dim_600x600.jpg",
  },
  {
    id: 3,
    name: "Badminton Jersey",
    sport: "badminton",
    category: "Apparel",
    desc: "Moisture-wicking performance jersey, sizes S–XXL",
    price: "$34.99",
    image: "/assets/generated/badminton-jersey.dim_600x600.jpg",
  },
  {
    id: 4,
    name: "Badminton Shorts",
    sport: "badminton",
    category: "Apparel",
    desc: "Breathable elastic-waist shorts for full range of motion",
    price: "$29.99",
    image: "/assets/generated/badminton-shorts.dim_600x600.jpg",
  },
  {
    id: 5,
    name: "Court Badminton Shoes",
    sport: "badminton",
    category: "Footwear",
    desc: "Non-slip gum rubber sole, cushioned insole for court play",
    price: "$74.99",
    image: "/assets/generated/badminton-shoes.dim_600x600.jpg",
  },
  {
    id: 6,
    name: "Match Football",
    sport: "football",
    category: "Equipment",
    desc: "FIFA-approved size 5 match ball, butyl bladder",
    price: "$49.99",
    image: "/assets/generated/football-ball.dim_600x600.jpg",
  },
  {
    id: 7,
    name: "Football Jersey",
    sport: "football",
    category: "Apparel",
    desc: "Club-grade polyester jersey with moisture management",
    price: "$39.99",
    image: "/assets/generated/football-jersey.dim_600x600.jpg",
  },
  {
    id: 8,
    name: "Football Shorts",
    sport: "football",
    category: "Apparel",
    desc: "Lightweight shorts with elasticated waist and pockets",
    price: "$27.99",
    image: "/assets/generated/sports-shorts.dim_600x600.jpg",
  },
  {
    id: 9,
    name: "Football Cleats",
    sport: "football",
    category: "Footwear",
    desc: "Molded TPU studs for firm ground, ankle support collar",
    price: "$99.99",
    image: "/assets/generated/football-cleats.dim_600x600.jpg",
  },
  {
    id: 10,
    name: "Goalkeeper Gloves",
    sport: "football",
    category: "Equipment",
    desc: "Negative-cut foam palm, adjustable wrist strap",
    price: "$44.99",
    image: "/assets/generated/goalkeeper-gloves.dim_600x600.jpg",
  },
];

const sportFilters: { label: string; value: Sport }[] = [
  { label: "All", value: "all" },
  { label: "Badminton", value: "badminton" },
  { label: "Football", value: "football" },
];

const categoryFilters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "Apparel" },
  { label: "Footwear", value: "Footwear" },
  { label: "Equipment", value: "Equipment" },
];

export function ProductsSection() {
  const [sportFilter, setSportFilter] = useState<Sport>("all");
  const [categoryFilter, setCategoryFilter] = useState<Category>("all");

  const filtered = products.filter((p) => {
    const sportMatch = sportFilter === "all" || p.sport === sportFilter;
    const catMatch = categoryFilter === "all" || p.category === categoryFilter;
    return sportMatch && catMatch;
  });

  return (
    <section
      id="products"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 bg-badminton" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 bg-football" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3">
            Shop the Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            GEAR &amp; <span className="text-primary">APPAREL</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Everything you need to play at your best — from court to pitch.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          {/* Sport filter */}
          <div
            className="flex gap-2 flex-wrap justify-center"
            data-ocid="products.tab"
          >
            {sportFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setSportFilter(f.value)}
                data-ocid={`products.${f.value}.tab`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  sportFilter === f.value
                    ? f.value === "badminton"
                      ? "bg-badminton/20 border-badminton text-badminton"
                      : f.value === "football"
                        ? "bg-football/20 border-football text-football"
                        : "bg-primary/20 border-primary text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setCategoryFilter(f.value)}
                data-ocid={`products.category.${f.value.toLowerCase()}.tab`}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  categoryFilter === f.value
                    ? "bg-accent border-accent-foreground/30 text-accent-foreground"
                    : "border-border/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${sportFilter}-${categoryFilter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-ocid="products.list"
          >
            {filtered.length === 0 && (
              <div
                className="col-span-full text-center py-20 text-muted-foreground"
                data-ocid="products.empty_state"
              >
                No products found for this filter combination.
              </div>
            )}
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.055 }}
                data-ocid={`products.item.${i + 1}`}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isBadminton = product.sport === "badminton";

  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:shadow-xl hover:border-border/80">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Sport badge overlay */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm bg-background/70 ${
              isBadminton
                ? "text-badminton border-badminton/40"
                : "text-football border-football/40"
            }`}
          >
            {isBadminton ? "Badminton" : "Football"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-sm leading-tight text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <Badge
            variant="outline"
            className="text-[10px] text-muted-foreground shrink-0"
          >
            {product.category}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {product.desc}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span
            className={`text-lg font-bold font-display ${
              isBadminton ? "text-badminton" : "text-football"
            }`}
          >
            {product.price}
          </span>
          <button
            type="button"
            className={`text-xs px-3 py-1.5 rounded-md border font-medium transition-all duration-200 ${
              isBadminton
                ? "border-badminton/40 text-badminton hover:bg-badminton/10"
                : "border-football/40 text-football hover:bg-football/10"
            }`}
            data-ocid="products.primary_button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

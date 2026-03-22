import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BadmintonSection } from "@/sections/BadmintonSection";
import { ContactSection } from "@/sections/ContactSection";
import { FootballSection } from "@/sections/FootballSection";
import { HomeSection } from "@/sections/HomeSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { ScheduleSection } from "@/sections/ScheduleSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HomeSection />
          <BadmintonSection />
          <FootballSection />
          <ProductsSection />
          <ScheduleSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

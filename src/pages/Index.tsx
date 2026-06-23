import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Promo from "@/components/Promo";
import Prices from "@/components/Prices";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tours />
      <Promo />
      <Prices />
      <Booking />
      <Footer />
    </main>
  );
};

export default Index;

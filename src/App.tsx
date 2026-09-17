import { About } from "./components/About";
import { BookingCTA } from "./components/BookingCTA";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { HowToReach } from "./components/HowToReach";
import { Location } from "./components/Location";
import { MobileBar } from "./components/MobileBar";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Rooms } from "./components/Rooms";
import { TrekSection } from "./components/TrekSection";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Rooms />
        <Experience />
        <TrekSection />
        <Gallery />
        <Reviews />
        <Location />
        <HowToReach />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

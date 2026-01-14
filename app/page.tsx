import Hero from "./components/section/hero";
import Phrase from "./components/section/phrase";
import Itinerary from "./components/section/itinerary";
import Gallery from "./components/section/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Spacer to account for fixed hero height */}
      <div className="h-screen" />
      <Phrase />
      <Itinerary />
      <Gallery />
    </>
  );
}

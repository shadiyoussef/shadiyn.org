import { useReveal } from "./hooks/useReveal";
import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Wins } from "./components/Wins";
import { TrackRecord } from "./components/TrackRecord";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./signal.css";

export function App() {
  useReveal();
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <About />
        <Wins />
        <TrackRecord />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

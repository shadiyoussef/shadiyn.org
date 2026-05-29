import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl">
      <Hero />
      <Experience />
      <Contact />
    </main>
  );
}

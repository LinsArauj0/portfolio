import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Stack } from "../sections/Stack";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";

export const HomePage = () => {
  return (
    <main className="bg-zinc-950 scroll-smooth">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
};

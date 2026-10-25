import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import About from "../components/About";
import Terminal from "../components/Terminal";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Terminal />
      </main>
      <Contact />
    </>
  );
}

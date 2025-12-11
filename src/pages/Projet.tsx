import Projets from "../components/Projets";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Projet() {
  return (
    <div id="home-content">
      <main id="content">
        <Navigation />
        <section id="my-projects" aria-label="Mes projets">
          <h2>Projets</h2>
          <Projets />
        </section>
        <Footer />
      </main>
    </div>
  );
}

import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Writing from "../components/sections/writing";
import Achievements from "../components/sections/achievements";

const Home = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Only handle hash changes on the home page
    if (location === "/") {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            // Always use smooth scrolling for section navigation
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      // Initial check for hash
      handleHashChange();

      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange);

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, [location]);

  return (
    <div className="min-h-screen text-foreground font-mono">

      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="writing">
          <Writing />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

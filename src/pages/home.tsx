import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Writing from "../components/sections/writing";
import Achievements from "../components/sections/achievements";

const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "a", "b"
];

const Home = () => {
  const [location, setLocation] = useLocation();
  const [inputSequence, setInputSequence] = useState<string[]>([]);

  useEffect(() => {
    if (location === "/") {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        setInputSequence((prev) => {
          const newSequence = [...prev, e.key];
          if (newSequence.length > konamiCode.length) {
            newSequence.shift();
          }
          if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
            setLocation("/secret/secret");
          }
          return newSequence;
        });
      };

      handleHashChange();
      window.addEventListener('hashchange', handleHashChange);
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [location, setLocation]);

  return (
    <div className="min-h-screen text-foreground font-mono">
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="achievements"><Achievements /></section>
        <section id="projects"><Projects /></section>
        <section id="writing"><Writing /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;


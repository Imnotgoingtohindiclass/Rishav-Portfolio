import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Writing from "@/components/sections/writing";

const Home = () => {
  return (
    <div className="min-h-screen text-foreground font-mono">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Writing />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

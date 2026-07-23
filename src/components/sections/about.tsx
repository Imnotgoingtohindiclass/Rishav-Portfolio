import { GraduationCap, HeartHandshake } from "lucide-react";

const About = () => {
  const educationData = [
    {
      period: "2026 – Present",
      degree: "Biomedical Engineering",
      institution: "Ngee Ann Polytechnic",
    },
    {
      period: "2022 – 2025",
      degree: "Engineering+",
      institution: "School of Science and Technology, Singapore",
    },
  ];

  const serviceLearningData = [
    {
      event: "International Cybersecurity Olympiad @ NUS",
      period: "2025 · 56 hrs",
      organization: "National University of Singapore",
    },
    {
      event: "Relay for Life",
      period: "2024/2025 · 14 hrs",
      organization: "Singapore Cancer Society",
    },
    {
      event: "Laptop Refurbishment",
      period: "2024 · 4 hrs",
      organization: "SGBono",
    },
    {
      event: "Race Against Cancer @ ACE",
      period: "2023 · 16 hrs",
      organization: "Singapore Cancer Society",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t hairline">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7">
            <p className="field-label mb-4">About</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground mb-6">
              I'm an engineering student who'd rather build the thing than read
              about it.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              My work sits at the intersection of hardware security and software —
              I'm comfortable dropping into C/C++ for low-level systems work, and
              into Python and modern ML frameworks when the problem calls for it.
              Recently that's meant writing a compiler, building a chess engine,
              and applying deep learning to medical imaging.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              I've picked most of this up the same way: hands-on, through
              cybersecurity competitions and side projects I
              didn't strictly need to finish, but did anyway.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="field-label mb-6 flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </p>
            <div className="divide-y hairline border-t border-b hairline">
              {educationData.map((item, index) => (
                <div key={index} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <p className="font-sans text-foreground">{item.degree}</p>
                    <p className="font-sans text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground flex-shrink-0">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="field-label mb-6 flex items-center gap-2">
              <HeartHandshake size={14} /> Service learning
            </p>
            <div className="divide-y hairline border-t border-b hairline">
              {serviceLearningData.map((item, index) => (
                <div key={index} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <p className="font-sans text-foreground">{item.event}</p>
                    <p className="font-sans text-sm text-muted-foreground">{item.organization}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground flex-shrink-0">{item.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

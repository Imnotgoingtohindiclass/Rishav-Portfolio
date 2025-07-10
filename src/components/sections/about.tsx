import { User, GraduationCap, Calendar, MapPin, Code2, GitBranch, Atom, Pi, Brain, LineChart, Eye, Grape, CircuitBoard, Code, HeartHandshake } from "lucide-react";
import { technicalSkills, toolsAndLanguages } from "../../lib/data";
import SkillBar from "../ui/skill-bar";

const About = () => {
  const educationData = [
    {
      period: "2022 - Present",
      duration: "4 years",
      degree: "Engineering+ Student",
      institution: "School of Science and Technology, Singapore",
      type: "education",
      description: "Currently pursuing a specialized engineering program with focus on electronics and cybersecurity. Participating in advanced projects and research in embedded systems and network security."
    },
    {
      period: "2017 - 2021",
      duration: "4.5 years",
      degree: "Primary School Student",
      institution: "Xingnan Primary School",
      type: "education",
      description: "Completed primary education with distinction in mathematics and science. Participated in various STEM-related activities and competitions."
    },
    {
      period: "2016 - 2017",
      duration: "18 months",
      degree: "Primary School Student",
      institution: "Queenstown Primary School",
      type: "education",
      description: "Started primary education journey with focus on foundational subjects and extracurricular activities."
    }
  ];

  const serviceLearningData = [
    {
      "event": "Race for Life",
      "period": "2024/2025",
      "duration": "14 Hours",
      "role": "Volunteer",
      "organization": "Singapore Cancer Society",
      "type": "service"
    },
    {
      "event": "Laptop Refurbishment",
      "period": "2024",
      "duration": "4 Hours",
      "role": "Volunteer",
      "organization": "SGBono",
      "type": "service"
    },
    // {
    //   "event": "Race for Life 2024",
    //   "period": "2024",
    //   "duration": "7 Hours",
    //   "role": "Volunteer",
    //   "organization": "Singapore Cancer Society",
    //   "type": "service"
    // },
    {
      "event": "Race Against Cancer @ ACE",
      "period": "2023",
      "duration": "16 Hours",
      "role": "Volunteer",
      "organization": "Singapore Cancer Society",
      "type": "service"
    }
  ];  

  const getColorClassByLevel = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary";
      case "Intermediate":
        return "bg-secondary";
      case "Proficient":
        return "bg-accent";
      default:
        return "bg-blue-500";
    }
  };

  const getIconByName = (name: string) => {
    switch (name) {
      case "Python":
        return <Code2 className="text-primary" />;
      case "Git":
        return <GitBranch className="text-primary" />;
      case "React":
        return <Atom className="text-primary" />;
      case "NumPy":
        return <Pi className="text-blue-500/100" />;
      case "TensorFlow":
        return <Brain className="text-blue-500/100" />;
      case "Matplotlib":
        return <LineChart className="text-blue-500/100" />;
      case "OpenCV":
        return <Eye className="text-blue-500/100" />;
      case "Raspberry Pi":
        return <Grape className="text-accent" />;
      case "Arduino":
        return <CircuitBoard className="text-accent" />;
      default:
        return <Code className="text-primary" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-background/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
          <User size={24} className="mr-2 text-primary" /> ABOUT ME
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Background and experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-foreground mb-6 font-sans leading-relaxed">
              I'm a student of engineering, electronics, and cybersecurity with a passion for building secure, efficient, and innovative solutions. My journey began with tinkering with electronics, which evolved into a deeper interest in embedded systems and security.
            </p>
            <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
              Currently focused on the intersection of hardware security and web technologies, I develop tools and frameworks that bridge the gap between electronic systems and modern web applications. My research interests include IoT security, embedded systems design, and secure software development practices.
            </p>
            <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
              When I'm not coding or soldering, I write technical articles to share knowledge and contribute to the community. I believe in making technology more accessible through clear documentation and tutorials.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform -rotate-3"></div>
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src="/Item-1_SUTD-Camp_Team-3.jpg" 
                  alt="Profile"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
        

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <Code2 size={22} className="mr-2 text-primary" /> Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-foreground font-bold text-lg mb-6">Technical Skills</h4>
              {technicalSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                  colorClass={getColorClassByLevel(skill.level)}
                  explanation={skill.explanation}
                />
              ))}
            </div>

            <div>
              <h4 className="text-foreground font-bold text-lg mb-6">Languages & Tools</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {toolsAndLanguages.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card/20 p-4 rounded text-center flex flex-col items-center"
                  >
                    <div className="mb-2 text-3xl">{getIconByName(item.name)}</div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GraduationCap size={22} className="mr-2 text-primary" /> Education
            </h3>
            <div className="relative">
              <div className="absolute left-0 top-[4rem] h-[calc(100%_-_8rem)] w-0.5 bg-primary/30"></div>
              {educationData.map((item, index) => (
                <div key={index} className="relative z-10 mb-12 pl-8 group">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-background border-2 border-primary/50 rounded-full p-2 z-10">
                      <GraduationCap size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="bg-violet-900/10 rounded-lg p-6 border border-primary/35 shadow-md hover:border-primary/50 transition-all duration-300 relative">
                    <div className="flex items-center text-primary font-mono text-sm mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                      <span className="mx-2">•</span>
                      <span className="text-muted-foreground">{item.duration}</span>
                    </div>
                    <h4 className="text-foreground font-bold text-lg mb-2">{item.degree}</h4>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      {item.institution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <HeartHandshake size={22} className="mr-2 text-primary" /> Service Learning
            </h3>
            <div className="relative">
              <div className="absolute left-0 top-[4rem] h-[calc(100%_-_8rem)] w-0.5 bg-primary/30"></div>
              {serviceLearningData.map((item, index) => (
                <div key={index} className="relative z-10 mb-12 pl-8">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-background border-2 border-primary/50 rounded-full p-2 z-10">
                      <HeartHandshake size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="bg-violet-900/10 rounded-lg p-6 border border-primary/35 shadow-md hover:border-primary/50 transition-all duration-300 relative">
                    <div className="flex items-center text-primary font-mono text-sm mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                      <span className="mx-2">•</span>
                      <span className="text-muted-foreground">{item.duration}</span>
                    </div>
                    <h4 className="text-foreground font-bold text-lg mb-2">{item.event}</h4>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      {item.organization}
                    </div>
                  </div>
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

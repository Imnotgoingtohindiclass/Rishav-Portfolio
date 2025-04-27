import SkillBar from "../ui/skill-bar";
import { technicalSkills, toolsAndLanguages } from "../../lib/data";
import {
  Code2,
  Server,
  Cpu,
  Github,
  GitBranch,
  CircuitBoard,
  Brain,
  BookOpen,
  LineChart,
  BarChart,
  Code,
  Atom,
  Sparkles,
  Eye,
  Pi,
  Grape
} from "lucide-react";

const Skills = () => {
  const getColorClassByLevel = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary";
      case "Intermediate":
        return "bg-secondary";
      case "Proficient":
        return "bg-accent";
      default:
        return "text-blue-500";
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
    <section id="skills" className="py-20 bg-background/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> SKILLS
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Technical capabilities and expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical</h3>

            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                percentage={skill.percentage}
                colorClass={getColorClassByLevel(skill.level)}
              />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Languages & Tools</h3>

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
    </section>
  );
};

export default Skills;

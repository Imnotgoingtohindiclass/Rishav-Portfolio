import SkillBar from "@/components/ui/skill-bar";
import { technicalSkills, toolsAndLanguages } from "@/lib/data";

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

  const getIconClass = (name: string) => {
    switch (name.toLowerCase()) {
      case "python":
        return "fab fa-python text-primary";
      case "javascript":
        return "fab fa-js text-accent";
      case "react":
        return "fab fa-react text-primary";
      case "node.js":
        return "fab fa-node-js text-secondary";
      case "sql":
        return "fas fa-database text-accent";
      case "linux":
        return "fab fa-linux text-foreground";
      case "arduino":
        return "fas fa-microchip text-primary";
      case "aws":
        return "fab fa-aws text-accent";
      case "docker":
        return "fab fa-docker text-secondary";
      default:
        return "fas fa-code text-primary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-background/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> Skills
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
                <div key={index} className="bg-card/20 p-4 rounded text-center">
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={item.icon === "code" ? "text-primary" : 
                                item.icon === "server" ? "text-accent" : 
                                item.icon === "database" ? "text-secondary" : "text-primary"}
                    >
                      {item.icon === "code" && (
                        <path d="m7 8-4 4 4 4M17 8l4 4-4 4" />
                      )}
                      {item.icon === "server" && (
                        <>
                          <rect width="20" height="8" x="2" y="2" rx="2" />
                          <rect width="20" height="8" x="2" y="14" rx="2" />
                          <line x1="6" x2="6" y1="6" y2="6" />
                          <line x1="6" x2="6" y1="18" y2="18" />
                        </>
                      )}
                      {item.icon === "database" && (
                        <>
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </>
                      )}
                      {item.icon === "cpu" && (
                        <>
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <path d="M9 1v3" />
                          <path d="M15 1v3" />
                          <path d="M9 20v3" />
                          <path d="M15 20v3" />
                          <path d="M1 9h3" />
                          <path d="M1 14h3" />
                          <path d="M20 9h3" />
                          <path d="M20 14h3" />
                        </>
                      )}
                    </svg>
                  </div>
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

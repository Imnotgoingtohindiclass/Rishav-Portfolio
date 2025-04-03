import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  colorClass: string;
}

const SkillBar = ({ name, level, percentage, colorClass }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(percentage);
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="mb-6" ref={skillRef}>
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-mono">{name}</span>
        <span className={colorClass.replace("bg-","text-")}>{level}</span>
      </div>
      <div className="h-1 w-full bg-muted rounded-sm overflow-hidden">
        <div 
          className={`h-full ${colorClass} rounded-sm transition-all duration-1000 ease-in-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  colorClass: string;
  explanation: string;
}

const SkillBar = ({ name, level, percentage, colorClass, explanation }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false, text: "" });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = skillRef.current?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
        text: explanation,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ x: 0, y: 0, visible: false, text: "" });
  };

  return (
    <div
      className="relative" // Ensures tooltip positioning is relative to this container
      ref={skillRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Skill Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-foreground font-mono">{name}</span>
          <span className={colorClass.replace("bg-", "text-")}>{level}</span>
        </div>
        <div className="h-1 w-full bg-muted rounded-sm overflow-hidden">
          <div
            className={`h-full ${colorClass} rounded-sm transition-all duration-1000 ease-in-out`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute z-[10] bg-black text-white text-xs p-2 rounded shadow-lg"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: "translate(0%, -100%)", // Keeps the tooltip above the cursor
            width: "250px", // Fixed width for consistent appearance
          }}
        >
          <div className="font-medium mb-1 border-b border-white/20 pb-1">
            {name} - {level}
          </div>
          <div className="text-white/80">{tooltip.text}</div>
        </div>
      )}
    </div>
  );
};

export default SkillBar;
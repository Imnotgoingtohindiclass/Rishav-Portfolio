import { useTypeEffect } from "@/hooks/use-type-effect";

interface TerminalTextProps {
  text: string;
  typingDelay?: number;
  className?: string;
  showCursor?: boolean;
}

const TerminalText = ({
  text,
  typingDelay = 1,
  className = "",
  showCursor = false,
}: TerminalTextProps) => {
  const displayText = useTypeEffect(text, typingDelay);

  return (
    <span className={`terminal-text ${className}`}>
      {displayText}
      {showCursor && <span className="animate-blink">_</span>}
    </span>
  );
};

export default TerminalText;

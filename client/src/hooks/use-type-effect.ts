import { useState, useEffect } from "react";

export function useTypeEffect(text: string, typingDelay: number = 100): string {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingDelay);

      return () => clearTimeout(timer);
    }
  }, [index, text, typingDelay]);

  // Reset when text changes
  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

  return displayText;
}

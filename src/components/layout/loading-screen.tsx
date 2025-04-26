import React from "react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-3 h-3 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-3 h-3 bg-accent rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default LoadingScreen;

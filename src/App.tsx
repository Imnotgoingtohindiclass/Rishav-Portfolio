import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import ScrollRestoration from "./components/layout/scroll-restoration";

import Home from "./pages/home";
import NotFound from "./pages/not-found";
import ProjectDetail from "./pages/project-detail";
import ArticleDetail from "./pages/article-detail";
import AllProjects from "./pages/AllProjects.tsx"; 
import LoadingScreen from "./components/layout/loading-screen";

function App() {
  const [loading, setLoading] = useState(true);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);

  useEffect(() => {
    // Start minimum time timer
    const minimumTimer = setTimeout(() => {
      setMinimumTimeElapsed(true);
    }, 1500);

    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.getElementsByTagName('img');
      let loadedImages = 0;
      
      if (images.length === 0) {
        if (minimumTimeElapsed) {
          setLoading(false);
        }
        return;
      }

      Array.from(images).forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === images.length && minimumTimeElapsed) {
              setLoading(false);
            }
          });
        }
      });

      if (loadedImages === images.length && minimumTimeElapsed) {
        setLoading(false);
      }
    };

    // Initial check
    checkImagesLoaded();

    // Also check when the window loads
    window.addEventListener('load', checkImagesLoaded);

    // Fallback timeout in case something goes wrong
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(minimumTimer);
      clearTimeout(timeout);
      window.removeEventListener('load', checkImagesLoaded);
    };
  }, [minimumTimeElapsed]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="scrollbar-hide">
          <ScrollRestoration />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

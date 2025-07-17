import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import ScrollRestoration from "./components/layout/scroll-restoration";

import Home from "./pages/home";
import NotFound from "./pages/404";
import ProjectDetail from "./pages/project-detail";
import ArticleDetail from "./pages/article-detail";
import AllProjects from "./pages/AllProjects"; 
import Secret from "./pages/secret/secret"
import LoadingScreen from "./components/layout/loading-screen";

const imagesToPreload: string[] = [
  "/NCO2025_COA_Bronze_19.jpg",
  "/Item-6_Jakarta-Trip24_GOJEK-Presentation.jpg",
  "/Item-5_Taiwan-Trip24.jpg",
  "/Item-4_Jakarta-Trip24_Sigmas-Ahoy.jpg",
  "/Item-3_PREPMUN24.jpg",
  "/Item-2_SUTD-Camp_Presentation.jpg",
  "/Item-1_SUTD-Camp_Team-3.jpg"
];

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const minimumTimer = setTimeout(() => setMinimumTimeElapsed(true), 5000);

    const preloadImages = () => {
      let loadedImages = 0;

      if (imagesToPreload.length === 0) {
        if (minimumTimeElapsed) setFadeOut(true);
        return;
      }

      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;

        if (img.complete) {
          loadedImages++;
        } else {
          img.onload = () => {
            loadedImages++;
            if (loadedImages === imagesToPreload.length && minimumTimeElapsed) {
              setFadeOut(true);
            }
          };
        }
      });

      if (loadedImages === imagesToPreload.length && minimumTimeElapsed) {
        setFadeOut(true);
      }
    };

    const checkImagesLoaded = () => {
      const images = document.getElementsByTagName("img");
      let loadedImages = 0;

      if (images.length === 0) {
        if (minimumTimeElapsed) setFadeOut(true);
        return;
      }

      Array.from(images).forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener("load", () => {
            loadedImages++;
            if (loadedImages === images.length && minimumTimeElapsed) {
              setFadeOut(true);
            }
          });
        }
      });

      if (loadedImages === images.length && minimumTimeElapsed) {
        setFadeOut(true);
      }
    };

    preloadImages();
    checkImagesLoaded();
    window.addEventListener("load", checkImagesLoaded);

    const timeout = setTimeout(() => setFadeOut(true), 7000);

    return () => {
      clearTimeout(minimumTimer);
      clearTimeout(timeout);
      window.removeEventListener("load", checkImagesLoaded);
    };
  }, [minimumTimeElapsed]);

  useEffect(() => {
    if (fadeOut) {
      const delay = setTimeout(() => {
        setLoading(false);
        setShowApp(true); // 👈 Fade in App
      }, 250);
      return () => clearTimeout(delay);
    }
  }, [fadeOut]);

  if (loading) {
    return <LoadingScreen fadeOut={fadeOut} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`transition-opacity duration-1000 ${
          showApp ? "opacity-100" : "opacity-0"
        }`}
      >
        <Router>
          <div className="scrollbar-hide">
            <ScrollRestoration />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/secret/secret" element={<Secret />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;

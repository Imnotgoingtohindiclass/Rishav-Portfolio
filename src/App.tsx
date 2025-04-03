import React from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import ProjectDetail from "./pages/project-detail";
import ArticleDetail from "./pages/article-detail";
import LoadingScreen from "./components/layout/loading-screen";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:slug" component={ProjectDetail} />
      <Route path="/article/:slug" component={ArticleDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a short time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? <LoadingScreen /> : <Router />}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <Card className="w-full max-w-md mx-4 border-primary/20 bg-background/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">404 - Lost in Space</h1>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Oops! Looks like you've ventured into uncharted territory. 
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="mt-8">
              <Button
                variant="outline"
                className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-black"
                onClick={() => setLocation("/")}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
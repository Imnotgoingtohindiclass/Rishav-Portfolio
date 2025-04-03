import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, FileText } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-primary">#</span> Contact
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Get in touch for projects or collaborations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <Card className="bg-card/30 border-transparent hover:border-primary/30 transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary text-xl mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold">Email</h4>
                      <p className="text-muted-foreground">rishav@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-primary text-xl mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold">Location</h4>
                      <p className="text-muted-foreground">New Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-primary text-xl mt-1">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold">Availability</h4>
                      <p className="text-muted-foreground">Part-time / Freelance</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-foreground font-bold mb-4">Connect</h4>
                  <div className="flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-primary">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-secondary">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-accent">
                      <Twitter size={20} />
                    </a>
                    <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-primary">
                      <FileText size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-card/30 border-transparent hover:border-primary/30 transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Label htmlFor="name" className="block text-foreground mb-2">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 text-foreground border border-card/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="email" className="block text-foreground mb-2">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 text-foreground border border-card/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="subject" className="block text-foreground mb-2">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 text-foreground border border-card/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="message" className="block text-foreground mb-2">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-background/50 text-foreground border border-card/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

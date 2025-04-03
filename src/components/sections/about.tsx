import { User, GraduationCap, Award, Calendar, MapPin, Briefcase } from "lucide-react";

const About = () => {
  const educationData = [
    {
      period: "2022 - Present",
      duration: "4 years",
      degree: "Engineering+ Student",
      institution: "School of Science and Technology, Singapore",
      type: "education"
    },
    {
      period: "2017 - 2021",
      duration: "4.5 years",
      degree: "Primary School Student",
      institution: "Xingnang Primary School",
      type: "education"
    },
    {
      period: "2016 - 2017",
      duration: "18 months",
      degree: "Primary School Student",
      institution: "Queenstown Primary School",
      type: "education"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background/30">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
          <User size={24} className="mr-2 text-primary" /> About Me
        </h2>
        <p className="text-muted-foreground mb-12 font-sans">
          Background and experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-foreground mb-6 font-sans leading-relaxed">
              I'm a student of engineering, electronics, and cybersecurity with a passion for building secure, efficient, and innovative solutions. My journey began with tinkering with electronics, which evolved into a deeper interest in embedded systems and security.
            </p>
            <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
              Currently focused on the intersection of hardware security and web technologies, I develop tools and frameworks that bridge the gap between electronic systems and modern web applications. My research interests include IoT security, embedded systems design, and secure software development practices.
            </p>
            <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
              When I'm not coding or soldering, I write technical articles to share knowledge and contribute to the community. I believe in making technology more accessible through clear documentation and tutorials.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform -rotate-3"></div>
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80" 
                  alt="Profile"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pl-10 w-[80%] max-w-full">
          <h3 className="text-xl font-bold mb-10 flex items-center">
            <GraduationCap size={22} className="mr-2 text-primary" /> Education & Certifications
          </h3>

          <div className="relative timeline-container">
            {/* Timeline Line on the Left */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/30"></div>

            {educationData.map((item, index) => (
              <div key={index} className="relative z-10 mb-12 flex">
                {/* Icon Positioned on the Left */}
                <div className="flex items-center justify-center absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="bg-background border-2 border-primary/50 rounded-full p-2 z-10">
                    {item.type === "education" ? (
                      <GraduationCap size={20} className="text-primary" />
                    ) : (
                      <Award size={20} className="text-primary" />
                    )}
                  </div>
                </div>

                {/* Timeline Content shifted to the right */}
                <div className="timeline-content bg-card/30 rounded-lg p-6 border border-primary/10 shadow-md w-[70%] ml-8">
                  <div className="flex items-center text-primary font-mono text-sm mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                    <span className="mx-2">•</span>
                    <span className="text-muted-foreground">{item.duration}</span>
                  </div>
                  <h4 className="text-foreground font-bold text-lg mb-2">{item.degree}</h4>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin size={16} className="mr-2" />
                    {item.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

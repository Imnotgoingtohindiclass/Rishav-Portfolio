import React from "react";
import { achievements, sports } from "../../lib/data";
import { Trophy, Award, Medal} from "lucide-react";

const Achievements = () => {
    // const certifications = [
    //     {
    //         title: "Cybersecurity Fundamentals",
    //         issuer: "Cisco Networking Academy",
    //         year: "2023",
    //         certificate: "/certificates/cybersecurity-fundamentals.jpg"
    //     },
    //     {
    //         title: "Embedded Systems Design",
    //         issuer: "Coursera - University of Colorado Boulder",
    //         year: "2022",
    //         certificate: "/certificates/embedded-systems.jpg"
    //     }
    // ];

    return (
        <section id="achievements" className="py-20 bg-background/30">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
                    <Trophy className="mr-2 text-primary" /> ACHIEVEMENTS
                </h2>
                <p className="text-muted-foreground mb-8 font-sans">Honors and awards</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((ach, idx) => (
                    <div
                        key={idx}
                        className="relative group"
                    >
                        <div className="bg-violet-900/10 rounded-lg p-6 border border-primary/35 shadow-md hover:border-primary/50 transition-all duration-300 relative">
                            <h4 className="text-foreground font-bold text-lg mb-2">{ach.title}</h4>
                            <p className="text-muted-foreground">{ach.issuer}</p>
                            <p className="text-muted-foreground text-sm">{ach.year}</p>
                        </div>
                        
                        <div className="absolute top-full left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-50">
                            <div className="bg-background rounded-lg p-2 border border-primary/35 shadow-xl mt-2 hover:border-primary/50 transition-all duration-300">
                                <img
                                    src={ach.certificate}
                                    alt={`Certificate for ${ach.title}`}
                                    className="w-75 h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                {/* <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-16 flex items-center">
                    <Award className="mr-2 text-primary" /> Certifications
                </h2>
                <p className="text-muted-foreground mb-8 font-sans">Professional certifications</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        className="relative group"
                    >
                        <div className="bg-violet-900/10 rounded-lg p-6 border border-primary/35 shadow-md hover:border-primary/50 transition-all duration-300 relative">
                            <h4 className="text-foreground font-bold text-lg mb-2">{cert.title}</h4>
                            <p className="text-muted-foreground">{cert.issuer}</p>
                            <p className="text-muted-foreground text-sm">{cert.year}</p>
                        </div>
                        
                        <div className="absolute top-full left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-50">
                            <div className="bg-background rounded-lg p-2 border border-primary/35 shadow-xl mt-2 hover:border-primary/50 transition-all duration-300">
                                <img
                                    src={cert.certificate}
                                    alt={`Certificate for ${cert.title}`}
                                    className="w-75 h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    ))}
                </div> */}
                <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-16 flex items-center">
                        <Award className="mr-2 text-primary" /> SPORTS
                </h2>
                <p className="text-muted-foreground mb-8 font-sans">
                    Representation roles and achievements in sports
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sports.map((event, index) => {
                        return (
                        <div
                            key={index}
                            className="bg-violet-900/10 rounded-lg p-6 border border-primary/35 shadow-md hover:border-primary/50 transition-all duration-300 relative group"
                        >
                            <div className="absolute top-4 right-4 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                <Medal className="h-5 w-5 text-primary" />
                            </div>
                            <h4 className="text-foreground font-bold text-lg mb-2 pr-8">{event.title}</h4>
                            <p className="text-muted-foreground text-sm">{event.duration}</p>
                            <p className="text-muted-foreground mt-2">{event.description}</p>

                            <div className="absolute top-full left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-50">
                                <div className="bg-background rounded-lg p-2 border border-primary/35 shadow-xl mt-2 hover:border-primary/50 transition-all duration-300">
                                    <img
                                        src={event.image}
                                        alt={`Image of ${event.title}`}
                                        className="w-75 h-auto rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

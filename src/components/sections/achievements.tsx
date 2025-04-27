import React from "react";
import { achievements } from "../../lib/data";
import { Trophy } from "lucide-react";

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
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
                        <div className="bg-violet-900/10 rounded-lg p-6 border border-primary/35 shadow-md">
                            <h4 className="text-foreground font-bold text-lg mb-2">{ach.title}</h4>
                            <p className="text-muted-foreground">{ach.issuer}</p>
                            <p className="text-muted-foreground text-sm">{ach.year}</p>
                        </div>
                        
                        <div className="absolute top-full left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                            <div className="bg-background rounded-lg p-2 border border-primary/35 shadow-xl mt-2">
                                <img
                                    src={ach.certificate}
                                    alt={`Certificate for ${ach.title}`}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

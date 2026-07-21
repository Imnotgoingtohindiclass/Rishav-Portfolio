import { useEffect, useRef, useState } from "react";
import { Expand } from "lucide-react";
import { achievements, sports, articlesData } from "../../lib/data";
import Lightbox from "../ui/lightbox";

const useCountUp = (target: number, duration = 900) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.round(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
};

// Reveals children with a staggered fade/rise the first time the grid scrolls into view
const useRevealed = () => {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { revealed, ref };
};

const Achievements = () => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const totalHonours = achievements.length + Math.min(articlesData.length, 1);
  const count = useCountUp(totalHonours);
  const honoursGrid = useRevealed();
  const sportsGrid = useRevealed();

  return (
    <section id="achievements" className="py-20 md:py-28 border-t hairline">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <p className="field-label">Honours & representation</p>
          <p className="font-serif text-2xl text-foreground">
          </p>
        </div>

        {/* Honours grid */}
        <div ref={honoursGrid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-20">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              onClick={() => ach.certificate && setPreview({ src: ach.certificate, alt: ach.title })}
              style={{ transitionDelay: honoursGrid.revealed ? `${idx * 70}ms` : "0ms" }}
              className={`bg-background p-6 flex flex-col justify-between min-h-[220px] group transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_hsl(220_22%_12%/0.18)] hover:z-10 relative ${
                ach.certificate ? "cursor-pointer" : ""
              } ${
                honoursGrid.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div>
                <span className="field-label">{ach.year}</span>
                <h4 className="font-serif text-xl text-foreground mt-3 mb-2 leading-snug">{ach.title}</h4>
                <p className="text-sm text-muted-foreground font-sans">{ach.issuer}</p>
              </div>
              {ach.certificate && (
                <button
                  type="button"
                  onClick={() => setPreview({ src: ach.certificate, alt: ach.title })}
                  className="mt-6 self-start flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <Expand size={13} className="transition-transform duration-300 group-hover:scale-110" />
                  view certificate
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Handball */}
        <p className="field-label mb-8">Handball — national youth team</p>
        <div ref={sportsGrid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {sports.map((event, index) => (
            <div
              key={index}
              onClick={() => event.image && setPreview({ src: event.image, alt: event.title })}
              style={{ transitionDelay: sportsGrid.revealed ? `${index * 70}ms` : "0ms" }}
              className={`bg-background p-6 flex flex-col justify-between min-h-[200px] group transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_hsl(220_22%_12%/0.18)] hover:z-10 relative ${
                event.image ? "cursor-pointer" : ""
              } ${
                sportsGrid.revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div>
                <span className="field-label">{event.duration}</span>
                <h4 className="font-serif text-lg text-foreground mt-3 mb-2 leading-snug">{event.title}</h4>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{event.description}</p>
              </div>
              {event.image && (
                <button
                  type="button"
                  onClick={() => setPreview({ src: event.image, alt: event.title })}
                  className="mt-6 self-start flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <Expand size={13} className="transition-transform duration-300 group-hover:scale-110" />
                  view photo
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <Lightbox src={preview.src} alt={preview.alt} onClose={() => setPreview(null)} />
      )}
    </section>
  );
};

export default Achievements;

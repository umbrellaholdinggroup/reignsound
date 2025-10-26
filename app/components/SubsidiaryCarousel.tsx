"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  "/subsidiaries/logo-1.png",
  "/subsidiaries/logo-2.png",
  "/subsidiaries/logo-3.png",
  "/subsidiaries/logo-4.png",
  "/subsidiaries/logo-5.png",
  "/subsidiaries/logo-6.png",
];

export default function SubsidiaryCarousel() {
  const [embla1Ref, embla1] = useEmblaCarousel({ loop: true, speed: 4 });
  const [embla2Ref, embla2] = useEmblaCarousel({ loop: true, speed: 2 });
  const [embla3Ref, embla3] = useEmblaCarousel({ loop: true, speed: 1.5 });

  // Auto-scroll effect for continuous motion
  useEffect(() => {
    const autoplay = (embla: any, speed: number) => {
      let rafId: number;
      const loop = () => {
        embla.scrollNext();
        rafId = requestAnimationFrame(loop);
      };
      if (embla) rafId = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(rafId);
    };

    const stop1 = autoplay(embla1, 4);
    const stop2 = autoplay(embla2, 2);
    const stop3 = autoplay(embla3, 1.5);

    return () => {
      stop1?.();
      stop2?.();
      stop3?.();
    };
  }, [embla1, embla2, embla3]);

  const renderRow = (ref: any, row: number, direction: "forward" | "reverse") => (
    <div className={`embla overflow-hidden my-4 ${direction === "reverse" ? "rotate-180" : ""}`} ref={ref}>
      <div className={`embla__container flex ${direction === "reverse" ? "rotate-180" : ""}`}>
        {[...Array(12)].map((_, i) => (
          <div key={`${row}-${i}`} className="embla__slide flex-[0_0_auto] w-32 mx-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src={logos[i % logos.length]}
                alt={`Subsidiary ${i + 1}`}
                width={128}
                height={128}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="subsidiary-carousel py-8">
      {renderRow(embla1Ref, 1, "forward")}
      {renderRow(embla2Ref, 2, "reverse")}
      {renderRow(embla3Ref, 3, "forward")}
    </section>
  );
}

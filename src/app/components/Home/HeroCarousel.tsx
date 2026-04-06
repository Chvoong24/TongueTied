import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MilestoneCard } from "./MilestoneCard";
import { DailyInsightCard } from "./DailyInsightCard";

interface HeroCarouselProps {
  isLearningLanguage?: boolean;
}

export function HeroCarousel({ isLearningLanguage }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const slides = [
    { id: 1, component: <MilestoneCard isLearningLanguage={isLearningLanguage} /> },
    { id: 2, component: <DailyInsightCard isLearningLanguage={isLearningLanguage} /> },
  ];

  return (
    <div className="relative mb-4">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-0">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_90%] min-w-0">
              {slide.component}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-6 h-2 bg-[#FF6B6B]"
                : "w-2 h-2 bg-[#2D3A50]/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

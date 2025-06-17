import { Children, isValidElement, useEffect, useRef, useState } from "react";

import ArrowLeft from "../assets/ArrowLeft.svg";

import ArrowRight from "../assets/ArrowRight.svg";

interface CarouselProps {
  children: React.ReactNode;

  autoPlay?: boolean;

  interval?: number;

  showArrows?: boolean;

  showDots?: boolean;
}

export const Carousel = ({
  children,

  autoPlay = true,

  interval = 3000,

  showArrows = true,

  showDots = true,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const validChildren = Children.toArray(children).filter(isValidElement);

  const totalItems = validChildren.length;

  useEffect(() => {
    if (autoPlay && totalItems > 0) {
      const timerId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, interval);

      return () => clearInterval(timerId);
    }
  }, [autoPlay, interval, totalItems]);

  useEffect(() => {
    if (
      carouselRef.current &&
      totalItems > 0 &&
      currentIndex < carouselRef.current.children.length
    ) {
      const movingContainer = carouselRef.current;
      const currentItemElement = movingContainer.children[
        currentIndex
      ] as HTMLElement;

      if (currentItemElement && movingContainer.parentElement) {
        const itemWidth = currentItemElement.offsetWidth;
        const itemOffsetLeft = currentItemElement.offsetLeft;

        const viewportWidth = movingContainer.parentElement.offsetWidth;

        // Posição do centro do item atual RELATIVA AO INÍCIO DO movingContainer
        const currentItemCenterRelativeToMovingContainer =
          itemOffsetLeft + itemWidth / 2;

        // Queremos que currentItemCenterRelativeToMovingContainer apareça no viewportWidth / 2
        // Então, o movingContainer precisa ser transladado por:
        const transformX =
          viewportWidth / 2 - currentItemCenterRelativeToMovingContainer;

        movingContainer.style.transform = `translateX(${transformX}px)`;
      }
    }
    // Adding containerWidth to dependencies is tricky as it requires ResizeObserver for robustness.
    // For now, relying on currentIndex and totalItems.
  }, [currentIndex, totalItems, validChildren]); // Added validChildren as itemWidth might depend on them

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const goToDot = (index: number) => {
    setCurrentIndex(index);
  };

  if (totalItems === 0) {
    return (
      <div className="flex items-center justify-center p-4 text-gray-500">
        Nenhum item para exibir no carousel.
      </div>
    );
  }

  return (
    <div className="relative w-full ">
      {/* This div is the one that will be transformed */}
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out h-full items-center"
        // No w-full here, its width is determined by its children.
        // No justify-center, translateX handles positioning.
      >
        {validChildren.map((child, index) => {
          const distance = Math.abs(index - currentIndex);

          // Define base classes for each item with responsive widths
          // Mobile: w-[85%], Tablet: w-[70%], Desktop: w-[60%]
          let itemDynamicClasses =
            "flex-shrink-0 w-[85%] sm:w-[70%] lg:w-[60%] transition-all duration-500 ease-in-out mx-1 flex items-center justify-center";

          // Apply styles based on distance from current index
          if (distance === 0) {
            // Current item
            itemDynamicClasses += " scale-100 opacity-100 blur-none";
          } else if (distance === 1) {
            // Adjacent items
            itemDynamicClasses += " scale-90 opacity-70 blur-sm";
          } else {
            // Further items
            itemDynamicClasses += " scale-80 opacity-50 blur-md";
          }

          return (
            <div
              key={index}
              className={itemDynamicClasses}
              // Inline styles can also be used if more complex calculations are needed
              // style={{ transformOrigin: 'center center' }} // Ensures scaling is centered
            >
              {child}
            </div>
          );
        })}
      </div>
      {showArrows &&
        totalItems > 1 && ( // Added totalItems > 1 for arrows as well
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-glass-bg bg-opacity-70 rounded-full p-1 sm:p-2 hover:bg-opacity-90 transition-all duration-200 focus:outline-none shadow-xl hover:cursor-pointer hover:scale-110 z-20"
              aria-label="Previous slide"
            >
              <img
                src={ArrowLeft}
                alt="Arrow Left"
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-text-secondary"
              />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-glass-bg bg-opacity-70 rounded-full p-1 sm:p-2 hover:bg-opacity-90 transition-all duration-200 focus:outline-none shadow-xl hover:cursor-pointer hover:scale-110 z-20"
              aria-label="Next slide"
            >
              <img
                src={ArrowRight}
                alt="Arrow Right"
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-text-secondary"
              />
            </button>
          </>
        )}
      {showDots && totalItems > 1 && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalItems }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => goToDot(dotIndex)}
              className={`h-3 w-3 rounded-full ${
                currentIndex === dotIndex ? "scale-100" : "scale-75"
              } bg-secondary hover:bg-primary transition-colors duration-200 focus:outline-none`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

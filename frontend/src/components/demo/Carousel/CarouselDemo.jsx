import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imageByIndex from "./imageByIndex";

export function CarouselDemo({ slides }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <p>{index + 1}</p>
                  <img
                    className="embla__slide__img"
                    src={imageByIndex(index)}
                    alt={`Slide ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

import React, { useRef, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// svg
import NodeJSIcon from "../assets/icons8-nodejs.svg";
import GooglePlayIcon from "../assets/icons8-google-play.svg";
import KotlinIcon from "../assets/icons8-kotlin.svg";
import ReactIcon from "../assets/react.svg";
import AndroidIcon from "../assets/icons8-android.svg";
import FlutterIcon from "../assets/icons8-flutter.svg";

const Resume = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {/* ========================================= */}
      <div className="container">
        <div className="mx-24 grid grid-cols-2 mt-14 rounded-2xl shadow border dark:bg-gray-900">
          {/* left========================================== */}
          <div className="relative avatar-area2 col-start-1 bg-red-300 rounded-s-2xl flex items-center justify-center max-h-[580px]">
            <img
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Felix "
              alt="avatar"
              className="w-full h-full object-cover rounded-s-2xl absolute"
            />
          </div>
          {/* right===================================== */}
          <ScrollArea className="information-area2 col-start-2 max-h-[580px] rounded-e-2xl flex">
            <div className="p-4 flex-1">
              <h4 className="mt-4 text-[35px] font-sans font-bold">About me</h4>
              <div className="mt-1">
                <span className="font-bold text-[#ff7634]">
                  Backend Developer
                </span>
                <span className="text-gray-400"> / </span>
                <span className="font-bold text-[#ff7634]">NodeJS</span>
              </div>
              {/* intro */}
              <p className="mt-1 text-gray-400 text-[15px] font-semibold">
                I am a backend programmer with the ability to work on the
                frontend. I am not afraid to learn and always ready to face new
                challenges. Currently, I am seeking a challenging opportunity to
                contribute my value to both organizations and society.
              </p>
              <hr className="mt-2" />
              {/* contact me  */}
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Contact me</AccordionTrigger>
                    <AccordionContent>
                      <ul className="ml-5">
                        <li className="flex items-center">
                          <MapPin className="size-3 mr-1" />
                          <p className="text-sm font-sans">Hanoi, VietNam</p>
                        </li>
                        <li className="flex items-center">
                          <Mail className="size-3 mr-1" />
                          <p className="text-sm font-sans">
                            chungdthe176077@fpt.edu.vn
                          </p>
                        </li>
                        <li className="flex items-center">
                          <Mail className="size-3 mr-1" />
                          <p className="text-sm font-sans">
                            chungdoanwork03nb@gmail.com
                          </p>
                        </li>
                        <li className="flex items-center">
                          <Phone className="size-3 mr-1" />
                          <p className="text-sm font-mono"> 0949.602.355</p>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* Skill */}
              <div className="mt-2 border border-solid">
                <h2 className="text-[24px] font-semibold font-sans">Skills</h2>
                <ul className="ml-5 mt-1">
                  {/* #1 */}
                  <li className="flex items-center mb-1">
                    <p className="text-sm font-mono mr-1">Program languages </p>
                    <div className="flex justify-center ml-5">
                      <Badge className="mr-2 text-[12px]" variant="outline">
                        Java
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        JavaScript
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        Kotlin
                      </Badge>
                    </div>
                  </li>
                  {/* #2 */}
                  <li className="flex items-center mb-1">
                    <p className="text-sm font-mono">Framework & library: </p>
                    <div className="flex justify-center ml-5">
                      <Badge className="mr-2 text-[12px]" variant="outline">
                        ReactJS
                      </Badge>
                      <Badge className="mr-2 text-[12px]" variant="outline">
                        Material UI
                      </Badge>
                      <Badge className="mr-2 text-[12px]" variant="outline">
                        Shadcn UI
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        JQuery
                      </Badge>
                    </div>
                  </li>
                  {/* #3 */}
                  <li className="flex items-center mb-1">
                    <p className="text-sm font-mono">Databases: </p>
                    <div className="flex justify-center ml-5">
                      <Badge className="mr-2 text-[12px]" variant="outline">
                        MongoDB
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        MS SQL
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        SQLite
                      </Badge>
                    </div>
                  </li>
                  {/* #4 */}
                  <li className="flex items-center mb-1">
                    <p className="text-sm font-mono">Other technical skills:</p>
                    <div className="flex justify-center ml-5">
                      <Badge className="mr-2 text-[12px]" variant="outline">
                        Git
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        Figma
                      </Badge>
                      <Badge className="mr-2" variant="outline">
                        Ci/CD
                      </Badge>
                    </div>
                  </li>
                </ul>
                {/* Soft skill: Hard work, strong in teamwork and time management. Able to research documents in English well. */}
              </div>
              {/* what i do */}
              <div className="mt-2 border border-solid">
                <h2 className="text-[24px] font-semibold font-sans">
                  What i do
                </h2>
                <div className="border border-gray-200 mt-1 grid grid-cols-2 gap-3">
                  {/* 1 */}
                  <div className="col-start-1 grid grid-cols-3">
                    <div className="col-start-1 flex justify-center">
                      <img
                        className="lg:block h-12 w-auto"
                        src={NodeJSIcon}
                        alt="nodejsicon"
                      />
                    </div>
                    <div className="col-start-2 col-span-2">
                      <p className="text-[20px] text-[#ff7634] font-semibold">
                        Back-end / NodeJS
                      </p>
                      <p className="mt-1 text-gray-400 text-sm">
                        I excel in Node.js for creating high-performance
                        server-side apps with Express.js. I'm skilled in
                        database design, RESTful API development,
                        authorization...
                      </p>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="col-start-2  grid grid-cols-3">
                    <div className="col-start-1 flex justify-center">
                      <img
                        className="lg:block h-12 w-auto"
                        src={ReactIcon}
                        alt="nodejsicon"
                      />
                    </div>
                    <div className="col-start-2 col-span-2">
                      <p className="text-[20px] text-[#ff7634] font-semibold">
                        Front-end / React
                      </p>
                      <p className="mt-1 text-gray-400 text-sm">
                        I have experience in React.js for creating front-end
                        applications.
                      </p>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="col-start-1  grid grid-cols-3">
                    <div className="col-start-1 flex justify-center">
                      <img
                        className="lg:block h-16 w-auto"
                        src={AndroidIcon}
                        alt="nodejsicon"
                      />
                    </div>
                    <div className="col-start-2 col-span-2">
                      <p className="text-[20px] text-[#ff7634] font-semibold">
                        Android / Kotlin
                      </p>
                      <p className="mt-1 text-gray-400 text-sm">
                        I proficiently use Kotlin and Jetpack Compose to build
                        and develop Android applications.
                      </p>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="col-start-2  grid grid-cols-3">
                    {/* <div className="col-start-1 flex justify-center">
                      <img
                        className="lg:block h-12 w-auto"
                        src={NodeJSIcon}
                        alt="nodejsicon"
                      />
                    </div>
                    <div className="col-start-2 col-span-2">
                      <p className="text-[20px] ">Backend - NodeJS</p>
                      <p className="mt-1 text-gray-400 text-sm">
                        I excel in Node.js for creating high-performance
                        server-side apps with Express.js. I'm skilled in
                        database design, RESTful API development,
                        authorization...
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* Experience */}
              {/* Project */}
              <div className="mt-2 border border-solid">
                <h2 className="text-[24px] font-semibold font-sans">
                  Side Projects
                </h2>
                {/* project */}
                <div className="ml-24">
                  <Carousel setApi={setApi} className="w-full max-w-xs">
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">
                                {index + 1}
                              </span>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="py-2 text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default Resume;

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import {
  TailwindcssOriginal,
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginal,
  TypescriptPlain,
  NextjsPlain,
  MysqlOriginalWordmark,
  MongodbOriginalWordmark,
  PostgresqlOriginal,
  ExpressOriginal,
  DjangoPlain,
} from "devicons-react";
import Project from "@/components/Projects";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const words = [
  {
    text: "Full",
  },
  {
    text: "Stack",
  },
  {
    text: "Developer",
  },
];

export default function Home() {
  return (
    <div>
      <Container className="py-16  flex justify-center">
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-6">
          <div className=" lg:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start ">
            <TypewriterEffect
              words={words}
              className="text-start font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="text-2xl py-4">
              Hi, I'm Anup Rana Magar.A full stack develop based on
              Kathmandu,Nepal.
            </p>
            <div className="flex gap-4">
              <Link href={"https://github.com/anupRanaMagar"}>
                <Github />
              </Link>

              <Link href={"https://www.linkedin.com/in/anupranamagar/"}>
                <Linkedin />
              </Link>
            </div>
            <Button className="my-8 ">
              More About Me
              <ArrowRight className="h-4 w-4 " />
            </Button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="hero_img h-56 w-52 md:h-64 md:w-56 lg:h-80 lg:w-72"></div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="text-xl font-semibold">Teck Stack</div>
          <span className="h-0.5 bg-zinc-400 w-32 lg:h-8 lg:w-0.5 rounded-lg" />
          <div className="flex gap-2 flex-wrap">
            <Html5Original size={40} />

            <Css3Original size={40} />
            <JavascriptOriginal size={40} />
            <TypescriptPlain size={40} />
            <ReactOriginal size={40} />
            <NextjsPlain size={40} />
            <TailwindcssOriginal size={40} />
            <MysqlOriginalWordmark size={40} />
            <PostgresqlOriginal size={40} />
            <MongodbOriginalWordmark size={40} />
            <ExpressOriginal size={40} />
            <DjangoPlain size={40} />
          </div>
        </div>
      </Container>
      <Container className="flex flex-col justify-center items-center py-24 gap-10">
        <h1 className="font-semibold text-3xl">About Me</h1>
        <h2 className="text-2xl">
          Full Stack Developer based in Kathmandu, Nepal
        </h2>
        <p>
          Hey, my name is Anup Rana Magar, and I'm a Full Stack Developer. My
          passion is to create and develop a web application for my users. My
          main stack currently is React/Next.js in combination with Tailwind CSS
          and TypeScript.
        </p>
      </Container>
      <Container className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-3xl">Projects</h1>

        <div
          className="flex gap-4 flex-wrap 
       justify-center
        "
        >
          <div className="w-full md:w-1/2 lg:w-1/3">
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="50" className="w-full mt-4">
                  <Image
                    src="/image_colorizer.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    More info →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-green-500 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <span>
                      <Github />
                    </span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="50" className="w-full mt-4">
                  <Image
                    src="/image_colorizer.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    More info →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-green-500 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <span>
                      <Github />
                    </span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="50" className="w-full mt-4">
                  <Image
                    src="/image_colorizer.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    More info →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-green-500 dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <span>
                      <Github />
                    </span>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </Container>
      <div className="bg-zinc-300 h-full mx-auto w-full  px-6 md:px-20">
        <div className="h-20 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-10">
          <p>&copy; 2024, All Rights Reserver, Inc </p>
          <div className="flex gap-4">
            <Link href={"https://github.com/anupRanaMagar"}>
              <Github />
            </Link>

            <Link href={"https://www.linkedin.com/in/anupranamagar/"}>
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

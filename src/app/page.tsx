import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
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
import ProjectCart from "@/components/ProjectCart";

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
      <Container id="home" className="py-16  flex justify-center">
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-6">
          <div className=" lg:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start ">
            <TypewriterEffect
              words={words}
              className="text-start font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            />

            <p className="text-2xl py-4">
              Hi, I&apos;m Anup Rana Magar.A full stack develop based on
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
            <div className=" h-56 w-52 md:h-64 md:w-56 lg:h-80 lg:w-72 relative">
              <Image
                className="hero_img absolute"
                src={`/profile.jpeg`}
                fill
                alt="profile"
              ></Image>
            </div>
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
      <Container
        id="aboutMe"
        className="flex flex-col justify-center items-center py-24 gap-10"
      >
        <h1 className="font-semibold text-3xl">About Me</h1>
        <h2 className="text-2xl">
          Full Stack Developer based in Kathmandu, Nepal
        </h2>
        <p>
          Hey, my name is Anup Rana Magar, and I&apos;m a Full Stack Developer.
          My passion is to create and develop a web application for my users. My
          main stack currently is React/Next.js in combination with Tailwind CSS
          and TypeScript.
        </p>
      </Container>
      <Container
        id="project"
        className="flex flex-col justify-center items-center gap-4 mb-8 mt-6"
      >
        <h1 className="font-semibold text-3xl">Projects</h1>

        <div
          className="flex gap-4 lg:gap-8 flex-wrap 
       justify-center
        "
        >
          <ProjectCart
            title="Image Colorizer"
            description="Using the latest Machine Learning technology to restore old photos automatically and instantly"
            thumnail="/image_colorizer.jpeg"
            githubUrl="https://anupranamagar.github.io/portfolio/"
          />
          <ProjectCart
            title="Real Time Chatting App"
            description="High Using redis and socket.io "
            thumnail="/chatting.png"
            githubUrl="https://chatting-app-opal-nine.vercel.app/"
          />
          <ProjectCart
            title="Image Colorizer"
            description="Using the latest Machine Learning technology to restore old photos automatically and instantly"
            thumnail="/image_colorizer.jpeg"
            githubUrl="https://github.com/anupRanaMagar"
          />
        </div>
      </Container>
      <Container>
        <footer className="w-full pt-20 pb-10 " id="contact">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold lg:max-w-[45vw]">
              Ready to take <span className="text-green-400">your</span> digital
              presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.{" "}
            </p>
            <Link href="mailto:anupranamagar20@gmail.com">
              <Button>
                Let&apos;s get in touch <Mail className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </footer>
      </Container>
      <div className="bg-zinc-300 h-full mx-auto w-full  px-6 md:px-20">
        <div className="h-20 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-10">
          <p>Copyright &copy; 2024, All Rights Reserver, Inc </p>
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

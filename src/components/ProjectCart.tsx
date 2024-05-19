import Image from "next/image";
import { Button } from "./ui/button";
import { GithubOriginal } from "devicons-react";
import Link from "next/link";

const ProjectCart = ({
  title,
  description,
  thumnail,
  githubUrl,
}: {
  title: string;
  description: string;
  thumnail: string;
  githubUrl: string;
}) => {
  return (
    <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col justify-center items-center border p-4 relative gap-2 rounded-md hover:translate-x-1 hover:translate-y-1 transition-all">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <h2 className="font-medium text-lg">{description}</h2>
      <div className=" relative w-full h-48 mb-10 ">
        <Image
          src={thumnail}
          alt="project thumnail"
          fill
          className="rounded-lg
          "
        />
      </div>
      <Link href={githubUrl} className="absolute bottom-2 right-2">
        <Button variant={"outline"}>
          <GithubOriginal />
        </Button>
      </Link>
    </div>
  );
};
export default ProjectCart;

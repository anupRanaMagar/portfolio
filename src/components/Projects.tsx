import Image from "next/image";

const Project = ({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <>
      <div className="">
        <h1>{title}</h1>
        <p>{description}</p>
        <Image src={imgSrc} alt="project thumnail" />
      </div>
    </>
  );
};
export default Project;

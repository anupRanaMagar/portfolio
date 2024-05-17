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
        <img src={imgSrc} alt="project thumnail" />
      </div>
    </>
  );
};
export default Project;

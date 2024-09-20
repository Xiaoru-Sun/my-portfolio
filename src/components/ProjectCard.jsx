import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ project }) => {
  return (
    // <Fade direction="right" duration={1500}>
    <div className="p-2 font-RobotoSlab my-4">
      <h2 className="mb-5 mt-3 font-semibold text-[18px] ">{project.name}</h2>
      <p className=" text-primary font-normal text-[16px]">
        {project.description}
      </p>
      <p className="mt-4 font-semibold text-gray-700 text-[14px] opacity-90 ">
        {project.technologies.join(" ")}
      </p>
      <button className="text-[14px] font-semibold text-blue-800 mt-4 mr-3 hover:bg-blue-300 p-2 hover:text-white transform hover:scale-110 ">
        VIEW CODE
      </button>
      <button className="text-[14px] font-semibold text-blue-800 mt-4 mr-3 hover:bg-blue-300 p-2 hover:text-white transform hover:scale-110 ">
        SEE LIVE
      </button>
    </div>
    // </Fade>
  );
};

export default ProjectCard;

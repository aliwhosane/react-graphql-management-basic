import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className=" text-white m-2 bg-slate-700 flex flex-col p-5 rounded-md justify-center space-y-6">
      <div className="flex justify-between">
        <h1 className=" font-bold text-lg">{project.name}</h1>
        <div>ID: {project.id}</div>
      </div>
      <div className="flex justify-between">
        <p>Client: {project.client.name}</p>
        <p>Status: {project.status}</p>
        <button className=" underline">
          <a href={`/projects/${project.id}`}>View Details</a>{" "}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

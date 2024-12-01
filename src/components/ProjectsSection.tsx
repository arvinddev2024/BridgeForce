'use client'
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={300}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      imageSrc: "/project1.jpg", // Replace with your image path
      title: "Project one Name",
      description:
        "This is text element. Double click this element to edit text. You can change size, position, and all other parameters.",
      buttonText: "Read More",
    },
    {
      imageSrc: "/project2.jpg", // Replace with your image path
      title: "Project two Name",
      description:
        "This is text element. Double click this element to edit text. You can change size, position, and all other parameters.",
      buttonText: "Read More",
    },
    {
      imageSrc: "/project3.jpg", // Replace with your image path
      title: "Project three Name",
      description:
        "This is text element. Double click this element to edit text. You can change size, position, and all other parameters.",
      buttonText: "Read More",
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">
        <span className="text-gray-900">Our</span>{" "}
        <span className="text-blue-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            buttonText={project.buttonText}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          View more Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;

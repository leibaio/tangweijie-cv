import { Project } from "@/types";
import React from "react";
import { Tag } from "./tag";

const ProjectCard: React.FC<Project> = ({
  title,
  time,
  description,
  bulletPoints = [],
  tags,
}) => (
  <div className="rounded border-gray-300 border p-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-semibold">{title}</h3>
      {time && <span className="text-sm text-gray-500">{time}</span>}
    </div>

    <div className="flex flex-wrap gap-2 my-2">
      {tags.map((tag, index) => (
        <Tag key={index} color={tag.color}>
          {tag.text}
        </Tag>
      ))}
    </div>

    <p className="my-2 space-y-2">{description}</p>

    {bulletPoints.length > 0 && (
      <ul className="list-disc list-inside mb-4 space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

export default ProjectCard;

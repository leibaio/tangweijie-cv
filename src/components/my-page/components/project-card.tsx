import React from "react";
import { Tag, TagProps } from "./tag";

export interface ProjectProps {
  title: string;
  description: string;
  bulletPoints?: string[];
  tags: { text: string; color?: TagProps["color"] }[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  bulletPoints = [],
  tags,
}) => (
  <div className="rounded border-gray-300 border p-2">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    {bulletPoints.length > 0 && (
      <ul className="list-disc list-inside mb-4">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}

    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map((tag, index) => (
        <Tag key={index} color={tag.color}>
          {tag.text}
        </Tag>
      ))}
    </div>
  </div>
);

export default ProjectCard;

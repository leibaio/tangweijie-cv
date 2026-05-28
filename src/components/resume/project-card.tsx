import { Project } from "@/types";
import React from "react";
import { Tag, getAccentColor } from "./tag";

const ProjectCard: React.FC<Project> = ({
  title,
  time,
  description,
  bulletPoints = [],
  tags,
}) => {
  const accentColor = getAccentColor(tags[0]?.color);

  return (
    <div
      className={`group rounded-lg border-l-[3px] ${accentColor} border-y border-r border-border/60 p-5 print:break-inside-avoid print:p-2 print:mb-2 hover:border-y-primary/20 hover:border-r-primary/20 hover:shadow-sm transition-all duration-200`}
    >
      <div className="flex justify-between items-start mb-2.5 print:mb-1">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors print:text-sm">
          {title}
        </h3>
        {time && (
          <span className="text-xs text-muted-foreground font-mono shrink-0 ml-4 print:text-[10px]">
            {time}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 my-2 print:gap-1 print:my-1">
        {tags.map((tag, index) => (
          <Tag key={index} color={tag.color}>
            {tag.text}
          </Tag>
        ))}
      </div>

      <p className="my-2.5 print:my-1 print:text-xs text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {bulletPoints.length > 0 && (
        <ul className="list-disc list-outside text-sm space-y-1.5 print:mb-1 print:space-y-0.5 print:text-xs pl-4 text-muted-foreground">
          {bulletPoints.map((point, index) => (
            <li key={index} className="pl-1">{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;

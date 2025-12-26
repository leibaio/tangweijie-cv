import { TimelineProps, WorkExperience } from "@/types";

interface TimelineItemProps extends WorkExperience {
  nodeColor?: string;
  isLast?: boolean;
}

const TimelineItem = ({
  company,
  position,
  duration,
  responsibilities,
  isLast = false,
  nodeColor = "bg-blue-700",
}: TimelineItemProps) => (
  <li className={`relative pl-8 ${!isLast ? "pb-4" : ""}`}>
    <div
      className={`absolute left-[-7px] top-0 w-3 h-3 rounded-full ${nodeColor} border-2 border-white print:block print:border-black`}
    />
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row justify-between">
        <h3 className="font-semibold leading-none mb-2 sm:mb-0">{company}</h3>
        <span className="text text-gray-500">{duration}</span>
      </div>
      <p className="text text-gray-600">{position}</p>
      <ul className="list-disc list-inside text space-y-1 mt-1 pl-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </li>
);

export default function Timeline({
  items,
  nodeColor = "bg-gray-700 dark:bg-gray-50",
  lineColor = "border-gray-200 dark:border-gray-700",
}: TimelineProps) {
  return (
    <ul className={`flex flex-col relative ml-4 border-l-2 ${lineColor}`}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          nodeColor={nodeColor}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
}

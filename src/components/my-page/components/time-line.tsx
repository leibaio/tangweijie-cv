import { ReactNode } from "react";

export interface TimelineItemProps {
  company: string;
  position: string;
  duration: string;
  responsibilities: ReactNode[];
  isLast?: boolean;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  nodeColor?: string;
  lineColor?: string;
}

// 时间轴条目组件
const TimelineItem = ({
  company,
  position,
  duration,
  responsibilities,
  isLast = false,
  nodeColor = "bg-blue-700",
}: TimelineItemProps & { nodeColor?: string; isLast?: boolean }) => (
  <li className={`relative pl-8 ${!isLast ? "pb-4" : ""}`}>
    <div
      className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${nodeColor} border-2 border-white`}
    />
    <div className="flex flex-col gap-1">
      <div className="flex flex-col sm:flex-row justify-between">
        <h3 className="font-semibold leading-none">{company}</h3>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
      <p className="text-sm text-gray-600">{position}</p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-1 pl-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </li>
);

// 主时间轴组件
export default function Timeline({
  items,
  nodeColor = "bg-blue-500",
  lineColor = "border-gray-200",
}: TimelineProps) {
  return (
    <ul className={`flex flex-col relative ml-4  border-l-2 ${lineColor}`}>
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

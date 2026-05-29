import { TimelineProps, WorkExperience } from "@/types";

interface TimelineItemProps extends WorkExperience {
  isLast?: boolean;
  index: number;
}

const nodeColors = ["bg-primary"];

const TimelineItem = ({
  company,
  position,
  duration,
  responsibilities,
  isLast = false,
  index,
}: TimelineItemProps) => {
  const nodeColor = nodeColors[index % nodeColors.length];

  return (
    <li className={`relative pl-10 print:pl-7 print:break-inside-avoid ${!isLast ? "pb-5 print:pb-2" : ""}`}>
      {/* 节点圆点 - 渐变 + 发光 */}
      <div
        className={`absolute left-[-9px] print:left-[-6px] top-1 w-[18px] h-[18px] print:w-3 print:h-3 rounded-full ${nodeColor} border-[3px] border-background shadow-sm`}
      />
      {/* 连接线上的渐变光晕 */}
      <div
        className={`absolute left-[-5px] print:left-[-3px] top-1 w-[10px] h-[10px] rounded-full ${nodeColor} opacity-20 blur-sm print:hidden`}
      />

      <div className="flex flex-col gap-1.5 print:gap-0">
        {/* 公司 + 时间 */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
          <h3 className="text-base font-bold leading-none print:text-sm text-foreground">
            {company}
          </h3>
          <span className="text-sm text-muted-foreground font-mono print:text-xs">
            {duration}
          </span>
        </div>
        {/* 职位 */}
        <p className="text-sm text-muted-foreground/80 print:text-xs">{position}</p>
        {/* 职责列表 */}
        <ul className="list-disc list-outside text-sm space-y-1 print:space-y-0 print:text-xs mt-1 print:mt-0 pl-4 text-muted-foreground">
          {responsibilities.map((item, i) => (
            <li key={i} className="pl-1">{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default function Timeline({
  items,
}: TimelineProps) {
  return (
    <ul className="flex flex-col relative ml-5 print:ml-3 border-l-2 print:border-l border-primary/15">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          index={index}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
}

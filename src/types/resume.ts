import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

// 标签颜色类型
export type TagColor = "blue" | "red" | "green" | "yellow" | "purple" | "gray";

// 标签
export interface TagItem {
  text: string;
  color?: TagColor;
}

// 项目
export interface Project {
  title: string;
  description: string;
  time?: string;
  bulletPoints?: string[];
  tags: TagItem[];
}

// 工作经历
export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  responsibilities: ReactNode[];
}

// 教育经历
export interface Education {
  school: string;
  major: string;
  degree: string;
  duration: string;
}

// 个人信息
export interface PersonalInfo {
  name: string;
  nameEn?: string;
  title: string;
  titleEn?: string;
  phone: string;
  email: string;
  location: string;
  locationEn?: string;
  age: number;
  english: string;
}

// Section 头部
export interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

// 时间线
export interface TimelineProps {
  items: WorkExperience[];
  nodeColor?: string;
  lineColor?: string;
}

import { Locale, i18n } from "@/config/i18n";
import { BookOpen, Component, FileText } from "lucide-react";

export function getFeatures(locale: Locale) {
  const t = i18n[locale];
  return [
    { title: t.features.resume.title, description: t.features.resume.description, href: "/resume", icon: FileText },
    { title: t.features.blog.title, description: t.features.blog.description, href: "/blog", icon: BookOpen },
    { title: t.features.showcase.title, description: t.features.showcase.description, href: "/showcase", icon: Component },
  ];
}

export const techStack = [
  "Vue 2/3", "React", "TypeScript", "Next.js", "Nuxt.js",
  "Tailwind CSS", "Spring Boot", "MyBatis-Plus", "Node.js", "Redis", "MySQL",
];

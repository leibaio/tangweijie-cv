import { siteConfig } from "@/config";
import fs from "fs";
import matter from "gray-matter";
import { MetadataRoute } from "next";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 静态页面
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/showcase`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  // 动态博客页面
  const blogDir = path.join(process.cwd(), "content/blog");
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const files = fs.readdirSync(blogDir);
    blogPages = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(blogDir, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(content);
        const slug = file.replace(".md", "");

        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        };
      });
  } catch {
    // 博客目录不存在时忽略
  }

  return [...staticPages, ...blogPages];
}

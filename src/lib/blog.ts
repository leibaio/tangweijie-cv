import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
  tagsEn?: string[];
  content: string;
  readingTime: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
  tagsEn?: string[];
  readingTime: string;
}

function ensureDirectoryExists() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensureDirectoryExists();

  const fileNames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      titleEn: data.titleEn,
      date: data.date || new Date().toISOString().split("T")[0],
      description: data.description || "",
      descriptionEn: data.descriptionEn,
      tags: data.tags || [],
      tagsEn: data.tagsEn || [],
      readingTime: stats.text,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  ensureDirectoryExists();

  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    titleEn: data.titleEn,
    date: data.date || new Date().toISOString().split("T")[0],
    description: data.description || "",
    descriptionEn: data.descriptionEn,
    tags: data.tags || [],
    tagsEn: data.tagsEn || [],
    content,
    readingTime: stats.text,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}

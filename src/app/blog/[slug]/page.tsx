import { BlogHeader } from "@/components/blog-header";
import { i18n } from "@/config";
import { getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, Tag } from "lucide-react";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github-dark.css";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value === "en" ? "en" : "zh") as "zh" | "en";
  const t = i18n[locale].blog;

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <BlogHeader backHref="/blog" backText={t.backToList} />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <article>
          <header className="mb-8 pb-8 border-b border-primary/10">
            <h1 className="text-3xl font-bold mb-4 text-primary">
              {locale === "en" && post.titleEn ? post.titleEn : post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {t.publishedOn} {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {(locale === "en" && post.tagsEn?.length ? post.tagsEn : post.tags).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:my-4 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-primary/10 prose-pre:rounded-lg prose-pre:my-6
            prose-ul:my-4 prose-ul:space-y-2
            prose-ol:my-4 prose-ol:space-y-2
            prose-li:my-1
            prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-hr:border-primary/20 prose-hr:my-8
            prose-table:my-6
            prose-th:bg-primary/10 prose-th:px-4 prose-th:py-2
            prose-td:px-4 prose-td:py-2 prose-td:border-primary/10
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}

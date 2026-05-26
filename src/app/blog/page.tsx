import { BlogHeader } from "@/components/blog-header";
import { i18n } from "@/config";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function BlogPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value === "en" ? "en" : "zh") as "zh" | "en";
  const t = i18n[locale].blog;
  const posts = getAllPosts();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 h-[400px] w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.1),transparent)]" />
      </div>

      <BlogHeader backHref="/" backText={i18n[locale].resume.backToHome} />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2 text-primary font-mono">{t.title}</h1>
          <p className="text-muted-foreground">{t.description}</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">{t.noPosts}</div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-xl border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all"
              >
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {locale === "en" && post.titleEn ? post.titleEn : post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {locale === "en" && post.descriptionEn ? post.descriptionEn : post.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                  {post.tags.length > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {(locale === "en" && post.tagsEn?.length ? post.tagsEn : post.tags).join(", ")}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

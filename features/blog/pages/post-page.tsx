import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/api/posts";
import { Container } from "@/components/layout/container";

interface PostPageProps {
  slug: string;
}

export async function PostPage({ slug }: PostPageProps) {
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-stone-50/30 pb-20">
      <Container className="pt-12">
        <div className="mx-auto max-w-4xl">
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 font-medium text-pink-600 ring-1 ring-rose-100">
                {post.category}
              </span>

              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
              </time>

              {post.readingTimeMinutes && (
                <span>{post.readingTimeMinutes} دقیقه زمان مطالعه</span>
              )}
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-4 max-w-2xl text-stone-600 leading-7">
                {post.excerpt}
              </p>
            )}
          </header>

          <div className="relative mb-12 aspect-[14/7] w-full overflow-hidden rounded-[2rem] border border-black/5 bg-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          <article
            className="
              prose prose-stone max-w-none
              prose-headings:font-black
              prose-headings:tracking-tight
              prose-headings:text-stone-900
              prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl
              prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-xl
              prose-p:my-5 prose-p:text-[15px] prose-p:leading-8 prose-p:text-stone-700
              prose-a:font-medium prose-a:text-pink-600 hover:prose-a:text-pink-700
              prose-strong:text-stone-900
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-stone-700
              prose-blockquote:border-r-4 prose-blockquote:border-pink-200
              prose-blockquote:bg-rose-50/60 prose-blockquote:px-5 prose-blockquote:py-3
              prose-img:rounded-2xl prose-img:border prose-img:border-black/5
              prose-hr:my-10 prose-hr:border-stone-200
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Container>
    </main>
  );
}

import { getPosts } from "@/lib/api/posts";
import { Container } from "@/components/layout/container";
import { PostCard } from "../components/post-card";

export async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-stone-50/30 pb-20">
      <Container className="pt-12">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-black text-stone-900">
            بلاگ<span className="text-pink-600">.</span>
          </h1>

          <p className="mt-4 text-stone-600">
            مقالات آموزشی، راهنماهای مراقبت پوست و مو و پیشنهادهایی برای انتخاب آگاهانه‌تر محصولات.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border">
            هنوز مقاله‌ای منتشر نشده
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}

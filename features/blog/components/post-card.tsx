import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="truncate font-medium text-stone-600">
              {post.author}
            </span>

            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
            </time>
          </div>

          <h2 className="mt-4 line-clamp-2 text-lg font-bold text-stone-900 group-hover:text-pink-600">
            {post.title}
          </h2>

          <div className="mt-auto pt-4">
            <span className="text-sm font-semibold text-stone-900 group-hover:text-pink-600">
              مطالعه مقاله ←
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

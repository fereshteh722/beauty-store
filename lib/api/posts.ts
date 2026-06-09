import db from "@/data/db.json";
import { Post } from "@/types/post";

type DbShape = {
  posts: Post[];
};

export async function getPosts(): Promise<Post[]> {
  const typedDb = db as DbShape;
  return typedDb.posts ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

import { PostPage } from "@/features/blog/pages/post-page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <PostPage slug={slug} />;
}

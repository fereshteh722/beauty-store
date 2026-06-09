import { PostPage } from "@/features/blog/pages/post-page";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <PostPage slug={params.slug} />;
}

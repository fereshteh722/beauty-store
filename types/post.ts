export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string; // HTML string 
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string; // ISO date string
  readingTimeMinutes?: number;
  isFeatured?: boolean;
}

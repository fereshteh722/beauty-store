import { Product } from "@/types/product";

const normalize = (value?: string) => value?.toLowerCase() ?? "";

export const filterProducts = (
  products: Product[],
  query: string
): Product[] => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const results: Product[] = [];

  for (const product of products) {
    const name = normalize(product.name);
    const category = normalize(product.category);
    const description = normalize(product.description);

    if (
      name.includes(normalizedQuery) ||
      category.includes(normalizedQuery) ||
      description.includes(normalizedQuery)
    ) {
      results.push(product);
    }

    if (results.length === 6) break;
  }

  return results;
};

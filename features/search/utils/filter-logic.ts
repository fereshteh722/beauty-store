// features/search/utils/filter-logic.ts
import { Product } from "@/types/product";

export const filterProducts = (products: Product[], query: string): Product[] => {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return products.filter((product) => {
    // استفاده از ?. برای اطمینان از اینکه اگر فیلدی خالی بود، برنامه کرش نکند
    const nameMatch = product.name?.toLowerCase().includes(normalizedQuery);
    const categoryMatch = product.category?.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = product.description?.toLowerCase().includes(normalizedQuery);
    
    return nameMatch || categoryMatch || descriptionMatch;
  }).slice(0, 6);
};

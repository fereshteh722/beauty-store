import { apiClient } from "@/lib/api/client";
import { Product } from "@/types/product";

// گرفتن لیست همه محصولات
export async function getProducts() {
  return apiClient<Product[]>("/products", {
    next: { revalidate: 3600 }
  });
}

// گرفتن محصولات فیلتر شده (برای دسته‌بندی)
export async function getFilteredProducts(category?: string, subcategory?: string) {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (subcategory) params.append("subcategory", subcategory);

  const query = params.toString() ? `?${params.toString()}` : "";
  return apiClient<Product[]>(`/products${query}`, {
    next: { revalidate: 300 }
  });
}

// گرفتن تک محصول با آی‌دی 
export async function getProductById(id: string) {
  return apiClient<Product>(`/products/${id}`, {
    next: { revalidate: 300 }
  });
}

// و حذف محصول فعلی از لیست پیشنهادات گرفتن محصولات مرتبط
export async function getRelatedProducts(category: string, currentId: string, limit: number = 10) {
  const products = await getFilteredProducts(category);
  return products.filter(p => p.id !== currentId).slice(0, limit);
}

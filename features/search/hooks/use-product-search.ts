import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { filterProducts } from "../utils/filter-logic";

export const useProductSearch = (products: Product[]) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setIsSearching(true);

    const handler = setTimeout(() => {
      const filtered = filterProducts(products, query);
      setResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [query, products]);

  return { query, setQuery, results, isSearching };
};

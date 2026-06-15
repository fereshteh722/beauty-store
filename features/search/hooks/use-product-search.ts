import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { filterProducts } from "../utils/filter-logic";

const DEBOUNCE_TIME = 300;

export const useProductSearch = (products: Product[]) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsSearching(true);
      const filtered = filterProducts(products, query);
      setResults(filtered);
      setIsSearching(false);
    }, DEBOUNCE_TIME);

    return () => clearTimeout(timer);
  }, [query, products]);

  return {
    query,
    setQuery,
    results,
    isSearching,
  };
};

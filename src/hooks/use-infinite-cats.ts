import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { fetchCats } from "@/actions/fetch-cats";
import { Cat } from "@/components/pets-table/pets-table";
import { filterUniqueCats } from "@/utils/filter-unique-cats";

interface UseInfiniteCatsProps {
  initialCats: Cat[];
}

interface UseInfiniteCatsReturn {
  cats: Cat[];
  loading: boolean;
  hasMore: boolean;
  ref: (node?: Element | null) => void;
}

export function useInfiniteCats({
  initialCats,
}: UseInfiniteCatsProps): UseInfiniteCatsReturn {
  const [cats, setCats] = useState<Cat[]>(filterUniqueCats(initialCats || []));
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const loadMore = useCallback(async () => {
    await delay(2000);
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const newCats = await fetchCats(page);

      if (newCats && newCats.length > 0) {
        setCats((prevCats) => {
          const allCats = [...prevCats, ...newCats];
          return filterUniqueCats(allCats);
        });
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Erro ao carregar mais gatos:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    if (inView && hasMore && !loading) {
      loadMore();
    }
  }, [inView, hasMore, loading, loadMore]);

  return {
    cats,
    loading,
    hasMore,
    ref,
  };
}

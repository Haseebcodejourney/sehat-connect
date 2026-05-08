import { useCallback, useState } from 'react';

export function usePagination(initialPage = 1, initialPageSize = 10) {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((prev) => Math.max(1, prev - 1));
  }, []);

  const goToPage = useCallback((pageNumber) => {
    setPage(Math.max(1, pageNumber));
  }, []);

  const offset = (page - 1) * pageSize;

  return {
    page,
    pageSize,
    offset,
    nextPage,
    prevPage,
    goToPage,
    setPageSize,
  };
}

export default usePagination;

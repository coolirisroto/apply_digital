import { useMemo } from 'react'

const range = (start : number, end: number) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };

  type Props = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
  }

const usePagination = ({
    totalCount,
  }: Props) => {
    const paginationRange = useMemo(() => {
        return range(1, totalCount);
    }, [totalCount]);

    return paginationRange;
  };

  export default usePagination
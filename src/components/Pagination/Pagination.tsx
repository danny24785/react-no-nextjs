import { type Todo } from '../../types/todo';

type PaginationProps = {
  page: number;
  setPage: (page: number | ((old: number) => number)) => void;
  isPlaceholderData: boolean;
  data: Todo[];
};

export default function Pagination({ page, setPage, isPlaceholderData, data }: PaginationProps) {
  return (
    <>
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => {
          setPage((old) => Math.max(old - 1, 0))
        }}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPlaceholderData) {
            setPage((old) => old + 1)
          }
        }}
        disabled={isPlaceholderData || !data || data.length < 10}
      >
        Next Page
      </button>
    </>
  );
}
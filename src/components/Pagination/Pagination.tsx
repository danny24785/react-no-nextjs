import Button from '../Button/Button';
import { type Todo } from '../../types/todo';

type PaginationProps = {
  page: number;
  setPage: (page: number | ((old: number) => number)) => void;
  isPlaceholderData: boolean;
  data: Todo[];
};

export default function Pagination({ page, setPage, isPlaceholderData, data }: PaginationProps) {
  return (
    <div className='flex gap-4 items-center mt-4'>
      <Button
        onClick={() => {
          setPage((old) => Math.max(old - 1, 0))
        }}
        label='Previous Page'
        disabled={page === 0} />

      <span>Current Page: {page + 1}</span>  

      <Button
        label='Next Page'
        onClick={() => {
          if (!isPlaceholderData) {
            setPage((old) => old + 1)
          }
        }}
        disabled={isPlaceholderData || !data || data.length < 10} />
    </div>
  );
}
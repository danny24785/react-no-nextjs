import Button from '../Button/Button';

type PaginationProps = {
  page: number;
  isPlaceholderData: boolean;
  dataLength: number;
  pageLimit: number;
  setPage: (page: number | ((old: number) => number)) => void;
};

export default function Pagination({ page, isPlaceholderData, dataLength, pageLimit, setPage }: PaginationProps) {
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
        disabled={isPlaceholderData || dataLength < pageLimit} />
    </div>
  );
}
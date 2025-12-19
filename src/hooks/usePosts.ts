import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/posts'
import { type Post } from '../types/todo';

export function usePosts(page: number, pageLimit: number) {
  return useQuery<Post[]>({
    queryKey: ['posts', page, pageLimit],
    queryFn: () => fetchPosts(page, pageLimit),
    placeholderData: keepPreviousData,
  })
}

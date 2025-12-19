import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/posts'

export function usePosts(page: number, pageLimit: number) {
  return useQuery({
    queryKey: ['posts', page, pageLimit],
    queryFn: () => fetchPosts(page, pageLimit),
    placeholderData: keepPreviousData,
  })
}

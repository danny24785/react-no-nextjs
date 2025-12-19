export async function fetchPosts(page: number, pageLimit: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${pageLimit}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

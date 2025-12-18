import { useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { type Todo } from '../types/todo';

function Home() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)

  const fetchProjects = (page = 0) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/?_page=${page + 1}&_limit=10`).then((res) => res.json())


  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['todo', page],
    queryFn: () => fetchProjects(page),
    placeholderData: keepPreviousData ,
  })

  return (
    <>
      <h1>Home page</h1>
      <h1>Vite + React</h1>
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          </button>
      </div>
      {data && <div className="card text-left">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
        <ul>
          {data.map((u: Todo) => (
            <li key={u.id} className="bg-black rounded-sm text-white py-2 px-4 mb-2">{u.title}</li>
          ))}
        </ul>
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
          // Disable the Next Page button until we know a next page is available
          disabled={isPlaceholderData || !data || data.length < 10}
        >
          Next Page
        </button>
      </div>}
    </>
  )
}

export default Home;
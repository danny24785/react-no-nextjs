import { useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import  Pagination from '../components/Pagination/Pagination'
import { type Todo } from '../types/todo';

function Home() {
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
      {data && <div className="card text-left">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}

        <ul>
          {data.map((u: Todo) => (
            <li key={u.id} className="bg-black rounded-sm text-white py-2 px-4 mb-2">{u.title}</li>
          ))}
        </ul>

        <Pagination page={page} setPage={setPage} isPlaceholderData={isPlaceholderData} data={data} />
      </div>}
    </>
  )
}

export default Home;
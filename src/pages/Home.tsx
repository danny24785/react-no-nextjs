import { useState } from 'react'
import  Pagination from '../components/Pagination/Pagination'
import { type Post } from '../types/todo';
import { usePosts } from '../hooks/usePosts';

function Home() {
  const [page, setPage] = useState(0)
  const pageLimit = 10
  const { data, isLoading, error, isPlaceholderData } = usePosts(page, pageLimit);

  return (
    <>
      <h1>Home page</h1>
      {data 
        ? <div className="card text-left">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading data</p>}

          <ul>
            {data.map((post: Post) => (
              <li key={post.id} className="bg-black rounded-sm text-white py-2 px-4 mb-2">{post.title}</li>
            ))}
          </ul>

          <Pagination page={page} pageLimit={pageLimit} setPage={setPage} isPlaceholderData={isPlaceholderData} dataLength={data.length} />
        </div>
        : <p>No posts have been found</p>}
    </>
  )
}

export default Home;
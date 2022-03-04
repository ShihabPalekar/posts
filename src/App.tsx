import React, { useEffect, useState } from 'react';
import PostsTable from './components/PostsTable'

const App = () => {
  const [data, setData]:any = useState([])
  const [page, setPage] = useState(1)

  const fetchTableData = async (page:number) => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`)
    const resData = await response.json()
    setData((prevData: any)=> [...resData.hits, ...prevData])
    setPage(prevPage => prevPage + 1);
  }
  
  useEffect(()=>{
    fetchTableData(page)
  },[])

  useEffect(() => {
      const timer = setTimeout(() => {
      fetchTableData(page);
    }, 10000);
    return () => clearTimeout(timer);
  }, [page]);
  
  return (
    <div className="app">
      <PostsTable data={data}/>
    </div>
  );
}

export default App;

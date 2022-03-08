import React, { useEffect, useState } from 'react';
import PostsTable from './components/PostsTable'

const App : React.FC = () => {
  const [data, setData]:any = useState([])
  const [page, setPage] = useState(1)
  const [storedData, setStoredData] : any = useState({})

  const fetchTableData = async (page:number) => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`)
    const resData = await response.json()
    // setData((prevData: any)=> [...resData.hits, ...prevData])
    if (storedData[page] === undefined){
      setStoredData({...storedData, [page]: resData.hits})
    }
  }

  console.log(storedData)

  useEffect(()=>{
    fetchTableData(page)
  },[page])
  
  return (
    <div className="app">
      <PostsTable data={data}/>
    </div>
  );
}

export default App;

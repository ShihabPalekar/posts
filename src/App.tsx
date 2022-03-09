import React, { useEffect, useState } from "react";
import PostsTable from "./components/PostsTable";

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [storedData, setStoredData]: any = useState({});

  const fetchTableData = async (page: number) => {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`
    );
    const resData = await response.json();
    if (storedData[page] === undefined) {
      setStoredData({ ...storedData, [page]: resData.hits });
    }
  };

  useEffect(() => {
    fetchTableData(page);
  }, [page]);

  return (
    <div className="app">
      <PostsTable storedData={storedData} page={page} setPage={setPage} />
    </div>
  );
};

export default App;

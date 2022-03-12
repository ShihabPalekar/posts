import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PostsTable from "./components/PostsTable";
import { useNavigate } from "react-router-dom";
import DisplayRowDetails from "./components/DisplayRowDetails";

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [storedData, setStoredData]: any = useState({});
  const [selectedRow, setSelectedRow]: any = useState({});
  const navigate = useNavigate();

  const fetchTableData = async (page: number) => {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=story&page=${page}`
    );
    const resData = await response.json();
    
  console.log(resData)
    if (storedData[page] === undefined) {
      setStoredData({ ...storedData, [page]: resData.hits });
    }
  };


  useEffect(() => {
    fetchTableData(page);
  }, [page]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/json"
          element={
            <DisplayRowDetails selectedRow={selectedRow} navigate={navigate} />
          }
        />
        <Route
          path="/"
          element={
            <PostsTable
              storedData={storedData}
              page={page}
              setPage={setPage}
              setSelectedRow={setSelectedRow}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

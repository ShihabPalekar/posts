import { DataGrid } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const columns = [
  { field: "title", headerName: "Title", width: 500, sortable: false },
  { field: "author", headerName: "Author", width: 200, sortable: false },
  { field: "createdAt", headerName: "Created At", width: 300, sortable: false },
  { field: "url", headerName: "URL", width: 300, sortable: false },
];

type Props = {
  storedData: any;
  page: number;
  setPage: any;
};

const PostsTable: React.FC<Props> = ({ ...props }) => {
  const handlePageChange = (event: any, value: number) => {
    props.setPage(value);
    console.log(value);
  };

  return (
    <div>
      {props.storedData[props.page] === undefined ? (
        <p className="loader">fetching data...</p>
      ) : (
        <div>
          <div
            className="table-wrapper"
            style={{ height: "80vh", width: "98vw" }}
          >
            <DataGrid
              rows={props.storedData[props.page].map((item: any) => {
                return {
                  id: uuidv4(),
                  title: item.story_title || "-",
                  author: item.author || "-",
                  createdAt: item.created_at || "-",
                  url: item.story_url || "-",
                };
              })}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
            />
          </div>
          <div>
            <Pagination
              className="pagination"
              count={50}
              page={props.page}
              color="primary"
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsTable;

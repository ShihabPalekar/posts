import { DataGrid, getRowGroupingFieldFromGroupingCriteria, gridRowIdsSelector } from "@mui/x-data-grid";
import { v4 as uuidv4 } from 'uuid';

const columns = [
  { field: "title", headerName: "Title", width: 500, sortable: false },
  { field: "author", headerName: "Author", width: 200, sortable: false },
  { field: "createdAt", headerName: "Created At", width: 300, sortable: false },
  { field: "url", headerName: "URL", width: 300, sortable: false },
];

const PostsTable = ({ ...props }) => {
  return (
    <div>
      {props.data === undefined ? (
        <p>fetching data...</p>
      ) : (
        <div className="table-wrapper" style={{ height: "80vh", width: "98vw" }}>
          <DataGrid
            rows={
                props.data.map((item: any) => {
                    return {
                      id: uuidv4(),
                      title: item.story_title || "",
                      author: item.author || "",
                      createdAt: item.created_at || "",
                      url: item.story_url || "",
                    };
                  })
            }
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </div>
      )}
    </div>
  );
};

export default PostsTable;

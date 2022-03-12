import { Button } from "@mui/material";

type Props = {
  selectedRow: any;
  navigate: any;
};

const DisplayRowDetails: React.FC<Props> = ({ ...props }) => {
  const goBack = () => {
    props.navigate(-1);
  };
  return (
    <div style={{ margin: "20px" }}>
      <div>
        <pre role="json-data">{JSON.stringify(props.selectedRow, null, 2)}</pre>
      </div>
      <div>
        <Button variant="text" role="back-button" onClick={goBack}>
          GO BACK
        </Button>
      </div>
    </div>
  );
};

export default DisplayRowDetails;

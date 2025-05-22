// import "./App.css";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckButton from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo( props) {
  return (
    <>
      <Card maxWidth="ms" sx={{ color: "#fff", marginTop: 5 }}>
        <CardContent>
          {/* {Array.from({ length: 5 }, (_, index) => (
          ))} */}

          <Grid
            container
            style={{
              background: "#ba68c8",
              padding: "10px 20px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <Grid size={8}>
              <Typography variant="h5" style={{ textAlign: "left" }}>
                {props.title}
              </Typography>

              <Typography variant="h5" style={{ textAlign: "left" }}>
                {props.details}
              </Typography>
            </Grid>
            {/* Action Buttons */}
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <CheckButton
                className="icon-button"
                aria-label="delete"
                style={{
                  color: "green",
                  background: "white",
                  border: "solid green 2px",
                }}
              >
                <DeleteIcon />
              </CheckButton>
              <EditIcon
                className="icon-button"
                aria-label="delete"
                style={{
                  color: "blue",
                  background: "white",
                  border: "solid blue 2px",
                }}
              >
                <DeleteIcon />
              </EditIcon>
              <DeleteIcon
                className="icon-button"
                aria-label="delete"
                style={{
                  color: "red",
                  background: "white",
                  border: "solid red 2px",
                }}
              >
                <DeleteIcon />
              </DeleteIcon>
            </Grid>
            {/* Action Buttons  */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

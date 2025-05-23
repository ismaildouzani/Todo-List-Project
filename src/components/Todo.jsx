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

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useContext, useState } from "react";
import { TodosContext } from "../context/todosContext";

export default function Todo({ Todo, handeCheck }) {
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);

  const { todos, setTodos } = useContext(TodosContext);

  // Event handlers
  function handelDeleteClick() {
    setshowDeleteDialog(true);
  }

  function handleClose() {
    setshowDeleteDialog(false);
  }

  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((f) => {
      if (f.id == Todo.id) {
        return false
      } else {
        return true
      }

    }) 
     setTodos(updatedTodos);

  }

  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if (t.id == Todo.id) {
        t.isCompleted = !t.isCompleted; // toggle isCompleted
      }
      return t;
    });
    setTodos(updatedTodos);
  }

  // Event handlers

  return (
    <>
      {/* Delete Modal */}

      <Dialog
        onClose={handleClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want delete this card ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            after delete it doesn't returned{" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>Agree</Button>
        </DialogActions>
      </Dialog>

      {/* ===== Delete Modal ====== */}
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
                {Todo.title}
              </Typography>

              <Typography variant="h5" style={{ textAlign: "left" }}>
                {Todo.details}
              </Typography>
            </Grid>
            {/* Action Buttons */}
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* Chack button */}

              <CheckButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="icon-button"
                aria-label="delete"
                style={{
                  color: Todo.isCompleted ? "white" : "green",
                  background: Todo.isCompleted ? "green" : "white",
                  border: "solid green 2px",
                }}
              ></CheckButton>

              {/* chack buton */}

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

              {/* ============== delete button ============ */}
              <DeleteIcon
              
                onClick={handelDeleteClick}
                className="icon-button"
                aria-label="delete"
                style={{
                  color: "red",
                  background: "white",
                  border: "solid red 2px",
                }}
              ></DeleteIcon>

              {/*========== delete button ==========*/}
            </Grid>
            {/* Action Buttons  */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

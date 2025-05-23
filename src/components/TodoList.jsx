import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";

// ICONS

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

// Others

import Grid from "@mui/material/Grid";
// Components
import { TodosContext } from "../context/todosContext";
import Todo from "./Todo";
import { useContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {

  const {todos, setTodos} = useContext(TodosContext)
  const [titleInput, setTitleInput] = useState("");



  const TodoData = () => {
    return todos.map((t) => {
      console.log("testt", todos);
      
      // console.log("t", t);
      return <Todo key={t.id} Todo={t}/>;
    });
  };
  function handleAddClick() {
   
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTitleInput("");
  }
  return (
    <Container maxWidth="md">
      <Card style={{ size: "100" }}>
        <CardContent>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h2"
            gutterBottom
            sx={{ color: "text.secondary" }}
          >
            List
          </Typography>
          <Divider />
          {/* FILTER BUTTONS */}

          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            fullWidth
          >
            <ToggleButton value="">All</ToggleButton>
            <ToggleButton value="">Done</ToggleButton>
            <ToggleButton value="">In Progress</ToggleButton>
          </ToggleButtonGroup>
          {/*========= FILTER BUTTONS ===========*/}

          {/* TODO LIST */}
          {/* <Todo/> */}
          <TodoData></TodoData>

          {/* input + add button */}
          <Grid container style={{ marginTop: "50px" }}>
            <Grid
              size={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              style={{
                // background: "green",
                padding: "10px 20px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="title mission"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>

            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              style={{
                background: "purple",
                borderRadius: "10px",
                marginBottom: "25px",
              }}
            >
              <Button
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={handleAddClick}
              >
                Add
              </Button>
            </Grid>
          </Grid>

          {/* input + add button */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

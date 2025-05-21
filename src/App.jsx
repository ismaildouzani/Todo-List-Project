import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["OpenSans"],
  },
});

function App() {
  return (

    <ThemeProvider theme={theme}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TodoList />
      {/* <Todo /> */}
      
    </div>
    </ThemeProvider>
  );
}

export default App;

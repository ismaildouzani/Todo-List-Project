import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TodosContext } from "./context/todosContext";

import { v4 as uuidv4 } from "uuid";

const theme = createTheme({
  typography: {
    fontFamily: ["OpenSans"],
  },
});

const inisialTodos = [
  {
    id: uuidv4(),
    title: "Read the books",
    details: "Complete before end this month",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read the books",
    details: "Complete before end this month",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read the books",
    details: "Complete before end this month",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(inisialTodos);

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
        <TodosContext.Provider value={{todos, setTodos}}>
        <TodoList />
        </TodosContext.Provider>
        {/* <Todo /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

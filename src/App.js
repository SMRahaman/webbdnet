import logo from "./logo.svg";
import "./App.css";
import "./assets/CSS/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

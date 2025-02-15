// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
// import About from "./components/About.jsx";

let myObj = {
  name: "Suyash",
  age: 21,
};
createRoot(document.getElementById("root")).render(
  <>
    <h1 className="flex justify-center items-center text-center mt-52 text-xl bg-orange-400 w-52 mx-auto">
      Components imported
    </h1>
    <App channel="Suyash" someObje={myObj} />
    <App />
  </>
);
<h1>components</h1>;

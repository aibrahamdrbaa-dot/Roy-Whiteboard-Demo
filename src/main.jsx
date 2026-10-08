import React from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

function App(){
  return <div style={{width:"100vw",height:"100vh"}}>
    <Excalidraw initialData={{
      elements: [],
      appState: { viewBackgroundColor: "#ffffff" },
      files: {}
    }} />
  </div>;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);

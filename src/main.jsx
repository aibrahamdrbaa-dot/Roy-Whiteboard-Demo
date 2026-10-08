import React from "react";
import { createRoot } from "react-dom/client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const columns = ["المشروع", "الميزانية", "الحالة", "ملاحظات"];
const rows = [
  ["استديو", "$5,000", "قيد التخطيط", "معدات + إيجار"],
  ["Ugarit Media", "$1,500", "نشط", "عملاء شهر أكتوبر"],
  ["دورة AI", "$700", "جاهزة", "دفعة جديدة"],
  ["تسويق", "$300", "قيد التنفيذ", "محتوى وسوشال"],
];

function buildTable() {
  const x0 = 120;
  const y0 = 120;
  const colWidths = [240, 160, 170, 260];
  const rowHeight = 70;
  const elements = [];

  let x = x0;
  columns.forEach((header, i) => {
    elements.push({
      type: "rectangle",
      x,
      y: y0,
      width: colWidths[i],
      height: rowHeight,
      strokeWidth: 2,
      backgroundColor: "#f4b942",
      strokeColor: "#1f2227",
      fillStyle: "solid",
      label: { text: header, fontSize: 20, textAlign: "center", verticalAlign: "middle" },
    });
    x += colWidths[i];
  });

  rows.forEach((row, r) => {
    let cellX = x0;
    row.forEach((value, c) => {
      elements.push({
        type: "rectangle",
        x: cellX,
        y: y0 + rowHeight * (r + 1),
        width: colWidths[c],
        height: rowHeight,
        strokeWidth: 1,
        backgroundColor: "#ffffff",
        strokeColor: "#777d86",
        fillStyle: "solid",
        label: { text: value, fontSize: 16, textAlign: "center", verticalAlign: "middle" },
      });
      cellX += colWidths[c];
    });
  });

  elements.push({
    type: "text",
    x: x0,
    y: y0 - 55,
    text: "Roy Whiteboard — Sample Table",
    fontSize: 26,
    strokeColor: "#111318",
  });

  return convertToExcalidrawElements(elements);
}

const tableElements = buildTable();

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Excalidraw
        initialData={{
          elements: tableElements,
          appState: {
            viewBackgroundColor: "#faf9f5",
            scrollToContent: true,
          },
          files: {},
        }}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

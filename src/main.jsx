import React from "react";
import { createRoot } from "react-dom/client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const ink = "#1f2329";
const accent = "#f2b33d";
const blue = "#d9ecff";
const green = "#ddf4df";
const yellow = "#fff2b8";
const pink = "#ffe0e8";
const paper = "#fbfaf5";

const elements = [
  {
    type: "text",
    x: 120,
    y: 60,
    text: "FIELD PRODUCTION PLAN",
    fontSize: 32,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 122,
    y: 102,
    text: "تصوير فعالية ميدانية — غرفة قيادة صغيرة",
    fontSize: 18,
    strokeColor: "#5f646c",
  },
  {
    type: "rectangle",
    x: 100,
    y: 180,
    width: 420,
    height: 250,
    strokeColor: ink,
    backgroundColor: yellow,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 125,
    y: 205,
    text: "01 — غرفة القيادة / Briefing",
    fontSize: 22,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 125,
    y: 248,
    text: "• تأكيد قائمة اللقطات\n• توزيع الفريق\n• مراجعة الجدول الزمني\n• نقطة تجمع قبل الانطلاق",
    fontSize: 17,
    strokeColor: ink,
    lineHeight: 1.45,
  },
  {
    type: "rectangle",
    x: 600,
    y: 180,
    width: 560,
    height: 250,
    strokeColor: ink,
    backgroundColor: blue,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 625,
    y: 205,
    text: "02 — منطقة المعدات",
    fontSize: 22,
    strokeColor: ink,
  },
  {
    type: "rectangle",
    x: 625,
    y: 255,
    width: 235,
    height: 120,
    strokeColor: "#4e6477",
    backgroundColor: "#ffffff",
    fillStyle: "solid",
  },
  {
    type: "text",
    x: 645,
    y: 278,
    text: "CAMERA KIT",
    fontSize: 18,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 645,
    y: 310,
    text: "2× Camera\n24–70mm + 70–200mm\nSpare batteries ×6",
    fontSize: 15,
    strokeColor: "#41464d",
  },
  {
    type: "rectangle",
    x: 885,
    y: 255,
    width: 235,
    height: 120,
    strokeColor: "#4e6477",
    backgroundColor: "#ffffff",
    fillStyle: "solid",
  },
  {
    type: "text",
    x: 905,
    y: 278,
    text: "LIGHT / AUDIO",
    fontSize: 18,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 905,
    y: 310,
    text: "LED ×2\nWireless mics ×2\nTripods + monopod",
    fontSize: 15,
    strokeColor: "#41464d",
  },
  {
    type: "rectangle",
    x: 100,
    y: 510,
    width: 300,
    height: 210,
    strokeColor: ink,
    backgroundColor: green,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 125,
    y: 535,
    text: "03 — Stage / Main Action",
    fontSize: 20,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 125,
    y: 580,
    text: "لقطات رئيسية\n• افتتاح\n• الجمهور\n• المتحدث\n• تفاعل وحركة",
    fontSize: 16,
    strokeColor: ink,
  },
  {
    type: "rectangle",
    x: 450,
    y: 510,
    width: 300,
    height: 210,
    strokeColor: ink,
    backgroundColor: pink,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 475,
    y: 535,
    text: "04 — Portrait Corner",
    fontSize: 20,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 475,
    y: 580,
    text: "خلفية بسيطة\nKey light + fill\n5 دقائق / شخص\nVertical + Horizontal",
    fontSize: 16,
    strokeColor: ink,
  },
  {
    type: "rectangle",
    x: 800,
    y: 510,
    width: 360,
    height: 210,
    strokeColor: ink,
    backgroundColor: "#ece8ff",
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 825,
    y: 535,
    text: "05 — Interview / BTS",
    fontSize: 20,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 825,
    y: 580,
    text: "مقابلات قصيرة\nB-roll\nلقطات خلف الكواليس\nAmbient audio",
    fontSize: 16,
    strokeColor: ink,
  },
  {
    type: "rectangle",
    x: 100,
    y: 785,
    width: 500,
    height: 225,
    strokeColor: ink,
    backgroundColor: paper,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 125,
    y: 810,
    text: "06 — Logistics Checklist",
    fontSize: 21,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 125,
    y: 855,
    text: "☐ بطاريات مشحونة\n☐ بطاقات ذاكرة فارغة\n☐ شواحن / Power bank\n☐ عقود وتصاريح\n☐ مياه + First Aid",
    fontSize: 16,
    strokeColor: ink,
  },
  {
    type: "rectangle",
    x: 650,
    y: 785,
    width: 510,
    height: 225,
    strokeColor: ink,
    backgroundColor: accent,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 675,
    y: 810,
    text: "07 — IMPORTANT NOTES",
    fontSize: 21,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 675,
    y: 855,
    text: "⚠ لا تضع المعدات في ممر الجمهور\n⚠ Backup card بعد كل ساعة\n⚠ لقطة واسعة كل 20 دقيقة\n⚠ راقب الإضاءة المتغيرة\n⚠ نسخة احتياطية للمواد قبل المغادرة",
    fontSize: 16,
    strokeColor: ink,
  },
  {
    type: "rectangle",
    x: 1230,
    y: 180,
    width: 270,
    height: 250,
    strokeColor: ink,
    backgroundColor: "#ffffff",
    fillStyle: "solid",
  },
  {
    type: "text",
    x: 1255,
    y: 205,
    text: "TEAM",
    fontSize: 22,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 1255,
    y: 250,
    text: "Director / Roy\nCamera A\nCamera B\nPhoto + Portrait\nAudio / BTS",
    fontSize: 17,
    strokeColor: ink,
    lineHeight: 1.35,
  },
  {
    type: "arrow",
    x: 520,
    y: 305,
    width: 75,
    height: 0,
    strokeColor: accent,
    strokeWidth: 4,
    endArrowhead: "arrow",
  },
  {
    type: "arrow",
    x: 760,
    y: 450,
    width: -250,
    height: 55,
    strokeColor: "#6d879d",
    strokeWidth: 3,
    endArrowhead: "arrow",
  },
  {
    type: "arrow",
    x: 760,
    y: 620,
    width: -45,
    height: 0,
    strokeColor: "#6d879d",
    strokeWidth: 3,
    endArrowhead: "arrow",
  },
  {
    type: "arrow",
    x: 760,
    y: 620,
    width: 35,
    height: 0,
    strokeColor: "#6d879d",
    strokeWidth: 3,
    endArrowhead: "arrow",
  },
  {
    type: "arrow",
    x: 1165,
    y: 620,
    width: 55,
    height: 0,
    strokeColor: "#6d879d",
    strokeWidth: 3,
    endArrowhead: "arrow",
  },
  {
    type: "rectangle",
    x: 1230,
    y: 510,
    width: 270,
    height: 210,
    strokeColor: ink,
    backgroundColor: yellow,
    fillStyle: "solid",
    strokeWidth: 2,
  },
  {
    type: "text",
    x: 1252,
    y: 535,
    text: "FIELD NOTE",
    fontSize: 19,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 1252,
    y: 578,
    text: "أفضل نقطة تصوير:\nيمين المسرح\nخلف الجمهور قليلًا\nمع خط رؤية مفتوح.",
    fontSize: 17,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 1230,
    y: 790,
    text: "Legend",
    fontSize: 20,
    strokeColor: ink,
  },
  {
    type: "text",
    x: 1230,
    y: 825,
    text: "■ Action\n■ Equipment\n■ Notes\n→ Movement / workflow",
    fontSize: 16,
    strokeColor: "#454a51",
  },
];

const sceneElements = convertToExcalidrawElements(elements, {
  regenerateIds: true,
});

function App() {
  const handleAPI = (api) => {
    window.setTimeout(() => {
      const scene = api.getSceneElements();
      if (scene.length) {
        api.setViewport({
          target: scene,
          fit: "contain",
          animation: false,
        });
      }
    }, 150);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Excalidraw
        excalidrawAPI={handleAPI}
        initialData={{
          elements: sceneElements,
          appState: {
            viewBackgroundColor: "#f7f6f1",
          },
          scrollToContent: true,
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

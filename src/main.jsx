import React from "react";
import { createRoot } from "react-dom/client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const elements = [
  // Title
  { type: "text", x: 0, y: 0, text: "FIELD PRODUCTION PLAN", fontSize: 30, strokeColor: "#111318" },
  { type: "text", x: 0, y: 48, text: "مخطط ميداني لتصوير فعالية", fontSize: 20, strokeColor: "#555b63" },

  // Command
  { type: "rectangle", x: 0, y: 110, width: 380, height: 210, backgroundColor: "#fff1b3", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 20, y: 130, text: "01 — القيادة / Briefing", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 20, y: 180, text: "قائمة اللقطات\nتوزيع الفريق\nالجدول الزمني\nنقطة التجمع", fontSize: 17, strokeColor: "#20242a" },

  // Equipment
  { type: "rectangle", x: 430, y: 110, width: 520, height: 210, backgroundColor: "#dceeff", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 450, y: 130, text: "02 — المعدات", fontSize: 20, strokeColor: "#111318" },
  { type: "rectangle", x: 455, y: 180, width: 220, height: 110, backgroundColor: "#ffffff", strokeColor: "#68717c", fillStyle: "solid" },
  { type: "text", x: 470, y: 198, text: "CAMERA KIT", fontSize: 17, strokeColor: "#111318" },
  { type: "text", x: 470, y: 230, text: "Camera ×2\n24–70 / 70–200\nBatteries ×6", fontSize: 15, strokeColor: "#454b53" },
  { type: "rectangle", x: 700, y: 180, width: 220, height: 110, backgroundColor: "#ffffff", strokeColor: "#68717c", fillStyle: "solid" },
  { type: "text", x: 715, y: 198, text: "LIGHT + AUDIO", fontSize: 17, strokeColor: "#111318" },
  { type: "text", x: 715, y: 230, text: "LED ×2\nWireless mics ×2\nTripods", fontSize: 15, strokeColor: "#454b53" },

  // Action zones
  { type: "rectangle", x: 0, y: 370, width: 280, height: 190, backgroundColor: "#ddf4df", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 20, y: 392, text: "03 — STAGE", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 20, y: 440, text: "افتتاح\nالمتحدث\nالجمهور\nلحظات التفاعل", fontSize: 17, strokeColor: "#20242a" },

  { type: "rectangle", x: 320, y: 370, width: 280, height: 190, backgroundColor: "#ffe2e9", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 340, y: 392, text: "04 — PORTRAIT", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 340, y: 440, text: "Key light + fill\n5 دقائق / شخص\nVertical + Horizontal", fontSize: 17, strokeColor: "#20242a" },

  { type: "rectangle", x: 640, y: 370, width: 310, height: 190, backgroundColor: "#ece8ff", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 660, y: 392, text: "05 — INTERVIEW / BTS", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 660, y: 440, text: "مقابلات قصيرة\nB-roll\nخلف الكواليس\nAmbient audio", fontSize: 17, strokeColor: "#20242a" },

  // Checklist
  { type: "rectangle", x: 0, y: 610, width: 455, height: 230, backgroundColor: "#f8f7f2", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 20, y: 632, text: "06 — LOGISTICS CHECKLIST", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 20, y: 680, text: "☐ بطاريات مشحونة\n☐ بطاقات ذاكرة\n☐ شواحن / Power bank\n☐ تصاريح وعقود\n☐ مياه + First Aid", fontSize: 17, strokeColor: "#20242a" },

  // Important notes
  { type: "rectangle", x: 500, y: 610, width: 450, height: 230, backgroundColor: "#f2b33d", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 520, y: 632, text: "07 — IMPORTANT NOTES", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 520, y: 680, text: "⚠ لا تضع المعدات في ممر الجمهور\n⚠ Backup بعد كل ساعة\n⚠ لقطة واسعة كل 20 دقيقة\n⚠ راقب الإضاءة المتغيرة\n⚠ نسخة احتياطية قبل المغادرة", fontSize: 17, strokeColor: "#20242a" },

  // Team
  { type: "rectangle", x: 1000, y: 110, width: 250, height: 290, backgroundColor: "#ffffff", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 1020, y: 132, text: "TEAM", fontSize: 22, strokeColor: "#111318" },
  { type: "text", x: 1020, y: 185, text: "Director / Roy\nCamera A\nCamera B\nPhoto + Portrait\nAudio / BTS", fontSize: 17, strokeColor: "#20242a" },

  // Field note
  { type: "rectangle", x: 1000, y: 440, width: 250, height: 215, backgroundColor: "#fff1b3", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 1020, y: 462, text: "FIELD NOTE", fontSize: 19, strokeColor: "#111318" },
  { type: "text", x: 1020, y: 510, text: "أفضل نقطة تصوير:\nيمين المسرح\nخلف الجمهور قليلًا\nمع خط رؤية مفتوح.", fontSize: 17, strokeColor: "#20242a" },

  // Workflow arrows
  { type: "arrow", x: 385, y: 215, width: 35, height: 0, strokeColor: "#f2b33d", strokeWidth: 3 },
  { type: "arrow", x: 525, y: 335, width: -370, height: 25, strokeColor: "#71849a", strokeWidth: 3 },
  { type: "arrow", x: 605, y: 465, width: 30, height: 0, strokeColor: "#71849a", strokeWidth: 3 },
  { type: "arrow", x: 955, y: 465, width: 35, height: 0, strokeColor: "#71849a", strokeWidth: 3 },
];

const sceneElements = convertToExcalidrawElements(elements);

function App() {
  const onReady = (api) => {
    // Inject after Excalidraw is fully ready.
    api.updateScene({
      elements: sceneElements,
      appState: {
        viewBackgroundColor: "#f7f6f1",
      },
    });

    window.setTimeout(() => {
      const current = api.getSceneElements();
      if (current.length) {
        api.setViewport({
          target: current,
          fit: "contain",
          animation: false,
        });
      }
    }, 100);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Excalidraw
        excalidrawAPI={onReady}
        initialData={{
          appState: {
            viewBackgroundColor: "#f7f6f1",
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
  </React.StrictMode>
);

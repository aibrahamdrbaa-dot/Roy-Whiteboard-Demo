import React from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const scene = convertToExcalidrawElements([
  { type: "text", x: 0, y: 0, text: "FIELD PRODUCTION PLAN", fontSize: 30, strokeColor: "#111318" },
  { type: "text", x: 0, y: 48, text: "مخطط ميداني لتصوير فعالية", fontSize: 20, strokeColor: "#555b63" },
  { type: "rectangle", x: 0, y: 110, width: 380, height: 210, backgroundColor: "#fff1b3", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 20, y: 132, text: "01 — القيادة / Briefing", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 20, y: 178, text: "قائمة اللقطات\nتوزيع الفريق\nالجدول الزمني\nنقطة التجمع", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 430, y: 110, width: 520, height: 210, backgroundColor: "#dceeff", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 450, y: 132, text: "02 — المعدات", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 450, y: 182, text: "CAMERA ×2   •   24–70 / 70–200\nLED ×2   •   Wireless mics ×2\nTripods   •   Batteries ×6", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 0, y: 370, width: 280, height: 190, backgroundColor: "#ddf4df", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 20, y: 392, text: "03 — STAGE", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 20, y: 440, text: "افتتاح\nالمتحدث\nالجمهور\nلحظات التفاعل", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 320, y: 370, width: 280, height: 190, backgroundColor: "#ffe2e9", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 340, y: 392, text: "04 — PORTRAIT", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 340, y: 440, text: "Key light + fill\n5 دقائق / شخص\nVertical + Horizontal", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 640, y: 370, width: 310, height: 190, backgroundColor: "#ece8ff", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 660, y: 392, text: "05 — INTERVIEW / BTS", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 660, y: 440, text: "مقابلات قصيرة\nB-roll\nخلف الكواليس\nAmbient audio", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 0, y: 610, width: 455, height: 230, backgroundColor: "#f8f7f2", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 20, y: 632, text: "06 — LOGISTICS CHECKLIST", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 20, y: 680, text: "☐ بطاريات مشحونة\n☐ بطاقات ذاكرة\n☐ شواحن / Power bank\n☐ تصاريح وعقود\n☐ مياه + First Aid", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 500, y: 610, width: 450, height: 230, backgroundColor: "#f2b33d", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 520, y: 632, text: "07 — IMPORTANT NOTES", fontSize: 20, strokeColor: "#111318" },
  { type: "text", x: 520, y: 680, text: "⚠ لا تضع المعدات في ممر الجمهور\n⚠ Backup بعد كل ساعة\n⚠ لقطة واسعة كل 20 دقيقة\n⚠ راقب الإضاءة المتغيرة\n⚠ نسخة احتياطية قبل المغادرة", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 1000, y: 110, width: 250, height: 290, backgroundColor: "#ffffff", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 1020, y: 132, text: "TEAM", fontSize: 22, strokeColor: "#111318" },
  { type: "text", x: 1020, y: 185, text: "Director / Roy\nCamera A\nCamera B\nPhoto + Portrait\nAudio / BTS", fontSize: 17, strokeColor: "#20242a" },
  { type: "rectangle", x: 1000, y: 440, width: 250, height: 215, backgroundColor: "#fff1b3", strokeColor: "#22252b", fillStyle: "solid", strokeWidth: 2 },
  { type: "text", x: 1020, y: 462, text: "FIELD NOTE", fontSize: 19, strokeColor: "#111318" },
  { type: "text", x: 1020, y: 510, text: "أفضل نقطة تصوير:\nيمين المسرح\nخلف الجمهور قليلًا\nمع خط رؤية مفتوح.", fontSize: 17, strokeColor: "#20242a" },
]);

const cards = [
  ["01", "القيادة / Briefing", "قائمة اللقطات\nتوزيع الفريق\nالجدول الزمني\nنقطة التجمع", "yellow"],
  ["02", "المعدات", "Camera ×2 • 24–70 / 70–200\nLED ×2 • Wireless mics ×2\nTripods • Batteries ×6", "blue"],
  ["03", "STAGE", "افتتاح\nالمتحدث\nالجمهور\nلحظات التفاعل", "green"],
  ["04", "PORTRAIT", "Key light + fill\n5 دقائق / شخص\nVertical + Horizontal", "pink"],
  ["05", "INTERVIEW / BTS", "مقابلات قصيرة\nB-roll\nخلف الكواليس\nAmbient audio", "purple"],
  ["06", "LOGISTICS CHECKLIST", "☐ بطاريات مشحونة\n☐ بطاقات ذاكرة\n☐ شواحن / Power bank\n☐ تصاريح وعقود\n☐ مياه + First Aid", "paper"],
  ["07", "IMPORTANT NOTES", "⚠ لا تضع المعدات في ممر الجمهور\n⚠ Backup بعد كل ساعة\n⚠ لقطة واسعة كل 20 دقيقة\n⚠ راقب الإضاءة المتغيرة\n⚠ نسخة احتياطية قبل المغادرة", "accent"],
];

class CanvasBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.props.children;
  }
}

function PlanOverlay() {
  return (
    <div style={{
      position: "absolute",
      inset: "72px 14px 14px",
      overflow: "auto",
      pointerEvents: "none",
      zIndex: 2,
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "14px",
        border: "1px solid #262a31",
        borderRadius: 18,
        background: "rgba(247,246,241,.95)",
        boxShadow: "0 10px 35px rgba(0,0,0,.12)",
      }}>
        <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",marginBottom:14}}>
          <div>
            <div style={{fontWeight:900,letterSpacing:".08em",fontSize:"clamp(18px,4vw,30px)"}}>FIELD PRODUCTION PLAN</div>
            <div style={{color:"#555b63",fontWeight:600}}>مخطط ميداني لتصوير فعالية • Roy Whiteboard</div>
          </div>
          <div style={{border:"1px solid #262a31",padding:"7px 10px",borderRadius:999,fontSize:12,fontWeight:800,whiteSpace:"nowrap"}}>LIVE CANVAS</div>
        </div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,290px),1fr))",
          gap:12,
        }}>
          {cards.map(([num,title,body,tone]) => {
            const bg = {yellow:"#fff1b3",blue:"#dceeff",green:"#ddf4df",pink:"#ffe2e9",purple:"#ece8ff",paper:"#f8f7f2",accent:"#f2b33d"}[tone];
            return (
              <div key={num} style={{
                background:bg,
                border:"2px solid #22252b",
                borderRadius:14,
                padding:"14px 16px",
                minHeight:130,
                boxSizing:"border-box",
              }}>
                <div style={{fontSize:13,fontWeight:900,letterSpacing:".06em",marginBottom:5}}>{num} — {title}</div>
                <div style={{whiteSpace:"pre-line",lineHeight:1.5,fontSize:"clamp(14px,2.5vw,17px)",fontWeight:600}}>{body}</div>
              </div>
            );
          })}
          <div style={{background:"#fff",border:"2px solid #22252b",borderRadius:14,padding:"14px 16px",minHeight:130}}>
            <div style={{fontSize:13,fontWeight:900,letterSpacing:".06em",marginBottom:6}}>TEAM</div>
            <div style={{whiteSpace:"pre-line",lineHeight:1.55,fontSize:16,fontWeight:600}}>Director / Roy{"\n"}Camera A • Camera B{"\n"}Photo + Portrait{"\n"}Audio / BTS</div>
          </div>
          <div style={{background:"#fff1b3",border:"2px solid #22252b",borderRadius:14,padding:"14px 16px",minHeight:130}}>
            <div style={{fontSize:13,fontWeight:900,letterSpacing:".06em",marginBottom:6}}>FIELD NOTE</div>
            <div style={{whiteSpace:"pre-line",lineHeight:1.55,fontSize:16,fontWeight:600}}>أفضل نقطة تصوير:{"\n"}يمين المسرح{"\n"}خلف الجمهور قليلًا{"\n"}مع خط رؤية مفتوح.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const onReady = (api) => {
    api.updateScene({ elements: scene, appState: { viewBackgroundColor: "#f7f6f1" } });
    window.setTimeout(() => {
      const current = api.getSceneElements();
      if (current.length) {
        api.setViewport({ target: current, fit: "contain", animation: false });
      }
    }, 120);
  };

  return (
    <div style={{width:"100vw",height:"100vh",position:"relative",overflow:"hidden",background:"#f7f6f1"}}>
      <CanvasBoundary>
        <Excalidraw
          excalidrawAPI={onReady}
          initialData={{ appState:{ viewBackgroundColor:"#f7f6f1" }, files:{} }}
        />
      </CanvasBoundary>
      <PlanOverlay />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);

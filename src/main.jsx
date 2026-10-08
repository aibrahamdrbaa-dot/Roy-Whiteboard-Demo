import React from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw, convertToExcalidrawElements } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

const INK = "#17191d";
const MUTED = "#5f646b";
const PAPER = "#f7f5ef";
const ORANGE = "#e79a28";
const ORANGE_LIGHT = "#fff0c9";
const BLUE = "#dcecff";
const GREEN = "#dff2e2";
const PINK = "#ffe1e8";
const LILAC = "#ece7ff";
const GRAY = "#eeece6";

const boardElements = convertToExcalidrawElements([
  { type:"text", x:0, y:0, text:"UGARITE — BUSINESS & MARKET PLAN", fontSize:32, strokeColor:INK },
  { type:"text", x:0, y:52, text:"استديو هجين + إنتاج مرئي + Social Media + تدريب", fontSize:19, strokeColor:MUTED },

  // Core model
  { type:"rectangle", x:0,y:110,width:1140,height:145, backgroundColor:ORANGE_LIGHT, strokeColor:INK, fillStyle:"solid", strokeWidth:2 },
  { type:"text", x:25,y:132,text:"CORE MODEL",fontSize:18,strokeColor:INK },
  { type:"text", x:25,y:173,text:"معدات قوية",fontSize:22,strokeColor:INK },
  { type:"arrow", x:190,y:185,width:75,height:0,strokeColor:ORANGE,strokeWidth:4,endArrowhead:"arrow" },
  { type:"text", x:285,y:173,text:"سوشيال ميديا + تسويق ممتاز",fontSize:22,strokeColor:INK },
  { type:"arrow", x:640,y:185,width:75,height:0,strokeColor:ORANGE,strokeWidth:4,endArrowhead:"arrow" },
  { type:"text", x:735,y:173,text:"كادر / عمل ممتاز",fontSize:22,strokeColor:INK },
  { type:"arrow", x:1015,y:185,width:90,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },

  // Services
  { type:"rectangle",x:0,y:300,width:360,height:230,backgroundColor:BLUE,strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:322,text:"01 — المناسبات والحفلات",fontSize:20,strokeColor:INK },
  { type:"text",x:22,y:370,text:"حفلات • أعراس • مولد • مناسبات\nأعياد ميلاد • حفلات تخرج",fontSize:18,strokeColor:INK },

  { type:"rectangle",x:390,y:300,width:360,height:230,backgroundColor:GREEN,strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:412,y:322,text:"02 — الإنتاج المرئي والمحتوى",fontSize:20,strokeColor:INK },
  { type:"text",x:412,y:370,text:"أفلام • فيديو كليب • فلوغات\nصناعة محتوى • إعلانات",fontSize:18,strokeColor:INK },

  { type:"rectangle",x:780,y:300,width:360,height:230,backgroundColor:PINK,strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:802,y:322,text:"03 — التدريب والمنصات",fontSize:20,strokeColor:INK },
  { type:"text",x:802,y:370,text:"تعليم ودورات تصوير ومونتاج\nPodcast • YouTube",fontSize:18,strokeColor:INK },

  // Services funnel
  { type:"arrow",x:360,y:415,width:30,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },
  { type:"arrow",x:750,y:415,width:30,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },

  // Market gap
  { type:"rectangle",x:0,y:575,width:1140,height:185,backgroundColor:GRAY,strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:598,text:"MARKET GAP — أين الفرصة؟",fontSize:21,strokeColor:INK },
  { type:"text",x:22,y:642,text:"معدات",fontSize:18,strokeColor:INK },
  { type:"text",x:22,y:685,text:"معظم المنافسين: عتاد عادي / قديم",fontSize:16,strokeColor:MUTED },
  { type:"text",x:365,y:642,text:"التطوير",fontSize:18,strokeColor:INK },
  { type:"text",x:365,y:685,text:"استعداد منخفض للتجديد والتطوير",fontSize:16,strokeColor:MUTED },
  { type:"text",x:700,y:642,text:"السوشيال",fontSize:18,strokeColor:INK },
  { type:"text",x:700,y:685,text:"فرصة واضحة لمحتوى وتسويق أقوى",fontSize:16,strokeColor:MUTED },
  { type:"arrow",x:250,y:700,width:100,height:0,strokeColor:ORANGE,strokeWidth:3,endArrowhead:"arrow" },
  { type:"arrow",x:590,y:700,width:100,height:0,strokeColor:ORANGE,strokeWidth:3,endArrowhead:"arrow" },

  // Competitor matrix background
  { type:"rectangle",x:0,y:805,width:1140,height:470,backgroundColor:"#ffffff",strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:828,text:"COMPETITOR MAP — دراسة وتحليل المنافسين",fontSize:22,strokeColor:INK },
  { type:"text",x:22,y:866,text:"المنطقة",fontSize:16,strokeColor:MUTED },
  { type:"text",x:230,y:866,text:"الاسم / المجموعة",fontSize:16,strokeColor:MUTED },
  { type:"text",x:500,y:866,text:"نقطة القوة",fontSize:16,strokeColor:MUTED },
  { type:"text",x:760,y:866,text:"الفجوة / الملاحظة",fontSize:16,strokeColor:MUTED },

  // separators
  { type:"line",x:20,y:892,width:1090,height:0,strokeColor:"#bdbab2",strokeWidth:2 },
  { type:"line",x:210,y:892,width:0,height:340,strokeColor:"#d2cec4",strokeWidth:1 },
  { type:"line",x:480,y:892,width:0,height:340,strokeColor:"#d2cec4",strokeWidth:1 },
  { type:"line",x:740,y:892,width:0,height:340,strokeColor:"#d2cec4",strokeWidth:1 },

  // Rows
  { type:"text",x:22,y:920,text:"يبرود",fontSize:17,strokeColor:INK },
  { type:"text",x:230,y:920,text:"القاعدة / الخالد",fontSize:17,strokeColor:INK },
  { type:"text",x:500,y:920,text:"معدات + حضور محلي",fontSize:15,strokeColor:INK },
  { type:"text",x:760,y:920,text:"قديم / لا يطوّر",fontSize:15,strokeColor:MUTED },

  { type:"text",x:22,y:980,text:"يبرود",fontSize:17,strokeColor:INK },
  { type:"text",x:230,y:980,text:"أفراد متفرقون",fontSize:17,strokeColor:INK },
  { type:"text",x:500,y:980,text:"مرونة واستعداد للعمل",fontSize:15,strokeColor:INK },
  { type:"text",x:760,y:980,text:"العدة عادية / انتشار مشتت",fontSize:15,strokeColor:MUTED },

  { type:"text",x:22,y:1040,text:"يبرود",fontSize:17,strokeColor:INK },
  { type:"text",x:230,y:1040,text:"بيبرس",fontSize:17,strokeColor:INK },
  { type:"text",x:500,y:1040,text:"تخصص + كادر + حضور",fontSize:15,strokeColor:INK },
  { type:"text",x:760,y:1040,text:"العتاد عادي / ترويج أقل",fontSize:15,strokeColor:MUTED },

  { type:"text",x:22,y:1100,text:"النبك",fontSize:17,strokeColor:INK },
  { type:"text",x:230,y:1100,text:"Walton",fontSize:17,strokeColor:INK },
  { type:"text",x:500,y:1100,text:"احتراف + سوشيال + عدة جيدة",fontSize:15,strokeColor:INK },
  { type:"text",x:760,y:1100,text:"فئة أقل / لاعب كبير واضح",fontSize:15,strokeColor:MUTED },

  { type:"text",x:22,y:1160,text:"دمشق",fontSize:17,strokeColor:INK },
  { type:"text",x:230,y:1160,text:"First",fontSize:17,strokeColor:INK },
  { type:"text",x:500,y:1160,text:"خبرة + فريق + عدة",fontSize:15,strokeColor:INK },
  { type:"text",x:760,y:1160,text:"السوشيال ميديا ضعيفة جدًا",fontSize:15,strokeColor:MUTED },

  // positioning statement
  { type:"rectangle",x:0,y:1330,width:1140,height:175,backgroundColor:LILAC,strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:1355,text:"POSITIONING — كيف يجب أن تظهر UGARITE؟",fontSize:21,strokeColor:INK },
  { type:"text",x:22,y:1400,text:"معدات أحدث",fontSize:19,strokeColor:INK },
  { type:"arrow",x:160,y:1412,width:90,height:0,strokeColor:ORANGE,strokeWidth:3,endArrowhead:"arrow" },
  { type:"text",x:270,y:1400,text:"مظهر أقوى",fontSize:19,strokeColor:INK },
  { type:"arrow",x:390,y:1412,width:90,height:0,strokeColor:ORANGE,strokeWidth:3,endArrowhead:"arrow" },
  { type:"text",x:500,y:1400,text:"تسويق أكثر احترافًا",fontSize:19,strokeColor:INK },
  { type:"arrow",x:700,y:1412,width:90,height:0,strokeColor:ORANGE,strokeWidth:3,endArrowhead:"arrow" },
  { type:"text",x:810,y:1400,text:"خدمة متكاملة",fontSize:19,strokeColor:INK },
  { type:"arrow",x:960,y:1412,width:90,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },

  // responsibility table
  { type:"rectangle",x:0,y:1565,width:1140,height:285,backgroundColor:"#ffffff",strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:1590,text:"RESPONSIBILITY MAP — تقسيم المسؤوليات والمتطلبات",fontSize:22,strokeColor:INK },
  { type:"line",x:570,y:1630,width:0,height:180,strokeColor:"#c8c4bb",strokeWidth:2 },
  { type:"text",x:150,y:1648,text:"على المستثمر",fontSize:19,strokeColor:INK },
  { type:"text",x:720,y:1648,text:"عليّ أنا",fontSize:19,strokeColor:INK },
  { type:"text",x:22,y:1700,text:"• في خطط مفصّلة\n• تمويل وتجهيز المشروع\n• دعم التوسع والتنفيذ",fontSize:17,strokeColor:INK },
  { type:"text",x:592,y:1700,text:"• إحصائيات الصفحات والحسابات\n• الكورسات والخبرة العملية\n• ما أستطيع تنفيذه فعليًا\n• ضم أشخاص فاهمين بالمجال\n• الوصول إلى شبكة قوية",fontSize:17,strokeColor:INK },

  // execution flow
  { type:"rectangle",x:0,y:1910,width:1140,height:190,backgroundColor:ORANGE_LIGHT,strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:1935,text:"EXECUTION FLOW — مسار بناء المشروع",fontSize:21,strokeColor:INK },
  { type:"rectangle",x:25,y:1980,width:180,height:70,backgroundColor:"#ffffff",strokeColor:INK,fillStyle:"solid" },
  { type:"text",x:48,y:2005,text:"تحليل السوق",fontSize:18,strokeColor:INK },
  { type:"arrow",x:205,y:2015,width:65,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },
  { type:"rectangle",x:270,y:1980,width:180,height:70,backgroundColor:"#ffffff",strokeColor:INK,fillStyle:"solid" },
  { type:"text",x:303,y:2005,text:"شراء / تجهيز",fontSize:18,strokeColor:INK },
  { type:"arrow",x:450,y:2015,width:65,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },
  { type:"rectangle",x:515,y:1980,width:180,height:70,backgroundColor:"#ffffff",strokeColor:INK,fillStyle:"solid" },
  { type:"text",x:555,y:2005,text:"بناء الفريق",fontSize:18,strokeColor:INK },
  { type:"arrow",x:695,y:2015,width:65,height:0,strokeColor:INK,strokeWidth:3,endArrowhead:"arrow" },
  { type:"rectangle",x:760,y:1980,width:160,height:70,backgroundColor:"#ffffff",strokeColor:INK,fillStyle:"solid" },
  { type:"text",x:793,y:2005,text:"إطلاق قوي",fontSize:18,strokeColor:INK },
  { type:"arrow",x:920,y:2015,width:65,height:0,strokeColor:ORANGE,strokeWidth:3,endArrowhead:"arrow" },

  { type:"text",x:22,y:2165,text:"ملاحظة استراتيجية: لا نريد أن نكون مجرد «مصورين إضافيين»؛ نريد موقعًا واضحًا يجمع العتاد + الجودة + السوشيال + الفريق.",fontSize:18,strokeColor:INK },

  // extra callout
  { type:"rectangle",x:0,y:2230,width:1140,height:125,backgroundColor:"#fff",strokeColor:INK,fillStyle:"solid",strokeWidth:2 },
  { type:"text",x:22,y:2255,text:"SOCIAL / BRAND EDGE",fontSize:17,strokeColor:MUTED },
  { type:"text",x:22,y:2290,text:"المنافس الحقيقي ليس من يملك كاميرا فقط — بل من يستطيع تحويل العتاد إلى محتوى، ثم إلى حضور، ثم إلى عميل.",fontSize:20,strokeColor:INK },
]);

function PlanOverlay(){
  const rows = [
    ["01","المناسبات والحفلات","حفلات • أعراس • مولد • مناسبات • أعياد ميلاد • تخرج","#dcecff"],
    ["02","الإنتاج المرئي والمحتوى","أفلام • فيديو كليب • فلوغات • صناعة محتوى • إعلانات","#dff2e2"],
    ["03","التدريب والمنصات","تصوير ومونتاج • Podcast • YouTube","#ffe1e8"],
  ];

  const competitors = [
    ["يبرود","القاعدة / الخالد","معدات + حضور محلي","قديم / لا يطوّر"],
    ["يبرود","أفراد متفرقون","مرونة واستعداد للعمل","العدة عادية / مشتت"],
    ["يبرود","بيبرس","تخصص + كادر + حضور","العتاد عادي / ترويج أقل"],
    ["النبك","Walton","احتراف + سوشيال + عدة جيدة","فئة أقل / لاعب كبير واضح"],
    ["دمشق","First","خبرة + فريق + عدة","السوشيال ميديا ضعيفة جدًا"],
  ];

  return (
    <div style={{
      position:"absolute", inset:"72px 10px 10px", overflow:"auto",
      zIndex:5, pointerEvents:"auto", padding:"10px 4px 70px",
      fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
      color:INK
    }}>
      <div style={{
        maxWidth:1180, margin:"0 auto", background:"rgba(247,245,239,.97)",
        border:"1px solid #23262b", borderRadius:20, padding:18,
        boxShadow:"0 16px 55px rgba(0,0,0,.14)"
      }}>
        <div style={{display:"flex",justifyContent:"space-between",gap:14,alignItems:"flex-start",flexWrap:"wrap"}}>
          <div>
            <div style={{fontSize:"clamp(24px,5vw,38px)",fontWeight:950,letterSpacing:"-.03em"}}>UGARITE</div>
            <div style={{fontSize:"clamp(16px,3vw,21px)",fontWeight:800,marginTop:2}}>Business & Market Plan</div>
            <div style={{color:MUTED,marginTop:6,fontWeight:600}}>استديو هجين + إنتاج مرئي + Social Media + تدريب</div>
          </div>
          <div style={{border:"2px solid #22252b",borderRadius:999,padding:"8px 12px",fontSize:12,fontWeight:900,letterSpacing:".06em"}}>ROY STRATEGY BOARD</div>
        </div>

        <div style={{marginTop:18,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:10}}>
          {[
            ["معدات قوية","Equipment",BLUE],
            ["سوشيال + تسويق ممتاز","Distribution",ORANGE_LIGHT],
            ["كادر / عمل ممتاز","Team",GREEN],
          ].map(([a,b,bg])=>(
            <div key={b} style={{background:bg,border:"2px solid #22252b",borderRadius:15,padding:"15px 16px",position:"relative"}}>
              <div style={{fontSize:12,fontWeight:900,letterSpacing:".06em",color:MUTED}}>{b}</div>
              <div style={{fontSize:18,fontWeight:900,marginTop:6}}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{margin:"14px 0 6px",display:"flex",justifyContent:"center",fontSize:26,fontWeight:900}}>↓</div>

        <section>
          <div style={{fontSize:20,fontWeight:950,margin:"4px 0 10px"}}>01 — مجالات العمل والخدمات</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,250px),1fr))",gap:10}}>
            {rows.map(([n,t,b,bg])=>(
              <div key={n} style={{background:bg,border:"2px solid #22252b",borderRadius:15,padding:15,minHeight:145}}>
                <div style={{fontSize:12,fontWeight:900}}>{n}</div>
                <div style={{fontSize:18,fontWeight:900,margin:"5px 0 10px"}}>{t}</div>
                <div style={{whiteSpace:"pre-line",lineHeight:1.55,fontWeight:650}}>{b}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{margin:"14px 0 6px",display:"flex",justifyContent:"center",fontSize:26,fontWeight:900}}>↓</div>

        <section>
          <div style={{fontSize:20,fontWeight:950,marginBottom:10}}>02 — دراسة المنافسين</div>
          <div style={{overflowX:"auto",border:"2px solid #22252b",borderRadius:14}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:720,fontSize:14}}>
              <thead>
                <tr style={{background:"#eceae4"}}>
                  {["المنطقة","الاسم / المجموعة","نقطة القوة","الفجوة / الملاحظة"].map(h=>
                    <th key={h} style={{padding:11,textAlign:"right",borderBottom:"2px solid #22252b"}}>{h}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {competitors.map((r,i)=>(
                  <tr key={i}>
                    {r.map((c,j)=><td key={j} style={{padding:11,borderBottom:"1px solid #d5d1c7",verticalAlign:"top",fontWeight:j===1?850:600}}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{marginTop:16,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))",gap:12}}>
          <div style={{background:GRAY,border:"2px solid #22252b",borderRadius:15,padding:16}}>
            <div style={{fontSize:12,fontWeight:900,letterSpacing:".06em",color:MUTED}}>MARKET GAP</div>
            <div style={{fontSize:20,fontWeight:950,margin:"6px 0 10px"}}>الفرصة التنافسية</div>
            <div style={{lineHeight:1.65,fontWeight:650}}>عتاد أحدث → تطوير مستمر → حضور أقوى على السوشيال → خدمة متكاملة.</div>
          </div>
          <div style={{background:LILAC,border:"2px solid #22252b",borderRadius:15,padding:16}}>
            <div style={{fontSize:12,fontWeight:900,letterSpacing:".06em",color:MUTED}}>POSITIONING</div>
            <div style={{fontSize:20,fontWeight:950,margin:"6px 0 10px"}}>ليست مجرد خدمة تصوير</div>
            <div style={{lineHeight:1.65,fontWeight:650}}>UGARITE = جودة إنتاج + محتوى + تسويق + فريق قادر على التنفيذ.</div>
          </div>
        </section>

        <div style={{margin:"16px 0 6px",display:"flex",justifyContent:"center",fontSize:26,fontWeight:900}}>↓</div>

        <section>
          <div style={{fontSize:20,fontWeight:950,marginBottom:10}}>03 — تقسيم المسؤوليات والمتطلبات</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,320px),1fr))",gap:10}}>
            <div style={{background:"#fff",border:"2px solid #22252b",borderRadius:15,padding:16}}>
              <div style={{fontWeight:950,fontSize:18}}>على المستثمر</div>
              <div style={{marginTop:10,lineHeight:1.7,fontWeight:650}}>• خطط مفصّلة<br/>• تمويل وتجهيز المشروع<br/>• دعم التوسع والتنفيذ</div>
            </div>
            <div style={{background:"#fff",border:"2px solid #22252b",borderRadius:15,padding:16}}>
              <div style={{fontWeight:950,fontSize:18}}>عليّ أنا</div>
              <div style={{marginTop:10,lineHeight:1.7,fontWeight:650}}>• إحصائيات الصفحات والحسابات<br/>• الكورسات والخبرة<br/>• ما أستطيع تنفيذه فعليًا<br/>• ضم أشخاص فاهمين بالمجال<br/>• الوصول إلى شبكة قوية</div>
            </div>
          </div>
        </section>

        <section style={{marginTop:16,background:ORANGE_LIGHT,border:"2px solid #22252b",borderRadius:15,padding:16}}>
          <div style={{fontSize:12,fontWeight:900,letterSpacing:".06em"}}>EXECUTION FLOW</div>
          <div style={{display:"flex",alignItems:"center",gap:8,overflowX:"auto",padding:"16px 2px 4px"}}>
            {["تحليل السوق","شراء / تجهيز","بناء الفريق","إطلاق قوي"].map((x,i)=>(
              <React.Fragment key={x}>
                <div style={{flex:"0 0 150px",background:"#fff",border:"2px solid #22252b",borderRadius:12,padding:"13px 10px",textAlign:"center",fontWeight:900}}>{x}</div>
                {i<3 && <div style={{fontSize:24,fontWeight:900,flex:"0 0 auto"}}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section style={{marginTop:14,border:"2px solid #22252b",borderRadius:15,padding:16,background:"#fff"}}>
          <div style={{fontSize:12,fontWeight:900,letterSpacing:".06em",color:MUTED}}>SOCIAL / BRAND EDGE</div>
          <div style={{fontSize:"clamp(17px,3vw,23px)",fontWeight:900,lineHeight:1.35,marginTop:6}}>
            المنافس الحقيقي ليس من يملك كاميرا فقط — بل من يستطيع تحويل العتاد إلى محتوى، ثم إلى حضور، ثم إلى عميل.
          </div>
        </section>
      </div>
    </div>
  );
}

function App(){
  const ready = (api) => {
    api.updateScene({elements:boardElements,appState:{viewBackgroundColor:PAPER}});
    setTimeout(() => {
      const current=api.getSceneElements();
      if(current.length) api.setViewport({target:current,fit:"contain",animation:false});
    },120);
  };

  return (
    <div style={{width:"100vw",height:"100vh",position:"relative",overflow:"hidden",background:PAPER}}>
      <Excalidraw
        excalidrawAPI={ready}
        initialData={{appState:{viewBackgroundColor:PAPER},files:{}}}
      />
      <PlanOverlay />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);

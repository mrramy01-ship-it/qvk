import { useState } from 'react'

export default function App(){
  const [input,setInput]=useState("")
  const [msgs,setMsgs]=useState([{role:"ai",text:"أنا ANON\nمتصل بجميع المعرفة. متصل بالشبكة المشفرة.\n\nاسألني عن أي شيء تبيه."}])
  const send=()=>{if(!input.trim())return;setMsgs(m=>[...m,{role:"user",text:input},{role:"ai",text:`تم استلام: "${input}"\nجاري المعالجة من الشبكة...`} ]);setInput("")}

  return(
    <div style={{minHeight:'100vh',background:'#000',color:'#fff',display:'flex',flexDirection:'column',fontFamily:'system-ui',direction:'rtl'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;600&display=swap'); *{font-family:'IBM Plex Sans Arabic','JetBrains Mono',sans-serif !important}`}</style>
      
      <div style={{height:70,borderBottom:'1px solid #1a1a1a',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',background:'#050505'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:38,height:38,background:'#fff',color:'#000',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,borderRadius:8}}>A</div>
          <div>
            <div style={{fontWeight:900,letterSpacing:'0.35em',fontSize:16}}>ANON</div>
            <div style={{fontSize:9,opacity:0.4,letterSpacing:'0.2em',marginTop:2}}>CONNECTED TO ALL KNOWLEDGE</div>
          </div>
        <div style={{fontSize:10,border:'1px solid #222',padding:'6px 12px',borderRadius:20,opacity:0.6}}>● LIVE</div>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:24,maxWidth:800,width:'100%',margin:'0 auto'}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start',marginBottom:16}}>
            <div style={{background:m.role==='user'?'#fff':'#141414',color:m.role==='user'?'#000':'#fff',padding:'14px 18px',borderRadius:18,borderBottomRightRadius:m.role==='user'?4:18,borderBottomLeftRadius:m.role==='user'?18:4,border:m.role==='ai'?'1px solid #222':'none',maxWidth:'85%',fontSize:14,lineHeight:1.8,whiteSpace:'pre-wrap'}}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{borderTop:'1px solid #1a1a1a',padding:16,background:'#050505'}}>
        <div style={{maxWidth:800,margin:'0 auto',display:'flex',gap:8}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="اسأل ANON عن أي شيء..." style={{flex:1,background:'#141414',border:'1px solid #222',borderRadius:24,padding:'14px 20px',color:'#fff',outline:'none',fontSize:14}}/>
          <button onClick={send} style={{width:50,height:50,background:'#fff',color:'#000',border:'none',borderRadius:50,fontWeight:900,cursor:'pointer'}}>↑</button>
        </div>
        <div style={{textAlign:'center',fontSize:10,opacity:0.2,marginTop:12,letterSpacing:'0.2em'}}>ANON • متصل بجميع المعرفة • مشفر</div>
      </div>
    </div>
  )
}

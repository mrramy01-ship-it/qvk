import { useState } from 'react'
export default function App(){
  const [input,setInput]=useState("")
  const [msgs,setMsgs]=useState([{role:"ai",text:"ANON OS v4 - متصل بجميع المعرفة\n\nأنا العين التي ترى كل شيء.\nاسأل عن أي شيء تبيه."}])
  const send=()=>{
    if(!input.trim()) return
    setMsgs(m=>[...m,{role:"user",text:input},{role:"ai",text:"[ANON] تم استلام: "+input}])
    setInput("")
  }
  return(
    <div style={{minHeight:'100vh',background:'#050507',color:'#fff',display:'flex',flexDirection:'column'}}>
      <div style={{height:64,borderBottom:'1px solid #1e1e22',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 20px',background:'#0a0a0e'}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{width:32,height:32,background:'#fff',color:'#000',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,borderRadius:8,fontSize:14}}>A</div>
          <div style={{fontWeight:900,letterSpacing:4,fontSize:14}}>ANON</div>
        </div>
        <div style={{fontSize:10,background:'#111',border:'1px solid #222',padding:'4px 10px',borderRadius:20}}>● LIVE</div>
      </div>

      <div style={{flex:1,overflowY:'auto',padding:20}}>
        <div style={{maxWidth:700,margin:'0 auto'}}>
          {msgs.map((m,i)=>(
            <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start',marginBottom:12}}>
              <div style={{background:m.role==='user'?'#fff':'#15151a',color:m.role==='user'?'#000':'#eee',padding:'12px 16px',borderRadius:16,border:'1px solid #222',maxWidth:'80%',fontSize:14,lineHeight:1.7,whiteSpace:'pre-wrap'}}>{m.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{borderTop:'1px solid #1e1e22',padding:12,background:'#0a0a0e'}}>
        <div style={{maxWidth:700,margin:'0 auto',display:'flex',gap:8}}>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="اسأل ANON..." style={{flex:1,background:'#15151a',border:'1px solid #222',borderRadius:24,padding:'12px 18px',color:'#fff',outline:'none',fontSize:14}}/>
          <button onClick={send} style={{width:44,height:44,background:'#fff',color:'#000',border:'none',borderRadius:22,fontWeight:900,cursor:'pointer'}}>↑</button>
        </div>
      </div>
    </div>
  )
}

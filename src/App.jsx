import { useState } from 'react'
export default function App(){
  const [input,setInput]=useState("")
  const [msgs,setMsgs]=useState([{role:"ai",text:"ANON OS v2.1 - متصل بكل المعرفة.\nاسأل ما تشاء."}])
  const send=()=>{if(!input.trim())return;setMsgs(m=>[...m,{role:"user",text:input},{role:"ai",text:`ANON يبحث عن: ${input}`} ]);setInput("")}
  return(
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="h-[70px] border-b border-white/10 flex items-center px-6 justify-between bg-black/50 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white text-black font-black flex items-center justify-center">A</div>
          <div><div className="font-black tracking-[0.4em]">ANON</div><div className="text-[9px] text-white/40 tracking-widest -mt-1">CONNECTED TO ALL KNOWLEDGE</div></div>
        </div>
        <div className="text-[10px] border border-white/10 px-3 py-1 rounded-full">● LIVE</div>
      </div>
      <div className="flex-1 overflow-auto max-w-3xl mx-auto w-full p-6 space-y-4">
        {msgs.map((m,i)=><div key={i} className={`flex ${m.role==='user'?'justify-end':''}`}><div className={`px-5 py-3 rounded-2xl max-w-[80%] text-[14px] ${m.role==='user'?'bg-white text-black rounded-br-sm':'bg-[#15151A] border border-white/10'}`}>{m.text}</div></div>)}
      </div>
      <div className="p-4 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="اسأل ANON..." className="flex-1 bg-[#111] border border-white/10 rounded-full px-5 py-3 outline-none text-[14px]"/>
          <button onClick={send} className="bg-white text-black w-12 h-12 rounded-full font-bold">↑</button>
        </div>
      </div>
    </div>
  )
}

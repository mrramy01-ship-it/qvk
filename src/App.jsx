import { useState } from 'react'

export default function App(){
  const [input,setInput]=useState("")
  const [msgs,setMsgs]=useState([
    {role:"ai", text:"أنا ANON — العين التي ترى كل شيء\nمتصل بجميع المعرفة. اسألني عن أي شيء وسأجلب لك الجواب من عمق الشبكة."}
  ])
  const send=()=>{
    if(!input.trim()) return
    setMsgs(m=>[...m,{role:"user",text:input},{role:"ai",text:`ANON يعالج: "${input}"`}])
    setInput("")
  }
  return(
    <div className="min-h-screen bg-[#08080A] text-white flex flex-col">
      <div className="h-[65px] border-b border-white/10 flex items-center px-6 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white text-black font-black flex items-center justify-center">A</div>
          <div className="leading-none">
            <div className="font-black tracking-[0.25em] text-[16px]">ANON</div>
            <div className="text-[9px] tracking-[0.2em] text-white/40 mt-1">CONNECTED TO ALL KNOWLEDGE</div>
          </div>
        </div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399] animate-pulse"/>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto p-6 space-y-5">
          {msgs.map((m,i)=>(
            <div key={i} className={`flex ${m.role==='user'?'justify-end':'justify-start'}`}>
              <div className={`px-5 py-3.5 rounded-2xl max-w-[85%] text-[14.5px] leading-7 whitespace-pre-wrap ${m.role==='user'?'bg-white text-black rounded-br-sm':'bg-[#15151A] border border-white/10 rounded-bl-sm'}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 p-4 bg-black/40 backdrop-blur">
        <div className="max-w-3xl mx-auto flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="اسأل ANON عن أي شيء..." className="flex-1 bg-[#15151A] border border-white/10 rounded-2xl px-5 py-3.5 outline-none focus:border-white/20 text-[14px]"/>
          <button onClick={send} className="bg-white text-black w-12 h-12 rounded-2xl font-bold">↑</button>
        </div>
        <div className="text-center text-[10px] text-white/20 mt-3">ANON • متصل بجميع المعرفة • مشفر بالكامل</div>
      </div>
    </div>
  )
}

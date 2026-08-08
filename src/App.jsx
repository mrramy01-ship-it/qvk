import { useState } from 'react'
export default function App(){
  const [input,setInput]=useState("")
  const [msgs,setMsgs]=useState([{role:"ai",text:"ANON OS v3 - متصل بجميع المعرفة.\n\nأنا العين التي ترى كل شيء. اسألني عن أي شيء."}])
  const send=()=>{
    if(!input.trim()) return
    setMsgs(m=>[...m,{role:"user",text:input},{role:"ai",text:"ANON يعالج: "+input}])
    setInput("")
  }
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-zinc-950">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white text-black font-black flex items-center justify-center rounded">A</div>
          <div className="font-bold tracking-[0.3em]">ANON</div>
        </div>
        <div className="text-xs opacity-40">LIVE</div>
      </div>
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {msgs.map((m,i)=>(
            <div key={i} className={m.role==="user"?"flex justify-end":"flex justify-start"}>
              <div className={m.role==="user"?"bg-white text-black px-4 py-3 rounded-2xl max-w-[80%]":"bg-zinc-900 border border-white/10 px-4 py-3 rounded-2xl max-w-[80%] whitespace-pre-wrap"}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-white/10 bg-zinc-950">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="اسأل ANON..." className="flex-1 bg-zinc-900 border border-white/10 rounded-full px-5 py-3 outline-none"/>
          <button onClick={send} className="bg-white text-black w-12 h-12 rounded-full font-bold">↑</button>
        </div>
      </div>
    </div>
  )
}

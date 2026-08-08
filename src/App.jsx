import { useState } from 'react'

export default function App(){
  const [input,setInput]=useState("")
  const [msgs,setMsgs]=useState([
    {role:"ai", text:"أنا ANON — العين التي ترى كل شيء، متصل بجميع المعرفة. اسأل ما تشاء، سأجلب لك الجواب من عمق الشبكة."}
  ])

  const send = () => {
    if(!input.trim()) return
    const q=input
    setMsgs(m=>[...m, {role:"user", text:q}, {role:"ai", text:`ANON يبحث في الشبكة عن: "${q}"... [سيتم ربط الذكاء الحقيقي قريبا]`}])
    setInput("")
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#050507] text-white flex flex-col font-sans">
      {/* Header */}
      <div className="border-b border-white/10 p-4 flex items-center justify-between backdrop-blur-xl bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-zinc-500 flex items-center justify-center font-black text-black">A</div>
          <div>
            <div className="font-black tracking-[0.3em] text-[18px]">ANON</div>
            <div className="text-[10px] tracking-widest text-white/40 -mt-1">CONNECTED TO ALL KNOWLEDGE</div>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399] animate-pulse"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 md:p-8 space-y-6 max-w-4xl w-full mx-auto">
        {msgs.map((msg,i)=>(
          <div key={i} className={`flex ${msg.role==="user"? "justify-end" : "justify-start"}`}>
            <div className={`${msg.role==="user"? "bg-white text-black rounded-[20px] rounded-br-[4px]" : "bg-white/[0.06] border border-white/10 rounded-[20px] rounded-bl-[4px] backdrop-blur"} px-5 py-4 max-w-[85%] text-[15px] leading-relaxed`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter" && send()}
            placeholder="اسأل ANON عن أي شيء..."
            className="flex-1 bg-white/[0.07] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/20 focus:bg-white/[0.09] transition-all placeholder:text-white/30"
          />
          <button onClick={send} className="bg-white text-black w-[56px] h-[56px] rounded-2xl font-black hover:bg-zinc-200 transition-all active:scale-95">
            ↑
          </button>
        </div>
        <div className="text-center text-[10px] text-white/20 mt-3 tracking-widest">ANON • متصل بجميع المعرفة • مشفر بالكامل</div>
      </div>
    </div>
  )
}

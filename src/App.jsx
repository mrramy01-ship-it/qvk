import { useState } from 'react'

export default function App(){
  const [p,setP]=useState("")
  const [m,setM]=useState([{role:"ai",text:"هلا والله 👋 انا QVK AI - مساعدك الذكي! وش تبي اسوي لك اليوم؟"}])

  const send = () => {
    if(!p.trim()) return
    setM([...m, {role:"user", text:p}, {role:"ai", text:"تم استلام: "+p}])
    setP("")
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {m.map((msg,i)=>(
          <div key={i} className={msg.role=="ai" ? "bg-white/10 p-3 rounded-xl" : "bg-blue-600 p-3 rounded-xl ml-auto max-w-[80%]"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input 
            value={p} 
            onChange={e=>setP(e.target.value)}
            onKeyDown={e=>e.key=="Enter" && send()}
            placeholder="اكتب رسالتك..." 
            className="flex-1 bg-white/10 rounded-xl px-4 py-3 outline-none"
          />
          <button onClick={send} className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            ارسال
          </button>
        </div>
      </div>
    </div>
  )
}

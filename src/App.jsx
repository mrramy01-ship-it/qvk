import { useState } from 'react'
export default function App(){
const [p,setP]=useState("")
const [m,setM]=useState([{role:"ai",text:"هلا والله 👋 أنا QVK AI - مساعدك الذكي. وش تبي اسوي اليوم؟"}])
const send=()=>{if(!p.trim())return;setM([...m,{role:"user",text:p},{role:"ai",text:"🔥 تم! موقع QVK AI شغال بنجاح! قريبا بنربط الذكاء الاصطناعي الحقيقي"}]);setP("")}
return(<div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
<header className="border-b border-white/10 p-4 flex justify-between items-center">
<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-black">Q</div><span className="font-bold">QVK.AI</span></div><div className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">● Live</div></header>
<div className="flex-1 overflow-auto p-6 space-y-3 max-w-3xl w-full mx-auto">{m.map((x,i)=><div key={i} className={`flex ${x.role==='user'?'justify-end':'justify-start'}`}><div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${x.role==='user'?'bg-violet-600':'bg-white/5 border border-white/10'}`}>{x.text}</div></div>)}</div>
<div className="p-4 border-t border-white/10"><div className

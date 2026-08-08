import { useState } from 'react'
export default function App() {
  const [msg, setMsg] = useState('')
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)
  async function send() {
    if(!msg) return
    setChat([...chat, { role: 'user', text: msg }])
    setLoading(true)
    const res = await fetch('/api/chat', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ message: msg }) })
    const data = await res.json()
    setChat(c => [...c, { role: 'ai', text: data.reply }])
    setMsg(''); setLoading(false)
  }
  return (
    <div style={{maxWidth:600,margin:'40px auto',fontFamily:'sans-serif'}}>
      <h1>QvK AI 🤖</h1>
      <div style={{border:'1px solid #333',minHeight:400,padding:10,borderRadius:10,background:'#111',color:'#fff'}}>
        {chat.map((m,i)=><div key={i} style={{margin:10,textAlign: m.role==='user'?'right':'left'}}><b>{m.role==='user'?'انت: ':'QvK: '}</b>{m.text}</div>)}
        {loading && <div>يكتب...</div>}
      </div>
      <div style={{display:'flex',gap:10,marginTop:10}}>
        <input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="اكتب رسالتك..." style={{flex:1,padding:10,borderRadius:8}} />
        <button onClick={send} style={{padding:'10px 20px',borderRadius:8,background:'#6c5cff',color:'#fff',border:0}}>ارسال</button>
      </div>
    </div>
  )
}
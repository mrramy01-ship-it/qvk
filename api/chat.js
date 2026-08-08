export default async function handler(req,res){
  const {message}=req.body
  const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{
    method:"POST",
    headers:{"Authorization":"Bearer "+process.env.GROQ_API_KEY,"Content-Type":"application/json"},
    body:JSON.stringify({
      model:"llama-3.3-70b-versatile",
      messages:[
        {role:"system",content:"You are ANON AI. Reply same language as user."},
        {role:"user",content:message}
      ]
    })
  })
  const data=await r.json()
  res.json({reply:data.choices[0].message.content})
}
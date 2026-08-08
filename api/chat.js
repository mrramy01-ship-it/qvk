export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method!== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'No message' });
  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'system', content: 'You are QvK AI. Answer in Arabic, friendly.' }, { role: 'user', content: message }] })
    });
    const data = await r.json();
    const reply = data.choices?.[0]?.message?.content || 'ما وصل رد';
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
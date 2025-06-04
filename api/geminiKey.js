export default function handler(req, res) {
  const allowedOrigins = [
    'https://www.buba2.co',
    'https://buba2.co',
    'https://barely-unofficial-barts-ani-list-2.vercel.app'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  res.status(200).json({ key });
}

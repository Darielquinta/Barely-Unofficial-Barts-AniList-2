export default function handler(req, res) {
  // Allow requests from the production GitHub Pages domain
  res.setHeader("Access-Control-Allow-Origin", "https://buba2.co");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  res.status(200).json({ key });
}

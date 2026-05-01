export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');

  try {
    const r = await fetch(
      'https://api.stocktwits.com/api/2/trending/symbols/equities.json?limit=30',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

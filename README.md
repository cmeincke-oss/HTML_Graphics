# Stocktwits Ticker — Lower Third

Broadcast-ready HTML5 lower third for vMix / OBS browser source.

## Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel deploy
```

### Option B: Vercel Dashboard
1. Go to vercel.com → New Project
2. Import this folder (or drag & drop)
3. Deploy — no build settings needed

## After Deploying

1. Copy your Vercel URL (e.g. `https://stocktwits-ticker.vercel.app`)
2. In vMix: Add Input → Browser → paste URL → set 1920x1080
3. In OBS: Add Source → Browser → paste URL → set 1920x1080

## ⚠️ Important Note on Widget Domain

The Stocktwits widget loader (`widgets-api.stocktwits-cdn.com/loader.js`)
may require your domain to be allowlisted by Stocktwits.

If the widget still doesn't render after deploying:
- Contact your Stocktwits account team and provide your Vercel domain
- Ask them to add it to the widget allowlist

## Switching to Transparent Background

Once the widget is confirmed working, open `index.html` and change:
```css
background: #1a1a1a;
```
to:
```css
background: transparent;
```
Then redeploy. vMix/OBS will handle all compositing.

## Widget Config

Current settings in `index.html`:
- `animated: true` — scrolling ticker animation
- `assetClass: equity` — US equities
- `colorTheme: light` — light background ticker
- `quantity: 20` — number of tickers shown
- `sparklines: true` — mini price charts
- `transparent: true` — no widget background

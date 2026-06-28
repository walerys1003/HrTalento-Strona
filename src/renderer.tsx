import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="pl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>HR Talento Group — Talent infrastructure dla branż, które nie mają czasu</title>
        <meta
          name="description"
          content="HR Talento Group — polski AI-first ekosystem rekrutacyjny. Cztery wertykalne portale (MedTalento, TSLTalento, DevTalento, HoReCaTalento) i jeden silnik AI Patch Engine v3. Launch Q1 2027."
        />
        <meta name="theme-color" content="#0A0A0B" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23F4F1EA'/%3E%3Ctext x='50' y='44' font-family='monospace' font-size='34' font-weight='700' text-anchor='middle' fill='%230A0A0B'%3EHR%3C/text%3E%3Ctext x='50' y='80' font-family='monospace' font-size='34' font-weight='700' text-anchor='middle' fill='%230A0A0B'%3ET%3C/text%3E%3C/svg%3E"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:title" content="HR Talento Group — AI-first ekosystem rekrutacyjny" />
        <meta
          property="og:description"
          content="4 portale rekrutacyjne, 4 branże w kryzysie, jeden silnik AI. Launch Q1 2027."
        />
        <meta property="og:image" content="/static/assets/medtalento.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        {/* Preload LCP image (founder portrait, WebP) for instant paint */}
        <link
          rel="preload"
          as="image"
          href="/static/assets/tomasz-kotlinski.webp"
          type="image/webp"
          fetchpriority="high"
        />
        {/* Non-blocking font load: preload stylesheet, apply on load */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&family=Inter+Tight:wght@300;400;500;600;700;800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&family=Inter+Tight:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})

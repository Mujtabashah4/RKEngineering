# RK Engineering — Deployment Guide

**Domain:** `rkengineering.pk`
**Hosting:** Vercel (Free Tier)
**Last Updated:** 2026-03-27

---

## ⚠️ ONE THING YOU MUST DO BEFORE GOING LIVE

### Create `og-image.png` (Missing — Social Sharing is Broken Without It)

The file `public/og-image.png` is referenced in `index.html` for Facebook, Twitter, LinkedIn previews — **but it doesn't exist yet**. Without it, social media shares show no preview image.

**How to create it:**
1. Open [Canva](https://canva.com) (free)
2. Create a new design → custom size → **1200 × 630 px**
3. Add your logo, "RK Engineering" text, tagline ("Agricultural Machinery Manufacturing"), and a machinery photo
4. Use the brand colors: dark green `#1a5c3a` and gold `#D4A017`
5. Export as PNG → rename to `og-image.png`
6. Save it into the `public/` folder in this project
7. Push to GitHub — it will auto-deploy

**Test it after deploying:**
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) — paste `https://rkengineering.pk`
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) — paste your URL
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) — paste your URL

---

## Step 1 — Push Code to GitHub

```bash
git add -A
git commit -m "Production ready: security headers, frontend enhancements, SEO"
git push
```

If you don't have a GitHub remote set up yet:

```bash
git remote add origin https://github.com/YOUR_USERNAME/rk-engineering.git
git push -u origin main
```

---

## Step 2 — Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in with your GitHub account
2. Click **"Add New Project"** → Import your GitHub repository
3. Vercel auto-detects Vite. Verify settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **"Deploy"** — takes ~1 minute

---

## Step 3 — Connect Custom Domain (`rkengineering.pk`)

1. In your Vercel project → **Settings > Domains**
2. Add `rkengineering.pk` and `www.rkengineering.pk`
3. Update your DNS records at your domain registrar:

| Type  | Name  | Value                  |
|-------|-------|------------------------|
| A     | `@`   | `76.76.21.21`          |
| CNAME | `www` | `cname.vercel-dns.com` |

4. DNS propagation: usually ~10 minutes, up to 48 hours
5. Vercel provisions a free SSL certificate automatically

---

## Step 4 — Verify Everything is Live

### Functionality
- [ ] `https://rkengineering.pk` loads the website
- [ ] `https://www.rkengineering.pk` redirects to the main domain
- [ ] HTTPS padlock shows in browser
- [ ] All 6 product modals open and close correctly
- [ ] Mobile hamburger menu works
- [ ] WhatsApp button opens chat (bottom right corner)
- [ ] Contact form opens email client with pre-filled message
- [ ] Phone link (`03097580000`) works on mobile
- [ ] Google Maps link opens correctly

### Security Headers (check via [securityheaders.com](https://securityheaders.com))
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: SAMEORIGIN`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Strict-Transport-Security` (HSTS)
- [ ] `Permissions-Policy`

### SEO
- [ ] View page source — verify `<title>`, `<meta description>`, OG tags are present
- [ ] `https://rkengineering.pk/sitemap.xml` loads correctly
- [ ] `https://rkengineering.pk/robots.txt` loads correctly
- [ ] `https://rkengineering.pk/manifest.json` loads correctly
- [ ] Social preview image shows when sharing on Facebook/WhatsApp (requires og-image.png)

---

## Step 5 — Submit to Search Engines

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://rkengineering.pk`
3. Verify ownership via DNS TXT record method
4. Submit sitemap: `https://rkengineering.pk/sitemap.xml`
5. Request indexing for the homepage

### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site and submit the sitemap

---

## What's Already Configured

Everything below is set up and ready — no action needed:

| Item | File | Status |
|------|------|--------|
| SPA routing (all URLs → index.html) | `vercel.json` | ✅ |
| 1-year cache for static assets | `vercel.json` | ✅ |
| Security headers (X-Frame, HSTS, CSP hints, etc.) | `vercel.json` | ✅ |
| SEO meta tags (title, description, keywords) | `index.html` | ✅ |
| Open Graph tags (Facebook/LinkedIn) | `index.html` | ✅ |
| Twitter Card tags | `index.html` | ✅ |
| JSON-LD structured data (schema.org) | `index.html` | ✅ |
| Canonical URL | `index.html` | ✅ |
| Sitemap | `public/sitemap.xml` | ✅ |
| Robots.txt | `public/robots.txt` | ✅ |
| PWA Web Manifest | `public/manifest.json` | ✅ |
| Favicons (SVG, PNG, ICO) | `public/` | ✅ |
| OG Social Preview Image | `public/og-image.png` | ❌ **MISSING — create this** |

---

## Notes

- **Auto-Deploy:** Every `git push` to `main` triggers a new Vercel deployment automatically
- **Build time:** ~1.2 seconds, ~172 KB gzipped JS
- **Free tier includes:** Unlimited deployments, HTTPS, global CDN, custom domains
- **Testimonials section** exists (`src/components/Testimonials.tsx`) but is not shown on the page — add it to `src/pages/Index.tsx` between Partners and Contact if you want to display customer reviews

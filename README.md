# Kardan Ventures Private Limited — Corporate Website

A production-ready corporate website built for **Kardan Ventures Private Limited**, specialized in government tenders, institutional procurement support, and business opportunities with government departments, offices, institutions, and public organizations.

Designed with the aesthetic quality, layout balance, and credibility of a high-end paid corporate WordPress theme, built entirely as a modern custom Next.js 15 App Router website with TypeScript and Tailwind CSS, and optimized for seamless deployment to **Vercel** with the custom domain **`kardanventure.com`**.

---

## 🏛️ Architecture & Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, zero `any`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with centralized design tokens
- **Typography**: [Manrope](https://fonts.google.com/specimen/Manrope) via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Metadata**: Dynamic Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), OpenGraph, JSON-LD ready
- **Hosting Target**: [Vercel](https://vercel.com/) with Zero-Config deployment
- **Production Domain**: `https://kardanventure.com`

---

## 🎨 Design System

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Deep Navy** | `#102A43` | Primary corporate identity, headers, dark sections |
| **Primary Blue** | `#1D4ED8` | Action buttons, active navigation, links, badges |
| **Light BG** | `#F4F7FA` | Alternating section backgrounds, card surfaces |
| **Slate Dark** | `#334E68` | Primary body typography for high legibility |
| **Slate Text** | `#526174` | Subtitles, captions, descriptions |
| **Gold Accent** | `#C5A46D` | Restrained corporate accent bars and decorative badges |
| **Border** | `#E2E8F0` | Subtle hairline borders and card outlines |

---

## 📂 Site Structure & Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero slider (3 slides), company intro, 6 service cards, 4 value propositions, 4-step approach preview, full-width CTA banner |
| `/about-us` | **About Us** | Corporate overview, Mission, Vision, Core Values, Business Philosophy quote |
| `/services` | **Services** | 6 alternating detailed capability sections with bullet points and high-res imagery |
| `/our-approach` | **Our Approach** | Connected 4-step methodology timeline and 3 institutional commitments |
| `/company-profile` | **Company Profile** | Structured statutory data table, focus areas, values & compliance standards, contact cards |
| `/contact-us` | **Contact Us** | Validated multi-field inquiry form, contact directory cards, map placeholder |
| `/privacy-policy` | **Privacy Policy** | 10-section legal draft template with statutory disclaimer |
| `/terms-and-conditions` | **Terms & Conditions** | 11-section institutional terms with statutory disclaimer |
| `/cookie-policy` | **Cookie Policy** | Transparent cookie and session data statement |
| `/not-found` | **Custom 404** | Branded error screen with quick navigation directory |
| `/api/contact` | **Route Handler** | Server-side validated POST endpoint with input sanitization and rate limiting |
| `/sitemap.xml` | **Sitemap** | Auto-generated XML sitemap |
| `/robots.txt` | **Robots** | Search engine crawler rules |

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open the browser:**
   Visit [http://localhost:3000](http://localhost:3000)

4. **Run a production build check:**
   ```bash
   npm run build
   ```

---

## 📤 GitHub to Vercel Deployment Guide

### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/kardan-ventures.git
git branch -M main
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** ➔ **"Project"**.
3. Select your repository `kardan-ventures` and click **Import**.
4. Vercel automatically detects Next.js settings:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **Deploy**. Your site will be built and live within 60 seconds!

---

## 🌐 Connecting Your GoDaddy Domain (`kardanventure.com`)

1. In your **Vercel Project Dashboard**, navigate to **Settings** ➔ **Domains**.
2. Enter `kardanventure.com` and click **Add**.
3. Select the recommended option: **Add `kardanventure.com` and redirect `www.kardanventure.com` to it** (or vice versa).
4. Vercel will display the exact DNS records needed:
   - **Type A Record**:
     - Name: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
5. Go to your **GoDaddy DNS Management Console**:
   - Log in to [GoDaddy](https://godaddy.com) ➔ **Domain Portfolio** ➔ Click `kardanventure.com` ➔ **Manage DNS**.
   - Edit or add the **A Record** (`@` pointing to `76.76.21.21`). *(Delete any existing "Parked" A record from GoDaddy)*.
   - Edit or add the **CNAME Record** (`www` pointing to `cname.vercel-dns.com`).
6. Return to Vercel and click **Refresh**. Once DNS propagates (typically 5 to 30 minutes), Vercel will automatically issue a free SSL certificate and your site will be live at `https://kardanventure.com`!

---

## ⚙️ Environment Variables (Optional)

Copy `.env.example` to `.env.local` to configure email delivery for the contact form:

```bash
# Option A: Resend
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=tenders@kardanventure.com

# Public Site URL
NEXT_PUBLIC_SITE_URL=https://kardanventure.com
```

*Note: Without an email provider configured, the contact form will accept inquiries and return a 200 response acknowledging receipt, while logging that email delivery is pending provider setup.*

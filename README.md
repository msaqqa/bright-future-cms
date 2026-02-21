# 🌟 Bright Future CMS

A headless CMS built with **Payload CMS v3**, **Next.js 15**, and **PostgreSQL** — featuring a fully integrated media management system powered by **Cloudflare R2**.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| CMS | Payload CMS v3 |
| Database | PostgreSQL (Supabase) |
| Media Storage | Cloudflare R2 (S3-compatible) |
| ORM | Drizzle ORM |
| Rich Text | Lexical Editor |
| Runtime | Node.js ≥ 20.9.0 |
| Package Manager | pnpm |

---

## ✨ Features

- **Admin Panel** — Payload CMS provides a fully-featured admin dashboard at `/admin` where you can manage all content, media, users, and settings without touching any code.
- **Headless Architecture** — Content is served via REST API and can be consumed by any frontend.
- **Media Management** — Upload images and files directly from the admin panel. All media is stored on Cloudflare R2 and served via a public CDN URL.
- **Role-Based Access** — Control who can read, create, update, or delete content.
- **Rich Text Editing** — Powered by the Lexical editor for a modern writing experience.
- **Type Safety** — Auto-generated TypeScript types from your Payload config.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `^18.20.2` or `>=20.9.0`
- pnpm `^9` or `^10`
- PostgreSQL database (e.g. Supabase)
- Cloudflare R2 bucket

### Installation

```bash
git clone https://github.com/your-username/bright-future-cms.git
cd bright-future-cms
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server
SERVER_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://...

# Payload
PAYLOAD_SECRET=your-secret-key

# Cloudflare R2
S3_BUCKET=your-bucket-name
S3_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
S3_ACCESS_KEY=your-access-key-id
S3_SECRET_KEY=your-secret-access-key
S3_PUBLIC_URL=https://pub-xxxx.r2.dev
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (frontend)/     # Frontend pages and components
│   └── (payload)/      # Payload CMS routes
├── collections/
│   ├── Users.ts        # Users collection
│   └── Media.ts        # Media collection (Cloudflare R2)
├── globals/
│   ├── Header.ts
│   ├── Footer.ts
│   └── Home.ts
└── payload.config.ts   # Main Payload configuration
```

---

## 🖼️ Media Storage

All media is stored on **Cloudflare R2** and served directly via a public CDN URL — no routing through the Next.js server.

When you upload a file from the admin panel, it is stored on R2 and the public URL is saved directly in the database.

---

## 📦 Build

```bash
pnpm build
pnpm start
```

---

## 🛠️ Useful Commands

```bash
pnpm dev                    # Start development server
pnpm build                  # Build for production
pnpm generate:types         # Regenerate Payload TypeScript types
pnpm generate:importmap     # Regenerate import map
pnpm lint                   # Run ESLint
```

---

## 📄 License

MIT

# ⚡ BloxBolt - Secure Roblox Item Marketplace

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://bloxbolt.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue.svg)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.4-teal.svg)](https://www.prisma.io/)

BloxBolt is a high-performance, secure third-party marketplace for trading virtual items from the Roblox platform. Designed with a gamer-centric aesthetic, it provides an automated escrow system for buying and selling items from games like *Blox Fruits*, *Pets Go*, *Murder Mystery 2*, and more.

---

## 🚀 Features

- **Automated Marketplace:** Seamlessly list, browse, and purchase virtual items.
- **Escrow Protection:** Integrated safety mechanisms to ensure secure transactions between buyers and sellers.
- **Seller Dashboard:** Comprehensive tools for sellers to manage listings, track sales history, and handle onboarding.
- **Tiered Commission:** Dynamic fee structure (5% for Premium members, 10% for standard users).
- **Discord Integration:** Automated ticket systems for support and transaction verification.
- **Role-Based Access:** Distinct workflows for Users, Sellers, and Administrators.
- **Responsive Design:** A modern, dark-themed UI optimized for all devices using Tailwind CSS 4.

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js 15+](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database & ORM:** [PostgreSQL](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Validation:** [Zod](https://zod.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router pages and API routes
│   ├── market/           # Marketplace browsing page
│   ├── seller/           # Seller dashboard and onboarding
│   └── api/              # Backend API endpoints (Auth, Items, etc.)
├── components/           # Reusable UI components (Navbar, Footer, Modals)
├── context/              # React Context providers (Auth, etc.)
├── lib/                  # Shared utilities and server actions
├── prisma/               # Database schema and migrations
└── public/               # Static assets and images
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bloxbolt.git
   cd bloxbolt
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/bloxbolt"
   NEXTAUTH_SECRET="your-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Initialize the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ Disclaimer

BloxBolt is an independent marketplace and is **not affiliated with, sponsored by, or endorsed by Roblox Corporation**. All Roblox-related assets are property of their respective owners.

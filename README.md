# Harness AI Monorepo

## Project Structure
- `apps/site`: Public marketing website (Next.js)
- `apps/editor`: Internal content management system (Next.js)
- `packages/ui`: Shared design system and components
- `packages/db`: SQLite database schema, migrations, and seed data
- `packages/ai`: OpenAI-compatible API client abstraction
- `packages/types`: Shared TypeScript interfaces

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **Database:** SQLite + Drizzle ORM
- **Auth:** NextAuth.js (for Editor)
- **AI:** OpenAI API Standard compatible

## Setup & Running

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Database Setup:**
   ```bash
   # Generate and push schema to SQLite
   npm run db:push -w @harness/db
   
   # Seed the database with starter content
   npm run db:seed -w @harness/db
   ```

3. **Environment Variables:**
   Create a `.env` file in the root:
   ```env
   OPENAI_API_KEY=your_key_here
   NEXTAUTH_SECRET=your_secret_here
   ```

4. **Development:**
   ```bash
   npm run dev
   ```
   - Public Site: http://localhost:3000
   - Editor App: http://localhost:3001

## Credentials
- **Admin Email:** admin@harnessai.com
- **Admin Password:** admin123

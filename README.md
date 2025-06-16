# 🧪 Next.js + TanStack Query + Storybook Boilerplate

A modern, scalable frontend boilerplate using:

- ✅ [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- ✅ [TanStack Query (React Query)](https://tanstack.com/query/latest)
- ✅ [Storybook 9 (UI component explorer)](https://storybook.js.org/)
- ✅ Token-based API support
- ✅ Modular architecture for hooks, components, API client
- ✅ Tailwind CSS ready (optional)

---

## 📂 Project Structure
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Main home page
│   ├── dummy/            # Dummy user page
│   │   └── [id]/         # Dynamic route for user detail
├── components/           # Reusable UI components
│   ├── Button.tsx
│   └── Button.stories.tsx
├── hooks/                # React Query hooks
│   ├── useUsers.ts
│   └── useCreateUser.ts
├── lib/
│   └── apiClient.ts      # Reusable API request handler

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/nextjs-tanstack-storybook.git
cd nextjs-tanstack-storybook

npm install --legacy-peer-deps
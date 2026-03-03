# 🚀 Tech Insight

A hybrid-rendering blog platform built with Next.js 14 to explore modern React architecture, rendering strategies, and scalable frontend patterns.

> ⚠️ This project is currently in active development.

---

## 🌐 Live Demo

(Coming soon – will be deployed on Vercel)

---

## 🛠 Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Redux
- React Hook Form
- JSONPlaceholder API

---

## 📖 Project Goal

Tech Insight is built to deeply understand:

- React rendering lifecycle
- Immutability and shallow comparison
- Hybrid rendering (SSG, SSR, ISR)
- Global state management with Redux Toolkit
- Scalable form handling using React Hook Form

The focus is architecture, performance, and production-ready structure.

---

## ⚡ Rendering Strategy

| Route               | Strategy | Purpose              |
| ------------------- | -------- | -------------------- |
| `/`                 | SSG      | Fast load & SEO      |
| `/posts`            | SSR      | Always fresh data    |
| `/posts/[id]`       | ISR      | Balanced performance |
| Client interactions | CSR      | UI & state updates   |

---

## 🏗 Architecture Overview

```
src/
 ├─ app/
 ├─ components/
 ├─ features/
 ├─ store/
 ├─ hooks/
 ├─ forms/
 ├─ lib/
 └─ types/
```

The project follows a feature-based structure to ensure scalability and separation of concerns.

---

# 📌 Development Progress

## ✅ Phase 1 – Core Rendering

- [x] Project setup with Next.js 14
- [x] Layout & Navbar
- [x] Home page (SSG)
- [x] Posts page (ISR)
- [ ] Post detail page (ISR)

---

## 🔄 Phase 2 – Global State (Redux Toolkit)

- [ ] Configure Redux store
- [ ] Implement bookmark feature
- [ ] Create bookmarks page
- [ ] Optimize re-renders using memoization

---

## 🔄 Phase 3 – Forms & Validation

- [ ] Create post page
- [ ] Integrate React Hook Form
- [ ] Add validation rules
- [ ] Simulate async submission

---

## 🔄 Phase 4 – Optimization & Polish

- [ ] Improve UI consistency
- [ ] Add loading states
- [ ] Add error handling
- [ ] Improve performance awareness
- [ ] Clean architecture refactor
- [ ] Deploy to Vercel

---

## 🧠 Key Concepts Practiced

- Immutable state updates
- Shallow comparison behavior
- Route-level rendering optimization
- Server vs Client components
- Global state design
- Form performance optimization

---

## 🎯 Why This Project?

This project is designed as a practical exploration of modern React and Next.js architecture.

Instead of focusing on complex UI, it emphasizes:

- Correct rendering strategies
- Clean code structure
- Scalable state management
- Production mindset

---

## 📦 Getting Started

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📄 License

MIT

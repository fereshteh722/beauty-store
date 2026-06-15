BeautyStore is a modern and scalable e‑commerce frontend built with Next.js App Router, TypeScript, and Tailwind CSS.

The project demonstrates how to build a performant online store UI using modern React architecture, server components, and a feature‑based project structure.

It is designed as a portfolio‑grade frontend architecture example for building large‑scale Next.js applications.

Tech Stack
Next.js (App Router)
React
TypeScript
Tailwind CSS
Swiper.js (product & hero sliders)
Key Features
Modern responsive e‑commerce UI
Feature‑based scalable architecture
Server Components for better performance
Modular reusable UI components
Product sliders using Swiper
Cart system using React Context
Checkout form with validation
Authentication module structure
Contact form with Server Actions
Blog structure for SEO content
Project Structure
text
src
│
├── app                # Next.js routing layer
│   ├── layout.tsx
│   ├── page.tsx
│   ├── cart
│   ├── checkout
│   ├── contact
│   └── blog
│
├── components         # Global reusable UI components
│   ├── layout
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── container.tsx
│   └── ui
│
├── features           # Feature-based modules
│   ├── auth
│   ├── cart
│   ├── checkout
│   ├── contact
│   ├── home
│   └── products
│
├── lib                # Utilities and shared logic
│   └── api
│
├── types              # TypeScript types
└── styles
Architecture Principles
The project follows a feature-driven architecture:

app/

Handles routing using the Next.js App Router.

features/

Contains domain logic and UI grouped by feature (cart, auth, checkout, etc.).

components/

Reusable UI components shared across the application.

lib/

Utility functions, helpers, and API logic.

This architecture keeps the codebase modular, scalable, and maintainable.

Home Page Sections
The homepage is built from modular components:

Hero Banner Slider
Category Banners
Special Offer Products
New Arrivals
Popular Brands
All sections are located in:

text
features/home
Installation
Clone the repository:

text
git clone https://github.com/your-username/beauty-store.git
Install dependencies:

text
npm install
Run the development server:

text
npm run dev
Open in browser:

text
http://localhost:3000
Scripts
text
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Run production build
npm run lint    # Run ESLint
Future Improvements
Planned production features:

Backend integration (API / database)
Authentication with JWT or OAuth
Persistent cart with database
Product search and filtering
Payment gateway integration
Order management system
Admin dashboard
Advanced SEO optimization
Learning Goals
This project demonstrates:

Building scalable Next.js App Router projects
Structuring large applications with feature modules
Creating reusable UI components
Implementing modern frontend architecture patterns
License
This project is created for educational and portfolio purposes.
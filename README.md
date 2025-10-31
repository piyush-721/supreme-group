# 🚗 Supreme Group — Frontend Assignment (BlackSof)

**Deployed URL:** [https://supreme-group-mocha-beta.vercel.app/](https://supreme-group-mocha-beta.vercel.app/)  
**GitHub Repository:** [https://github.com/piyush-721/supreme-group](https://github.com/piyush-721/supreme-group)

---

## 🧾 Overview

This project implements the **Supreme Group** website frontend based on the provided **Figma design**, using **Next.js**, **Tailwind CSS**, and **JavaScript**.  

The goal was to create a **pixel-perfect, performant, and responsive** UI that follows modern best practices and clean architecture principles.

---

## ⚙️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Build Tool:** Next.js (built on Webpack)
- **Hosting:** Vercel
- **Image Optimization:** Next.js `Image` component

---

## 🧠 Build Tool Justification

I chose **Next.js** instead of a manual Vite/Webpack setup because:

- It **automatically configures Webpack**, code-splitting, and image optimization.  
- Built-in **SSR (Server-Side Rendering)** improves **SEO and performance**.  
- Easy integration with **Vercel** for seamless deployment.  
- Provides a clear **App Router** architecture for modularity and scalability.

---

## 🧩 Component Architecture

I started by analyzing the Figma design and noting all the major sections.  
The structure follows a **modular component-based approach**, where each section is a reusable component.  

For example:
- `Navbar`  
- `HeroSection`  
- `VehicleSolutionsSection`  
- `Footer`  

Shared or repeated values (links, icons, categories) are stored in **`/lib/constants`** for easy maintenance.  
Static assets like logos, icons, and PNGs are managed through **Next.js Image optimization**.

Each component was made **independent and responsive** before moving on to the next to avoid repetitive rework later.

---

## 📱 Responsive Design Strategy

Responsiveness was one of the key focuses.  
I followed a **mobile-first approach** using Tailwind’s responsive utility classes (`sm:`, `md:`, `lg:`).  

Key points:
- Used **flexbox** and **grid layouts** for adaptive designs.
- Added **breakpoints** specific to tablet and desktop.
- Verified layout on multiple screen sizes for pixel-perfect accuracy.

This ensured the website looked consistent across **mobile, tablet, laptop, and desktop**.

---

## ⚡ Performance Optimization Techniques

- **Next.js Image Optimization:** All images are optimized with lazy loading and responsive sizes.
- **Video Optimization:** Added  
  ```html
  preload="auto"
  poster="/assets/images/fallback.jpg"
for smoother video load experience.

Code Splitting: Handled automatically by Next.js for each page and component.

Reduced Re-renders: Avoided unnecessary state in stateless UI components.

Server Rendering: Non-interactive sections are not marked as "use client", improving initial load and SEO.

♿ Accessibility Considerations
Used semantic HTML elements such as <header>, <section>, <footer>, <nav>.

Provided aria-labels for key links and buttons.

Ensured keyboard navigability with tab focus.

Verified contrast ratios for text and backgrounds.

Used alt text on all images for screen readers.

✨ Animations
Some subtle transitions (like hover effects) are added via Tailwind’s transition utilities.
The Vehicle Solutions section animation is planned but still in progress.
For future enhancement, I plan to use Framer Motion for performant and smooth animations.

🧪 State Management Decision
The current site is mostly static with limited interactivity, so no global state management (like Redux or Context API) was required.
If future enhancements (like forms or API-based data) are added, I’d prefer React Context for lightweight state sharing.

💻 How to Run Locally
bash
Copy code
# Clone the repository
git clone https://github.com/piyush-721/supreme-group.git

# Navigate into the project directory
cd supreme-group

# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
http://localhost:3000
🧩 Third-Party Libraries Used
Next.js – for routing, SSR, and performance optimization

Tailwind CSS – for rapid and responsive UI design

Framer Motion (optional) – for animations (planned)

Vercel – for deployment and CI/CD integration

💬 Challenges Faced
Responsiveness:
Making all sections pixel-perfect across multiple devices was time-consuming.

Animations:
Integrating smooth animations while maintaining performance was tricky; one section is pending animation.

Assets:
Some PNGs were missing, so I created and cropped them manually to match the design.

Learning Curve:
I was new to Next.js, so I learned the basics through tutorials and implemented the entire project in 1.5 days.

Logo Enhancement:
Adjusting the logo size and alignment to perfectly match the Figma was challenging.

📘 Assumptions & Decisions
Chose Next.js (Webpack-based) for performance and deployment ease.

Focused on reusability and scalability of components.

Followed a mobile-first responsive design approach.

Prioritized SEO by limiting "use client" usage.

Placeholder assets are temporary and can be replaced with high-quality PNGs.

🚀 Future Improvements
Add Framer Motion animations for section reveals and transitions.

Integrate dynamic data for products or services via API.

Implement unit testing using Jest + React Testing Library.

Add dark mode toggle for accessibility and modern UI feel.

Enhance footer social icons with hover animations.

🧾 Submission Summary
Frontend Framework: Next.js

Language: JavaScript

Styling: Tailwind CSS

Build Tool: Webpack (via Next.js)

State Management: Not required (static data)

Hosting: Vercel

Deployment: https://supreme-group-mocha-beta.vercel.app/

🙌 Author
👨‍💻 Piyush Shinde
Frontend Developer
GitHub

# TCT-Bot Legal Center

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

A modern, fast, and responsive web application built with Next.js to host the official Terms of Service and Privacy Policy for the **TCT-Bot** Discord bot.

This project was created to fulfill the legal requirements of the Discord Developer Portal and provides a clean, user-friendly reading experience with a sleek, dark-mode aesthetic matching Discord's UI.

## ✨ Features

- **Modern UI/UX:** Built with Tailwind CSS featuring a glassmorphism design, subtle gradients, and smooth interactions.
- **Fully Responsive:** Optimized for seamless reading on desktops, tablets, and mobile devices.
- **Internal Scrolling:** Legal documents scroll independently within a styled panel, keeping the navigation and footer locked in place.
- **Dynamic Contact Info:** Easily toggle between email, Discord server, or both via a centralized configuration component.
- **Zero Backend:** Fully static frontend, ready to be deployed instantly on Vercel.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Icons:** Emojis & SVG
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed on your machine (v18.x or later is recommended).
- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BUNCHHENG-CSE/tct-bot-legal.git
Navigate to the project directory:

bash
cd tct-bot-legal
Install the dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open http://localhost:3000 in your browser to see the result.

📝 Configuration
Before deploying, you need to update your bot's specific information:

Update Contact Information:
Open app/components/ContactInfo.tsx and update the email and discordServer variables. Leave a string empty ("") to hide that specific contact method.

Update Legal Content:
Edit the text in app/terms/page.tsx and app/privacy/page.tsx to reflect your bot's actual data practices and rules.

Update Logo:
Replace public/tct-bot-logo.png with your bot's actual logo (keep the same file name, or update the src path in the components).

☁️ Deployment
The easiest way to deploy this Next.js app is to use the Vercel Platform.

Push your code to GitHub.

Go to Vercel and click "Add New Project".

Import your tct-bot-legal repository.

Vercel will auto-detect Next.js. Click Deploy.

Once deployed, copy your production URL (e.g., https://tct-bot-legal.vercel.app).

Add /terms and /privacy to the end of the URL to get your final legal links for the Discord Developer Portal.

📄 License
Distributed under the MIT License. See LICENSE for more information.

Built with ❤️ for the TCT-Bot community.

text

### Next Steps:
After saving the file, run these commands in your terminal to push the README to GitHub:

```bash
git add README.md
git commit -m "docs: add comprehensive README"
git push origin main
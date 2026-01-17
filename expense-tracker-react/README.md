💼 Expense Tracker Pro (React)

A professional, real-world expense tracking application built with React that helps users monitor spending, manage budgets, and understand expense distribution — designed to demonstrate strong frontend fundamentals and clean state management.

🔗 Live Demo

(Add Netlify/Vercel link after deployment)

📌 Problem Statement

Many people struggle to track daily expenses and often exceed their monthly budget due to lack of visibility.
This project solves that problem by providing a simple yet effective system to record expenses, categorize them, and monitor budget usage in real time.

🚀 Features
Core Features

Add expenses with title, amount, category, and date

Automatically calculate total expenses

Persistent data storage using localStorage

Delete expenses dynamically

Monthly budget setting with overspending alerts

Advanced Features (Stand-Out)

Real-time remaining budget calculation

Clean separation of logic using reusable React components

Controlled form inputs with validation

Empty-state handling for better UX

🧠 Technical Highlights

State-driven UI using React Hooks

Side-effect handling with useEffect

Immutable state updates for predictable behavior

Component-based architecture

No external UI libraries — pure React logic

🛠️ Tech Stack
Technology	Usage
React	UI & State Management
JavaScript (ES6+)	Application Logic
HTML5	Markup
CSS3	Styling
localStorage	Client-side persistence
Vite	Development & bundling
📂 Project Structure
src/
├── components/
│   ├── Budget.jsx
│   ├── ExpenseForm.jsx
│   └── ExpenseList.jsx
├── App.jsx
└── main.jsx

🔄 Application Flow

User submits expense data

Input is validated

Expense is added to state

UI re-renders automatically

Data is persisted in localStorage

Budget and totals update in real time

This flow ensures single source of truth and avoids manual DOM manipulation.

⚙️ Installation & Setup
git clone https://github.com/your-username/expense-tracker-react.git
cd expense-tracker-react
npm install
npm run dev

🧪 Validation & Edge Case Handling

Prevents negative or zero expense values

Displays message when no expenses exist

Budget overflow is visually highlighted

Data persists after page refresh

🧩 Challenges Faced

Synchronizing state with localStorage

Avoiding unnecessary state variables

Ensuring clean component communication using props

Maintaining immutability during delete operations

🔮 Future Enhancements

Edit expense functionality

Category-wise analytics

Backend integration using Node.js & MongoDB

User authentication

Charts & visual analytics

🧑‍💻 Author

Anoop A
Frontend Developer (React)
GitHub: https://github.com/anoopcodehack/


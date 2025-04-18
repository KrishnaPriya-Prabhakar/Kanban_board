
# 🗂️ Task Management Dashboard (Angular 14)

A responsive Kanban-style task board built with Angular 14, Angular Material, and a mock REST API using json-server.

---

## 🔗 Repository Link

- **GitHub:** https://github.com/KrishnaPriya-Prabhakar/Kanban_board.git

---

## 🚀 Features

- 🧩 Kanban Board with 3 columns: To Do, In Progress, Done
- ➕ Add new tasks
- 🖱️ Drag & Drop to update task status
- 💾 Persistent state using mock API
- 📱 Responsive and mobile-friendly UI

---

## 📁 Local Setup

### Step 1: Clone the repo
```bash
git clone https://github.com/KrishnaPriya-Prabhakar/Kanban_board.git
cd Kanban_board

### Step 2: Install dependencies
npm install

### Step 3: Start the mock api
npm run start:api

### Step 4: Run Angular App
ng serve
Visit http://localhost:4200 in your browser.


🧱 Architecture
kanban-board.component: Main board UI and drag/drop logic

task-card.component: Displays a single task

add-task-dialog.component: Modal form for new task

task.service: Handles all API interactions

db.json: Mock database
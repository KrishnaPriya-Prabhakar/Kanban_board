# 📋 Self Evaluation – Task Management Dashboard

---

## 1. Half‑Page Summary

This Angular 14 project implements a fully responsive task management dashboard using a Kanban-style board. Users can create tasks, view them under their respective statuses, and move them between columns using drag and drop (Angular CDK). Tasks are persisted using a mock API (`json-server`). The UI uses Angular Material components for consistency and a clean, mobile-responsive design.

---

## 2. Self-Criticism

- The UI/UX could be improved with better visuals and animations.
- There's no edit or delete functionality for existing tasks.
- Error handling is minimal (e.g. no toast or snackbar messages).
- No test cases were added due to time constraints.
- The code could be modularized further for large-scale production.

---

## 3. Improvements (If I Had More Time)

- Add editing and deleting of tasks
- Implement form validation and toast notifications
- Add unit and integration tests
- Use NgRx for state management
- Add task prioritization or due dates
- Connect to a real backend with authentication

---

## 4. Technology Rating (Out of 10)

| Technology          | Self-Rating |
|---------------------|-------------|
| Angular             | 8           |
| Angular Material    | 7           |
| Angular CDK         | 8           |
| TypeScript          | 8           |
| json-server         | 9           |
| CSS / Responsiveness| 7           |
# 🧠 Quiz App (Context API + useReducer Practice)

This project is a **refactored version of the Quiz App**, rebuilt to **practice the Context API section** after completing it in  
**The Ultimate React Course** by *Jonas Schmedtmann* on Udemy.

The goal of this version is to learn **when and how to combine Context API with `useReducer`** for shared application state.

---

## 🚀 Project Purpose

- Practice **Context API** in a real project
- Combine **Context API + useReducer**
- Eliminate prop drilling
- Understand **global vs local state**
- Learn trade-offs of using Context

> ⚠️ Context API is used here **for learning purposes**.  
> In a real production scenario, this app could work perfectly without Context.

---

## 🧩 Features

- Select quiz subject
- Answer quiz questions
- Submit and navigate between questions
- Calculate final score
- Restart quiz
- Global theme toggle (light / dark)
- Centralized error & loading handling

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Context API
- `useReducer`
- CSS

---

## 🧠 State Management Strategy

### 🔹 Why Context API?
In this version, Context API is used to:
- Share quiz state across **multiple components**
- Avoid passing `state` and `dispatch` deeply through props
- Centralize application logic in one place

### 🔹 Why still use `useReducer`?
- Complex state transitions
- Clear action-based updates
- Predictable state flow

---

## 🌍 Global State (Context)

The Quiz Context provides access to:
- Quiz data
- Current question index
- Selected answer
- Score
- Theme
- Application status
- Dispatch function

All consuming components read from the same **single source of truth**.

---

## 🔁 Reducer Actions

Handled actions include:
- `data/receive`
- `subject/select`
- `option/select`
- `btn/submit`
- `btn/next`
- `theme/toggle`
- `again`
- `error`

Each action represents a clear user interaction.


---

## 🎓 What I Learned

- When Context API is useful (shared global state)
- When Context API is unnecessary (local state)
- How to combine Context with `useReducer`
- How to refactor an app to remove prop drilling
- The cost of overusing Context

---

## 📌 Important Note

This project intentionally uses **Context API for practice**.

For a single-page app with shallow component depth:
- `useReducer` alone is often enough
- Context API may add unnecessary complexity

This refactor was done **to understand Context deeply**, not because it was required.

 
 
 

 


 

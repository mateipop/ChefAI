# ChefAI Recipe Recommender

ChefAI is a React-based app that uses **Anthropic AI (Claude 3 Haiku)** to generate recipe suggestions based on ingredients you input.

---

## Project Features

* **Add Ingredients** — Type in what you have at home.
* **View Ingredient List** — See what you've added so far.
* **Generate Recipe** — Once you’ve added at least 3 ingredients, click the button to get a recipe.
* **AI Response** — Claude returns a recipe in Markdown format.
* **Reset List** — Start fresh with one click.

---

## Tech Stack

* React (UI)
* Vite (build tool)
* Anthropic API (Claude 3 Haiku)
* react-markdown (for rendering Markdown)
* CSS (styling)

---

## Setup

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Create `.env` file

```env
VITE_API_KEY=YOUR_ANTHROPIC_API_KEY_HERE
```

> Replace the placeholder with your real API key from [anthropic.com](https://www.anthropic.com)

---

## Run the App

### Dev mode:

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### Production build:

```bash
npm run build
# or
yarn build
```

---

Happy cooking with AI! 🍽️

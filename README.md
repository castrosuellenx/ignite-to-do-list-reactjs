<p align="center">
  <img src="./public/logo.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">IGNITE TO-DO LIST (REACT.JS)</h1>
</p>
<p align="center">
    <em>Efficient Task Management!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/castrosuellenx/ignite-to-do-list-reactjs?style=flat-square&logo=opensourceinitiative&logoColor=white&&color=00aaaa" alt="license">
	<img src="https://img.shields.io/github/last-commit/castrosuellenx/ignite-to-do-list-reactjs?style=flat-square&logo=git&logoColor=white&&color=00aaaa" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/castrosuellenx/ignite-to-do-list-reactjs?style=flat-square&&color=00aaaa" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/castrosuellenx/ignite-to-do-list-reactjs?style=flat-square&&color=00aaaa" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Chakra--UI-319795.svg?style=flat-square&logo=Chakra-UI&logoColor=white" alt="Chakra UI">
	<img src="https://img.shields.io/badge/i18next-26A69A.svg?style=flat-square&logo=i18next&logoColor=white" alt="i18next">
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [🌐 Live Demo](#-live-demo)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Install](#️-install)
  - [► Using Ignite To-Do List](#-using-ignite-to-do-list)
- [🛠 Project Roadmap](#-project-roadmap)
</details>
<hr>

## 📍 Overview

The Ignite To-Do List project is a simple and efficient to-do list application built with React.js. It allows users to manage their tasks by adding, completing, and deleting them. This project was created as part of the Ignite course by Rocketseat, focusing on improving React.js skills.

---

## 🌐 Live Demo

The Ignite To-Do List project is online and available. You can view and interact with the application at the following URL:

[https://castrosuellenx.github.io/ignite-to-do-list-reactjs/](https://castrosuellenx.github.io/ignite-to-do-list-reactjs/)

Feel free to explore the features and functionality of the to-do list application.

---

## 📦 Features

|     | Feature           | Description                                                                                                                                                                                                                                                     |
| --- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | This project is built using React.js and TypeScript, following a structured architecture that includes components and hooks to handle task interactions. It leverages Vite for fast development and Chakra UI for styling, ensuring a seamless user experience. |
| 🔩  | **Code Quality**  | The codebase maintains a good level of quality with well-organized components, clear naming conventions, and consistent code style. TypeScript is used for type safety and improved code readability, enhancing overall maintainability.                        |
| 📄  | **Documentation** | The project includes detailed README files and comments within the codebase, aiding developers in understanding the architecture and implementation details.                                                                                                    |
| 🔌  | **Integrations**  | Key integrations include i18next for internationalization and various React libraries for UI components and state management.                                                                                                                                   |
| 🧩  | **Modularity**    | The codebase exhibits modularity through separate components and hooks, promoting code reusability. Data context management and global constants contribute to a cohesive architecture that can easily accommodate future enhancements or feature additions.    |
| 📦  | **Dependencies**  | Key dependencies include React, TypeScript, Vite, Chakra UI, i18next, and uuid. Configuration files like package.json and tsconfig.json manage dependencies and project settings effectively.                                                                   |

---

## 📂 Repository Structure

```sh
ignite-to-do-list-reactjs/
├── public/
│   └── locales/
│       ├── en/
│       │   └── translation.json
│       ├── pt/
│       │   ├── translation.json
│       │   ├── brazil-flag.png
│       │   ├── clipboard.png
│       │   ├── short-logo.svg
│       │   └── usa-flag.png
├── src/
│   ├── components/
│   │   └── List/
│   │       ├── EmptyList.module.css
│   │       ├── EmptyList.tsx
│   │       ├── ListHeader.module.css
│   │       ├── ListHeader.tsx
│   │       ├── Task.module.css
│   │       ├── Task.tsx
│   ├── Header.module.css
│   ├── Header.tsx
│   ├── Input.module.css
│   ├── Input.tsx
│   ├── LanguageSwitch.module.css
│   ├── LanguageSwitch.tsx
│   ├── RocketIcon.tsx
│   ├── hooks/
│   │   └── useTaskList.ts
│   ├── App.module.css
│   ├── App.tsx
│   ├── global.css
│   ├── i18n.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── tsconfig.json

```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                               | Summary                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [index.html](./index.html)         | The main HTML file that serves as the entry point for the React application.                          |
| [package.json](./package.json)     | Manages dependencies and project configurations for the application.                                  |
| [tsconfig.json](./tsconfig.json)   | Configures TypeScript settings for the project, ensuring robust type checking and better reliability. |
| [vite.config.ts](./vite.config.ts) | Configuration file for Vite, a build tool that provides a fast development environment for React.     |

</details>

<details closed><summary>src</summary>

| File                                   | Summary                                                                           |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| [App.tsx](./src/App.tsx)               | The main component that sets up the application's structure and routes.           |
| [i18n.ts](./src/i18n.ts)               | Configuration file for i18next, used for internationalization in the application. |
| [global.css](./src/global.css)         | Global CSS styles applied across the entire application.                          |
| [App.module.css](./src/App.module.css) | CSS module for styling the App component.                                         |
| [main.tsx](./src/main.tsx)             | The entry point file that renders the App component into the DOM.                 |

</details>

<details closed><summary>components</summary>

| File                                                      | Summary                                                                                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Header.tsx](./src/components/Header.tsx)                 | Component for the main header of the application, typically containing the application title and navigation links.           |
| [ListHeader.tsx](./src/components/List/ListHeader.tsx)    | Component for the header of the to-do list, containing control information about the added tasks.                            |
| [EmptyList.tsx](./src/components/List/EmptyList.tsx)      | Component that displays a message when the to-do list is empty, enhancing user experience with visual feedback.              |
| [Task.tsx](./src/components/List/Task.tsx)                | Component representing an individual task item in the to-do list, with functionalities for marking as completed or deleting. |
| [LanguageSwitch.tsx](./src/components/LanguageSwitch.tsx) | Component allowing users to switch between different languages, enhancing accessibility and user preference settings.        |

</details>

<details closed><summary>hooks</summary>

| File                                         | Summary                                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [useTaskList.ts](./src/hooks/useTaskList.ts) | Custom hook for managing the state and logic of the task list, including adding, updating, and removing tasks. |

</details>

---

## 🚀 Getting Started

**_Requirements_**
Ensure you have the following dependencies installed on your system:

- **Node.js**: `version >=14.0.0`
- **npm**: `version >=6.0.0`

### ⚙️ Install

1. Clone the Ignite To-Do List repository:

```sh
git clone https://github.com/castrosuellenx/ignite-to-do-list-reactjs
```

2. Change to the project directory:

```sh
cd ignite-to-do-list-reactjs
```

3. Install the dependencies:

```sh
npm install
```

### ► Using `Ignite To-Do List React.js`

Use the following command to run Ignite To-Do List Reat.js:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 🛠 Project Roadmap

- [x] Implement task addition feature
- [x] Implement task completion feature
- [x] Implement task deletion feature
- [x] Enhance accessibility features
- [x] Implement language switch between English and Brazilian Portuguese

---

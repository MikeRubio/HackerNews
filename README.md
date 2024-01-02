[![Angular CI/CD](https://github.com/MikeRubio/HackerNews/actions/workflows/angular-ci.yml/badge.svg)](https://github.com/MikeRubio/HackerNews/actions/workflows/angular-ci.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/9940bee3-6624-40a3-b4d9-ec7b98b2b272/deploy-status)](https://app.netlify.com/sites/hacker-news-genesys/deploys)

# Hacker news

![image](https://github.com/MikeRubio/HackerNews/assets/23417202/6013631a-c64c-4321-bb3f-6646042c9ac0)



This project is an Angular-based application designed to interface with Hacker News. It provides a sleek and responsive UI for browsing and interacting with content from Hacker News.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running this project, you need to have Node.js and Angular CLI installed on your system. If you haven't installed them yet, follow these guides:

- [Node.js Installation Guide](https://nodejs.org/en/download/package-manager/)
- [Angular CLI Installation Guide](https://angular.io/cli)

### Installation

1. **Clone the Repository**

   ``git clone https://github.com/your-username/hacker-news-angular.git``
   ``cd hacker-news-angular``

2. **Install Dependencies**
    ``npm install``
   
3. **Running the Application**
   ``ng serve``

4. **Running Tests**
   ``npm run test``

### Production build

Currently the app is deployed using netlify, the status can be found on the bard on the top or by accessing [netlify-hacker-news](https://app.netlify.com/sites/hacker-news-genesys/deploys)

### App Features

The app is built using modern web technologies and frameworks to ensure a sleek user interface and efficient performance. Here's an overview of the key features:

- **UI Frameworks**: Utilizes Tailwind and Flowbite for a responsive and modern user interface design.

- **Development Environment**: Developed with Angular CLI 17, providing a robust framework for building scalable single-page web applications.

- **Content Sections**: The app features four main links:
  - `News`: Displays the latest news articles.
  - `New`: Shows newly added content.
  - `Show`: A section for showcasing specific topics or posts.
  - `Jobs`: Lists available job opportunities or postings.

- **Infinite Scrolling**: To efficiently handle the dynamic and extensive content of Hacker News, the app implements an infinite scrolling service. This feature allows users to continuously scroll through posts, loading them in batches for better performance and user experience.

- **Dark/Light Mode**: The app includes a theme toggle feature allowing users to switch between Dark and Light modes. The mode preference is preserved using local storage, ensuring a consistent user experience across sessions.

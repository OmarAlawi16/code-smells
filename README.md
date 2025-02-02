# Podcast Application

## Overview

This project is a web-based podcast application developed at Wundermålig AB. The application allows users to browse and listen to podcasts with a simple and accessible interface.

## Features

- **List and play podcasts**: Browse a library of podcasts and listen directly in the app.
- **Responsive design**: Optimized for both desktop and mobile devices.
- **Accessibility-first**: Built to ensure compatibility with screen readers and keyboard navigation.
- **TypeScript and Sass**: Modern technologies for scalable and maintainable code.

## Screenshots
<img width="819" alt="page dark" src="https://github.com/user-attachments/assets/98e07838-919b-475c-b600-359681325806" />

<img width="816" alt="page" src="https://github.com/user-attachments/assets/8168a4e8-e15e-47a7-b618-381b7a706222" />

## Technologies Used

### Build Tools

![Node.js](https://img.shields.io/badge/Node.js-16.0-green?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-9.8.1-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Styling and Preprocessing

![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-1.83.4-CC6699?style=for-the-badge&logo=sass&logoColor=white)

### Programming and Code Quality

![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.18.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

### Dependencies and APIs

![Axios](https://img.shields.io/badge/Axios-1.7.9-blue?style=for-the-badge&logo=axios&logoColor=white)
![JSON](https://img.shields.io/badge/Format-JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Podcast API](https://img.shields.io/badge/API-Podcast-informational?style=for-the-badge)

### Hosting and Deployment

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

### Utilities

![Scripts](https://img.shields.io/badge/Uses-NPM%20Scripts-yellow?style=for-the-badge)

## Getting Started

### Prerequisites

- Node.js v20.11.0
- npm installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Medieinstitutet/fed24d-arbetsmetodik-inl-1-OmarAlawi16
cd repo-name
```

2. Install dependencies:

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Environment Variables

This project uses environment variables to store API URLs. The actual API URLs are **not** included in this repository for security reasons.

#### **Setup Instructions**

1. **Create a `.env` file** in the project root (or copy `.env.example` and rename it to `.env`).
2. **Add the required environment variables**:
   ```plaintext
   VITE_PROGRAMS_API=<your-api-url>
   VITE_EPISODES_API=<your-api-url>
   ```

## checklist

G Requirements

- [x] **Get the project running**: Debug and fix startup issues.
- [x] **Convert CSS to Sass**: Transform all CSS files into Sass.
- [x] **Consistent naming in CSS**: Use consistent naming conventions for classes and IDs.
- [x] **Convert to TypeScript**: Migrate all JavaScript files to TypeScript for improved code quality.
- [x] **Consistent code quality**: Ensure code standards are followed (using ESLint).
- [x] **Mobile view**: Adjust the layout for mobile users.
- [x] **Language**: Fix language-related issues (e.g., lang attribute in HTML).
- [x] **Remove unnecessary logging**: Eliminate redundant console logs.
- [x] **Documentation**: Complete the README file and include screenshots.
- [x] **Accessibility (images)**: Add alt-text and optimize images for better accessibility.
- [x] **Refactor functions**: Improve code structure by breaking down complex logic.
- [x] **Eliminate unused code**: Remove redundant or unused code.
- [x] **Remove irrelevant files**: Ensure only necessary files are included in the project.

VG Requirements

- [x] **Right code in the right place**: Restructure files and folders to follow best practices.
- [x] **Handle logging effectively**: Implement a logging system to collect and filter logs efficiently.
- [x] **Conduct an accessibility review of the site**: Analyze the site using tools like Lighthouse and WCAG standards.
- [x] **Utilize Sass features in CSS**: Leverage mixins, variables, and inheritance for optimized styling.
- [x] **Remove unused packages**: Eliminate unnecessary dependencies from package.json.
- [x] **Handle API errors**: Implement robust error handling for all API calls.
- [x] **Conduct a Lighthouse analysis**: Run a Lighthouse report and improve performance, SEO, and accessibility.
- [ ] **Review development environment**: Document or visualize how the development environment is configured.
- [x] **Ensure consistent CSS syntax**: Standardize syntax and formatting based on specific guidelines (e.g., BEM methodology).
- [x] **Publish the site on GitHub Pages**: Build and deploy the site using GitHub Pages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Weather App

Introduction
This project is a Weather App designed to display weather information for different cities. It fetches real-time weather data from an API and presents it in a user-friendly interface. The project utilizes React.js along with Chakra UI for the front-end development.

Features:
-Displays current temperature, humidity, feels like temperature, cloud percentage, sunrise time, sunset time, and wind speed.
-Allows users to search for weather information of different cities.
-Provides a visually appealing interface with animated weather icons.


Installation & Getting Started:

-Clone the repository.
-Navigate to the project directory.
-Install dependencies by running npm install.
-Start the development server by running npm run dev.
-Access the application through the provided localhost URL.

Directory Structure

weatherapp/
├─ backend/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ Navbar.js
│  │  │  ├─ WeatherApp.js
│  │  │  ├─ WeatherDisplay.js
│  │  ├─ context/
│  │  │  ├─ WeatherContext.js
│  │  ├─ App.js
│  │  ├─ index.js
├─ .gitignore
├─ package.json
├─ README.md


Dependencies:
-@chakra-ui/icons: ^2.1.1
-@chakra-ui/react: ^2.8.2
-@emotion/react: ^11.11.4
-@emotion/styled: ^11.11.5
-dotenv: ^16.4.5
-framer-motion: ^11.1.7
-react: ^18.2.0
-react-dom: ^18.2.0
-react-router-dom: ^6.23.0

Scripts:
-dev: Start the development server.
-build: Build the production-ready app.
-lint: Lint the codebase using ESLint.
-preview: Preview the built app.

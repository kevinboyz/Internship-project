# Hope Health Center Management System

This project contains both the original HTML version and the converted Vue.js version of the Hope Health Center management system.

## Project Structure

```
hope-health-center/
├── html-files/          # Original HTML version
│   ├── index.html
│   ├── Dashboard.html
│   ├── registration.html
│   ├── management.html
│   ├── appointment.html
│   ├── report.html
│   ├── setting.html
│   ├── style.css
│   ├── Script.js
│   └── kevin.png
├── vue-files/           # Vue.js version
│   ├── index.html
│   ├── src/
│   │   ├── main.js
│   │   ├── App.vue
│   │   └── views/
│   │       ├── Home.vue
│   │       ├── Dashboard.vue
│   │       ├── Registration.vue
│   │       ├── Management.vue
│   │       ├── Appointment.vue
│   │       ├── Report.vue
│   │       └── Settings.vue
├── package.json
├── vite.config.js
└── README.md
```

## Running the Vue.js Version

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000/`

## Running the HTML Version

Simply open any of the HTML files in the `html-files/` directory in your browser. The main entry point is `html-files/index.html`.

## Features

- Patient registration and management
- Appointment scheduling
- Dashboard with statistics
- Reports and analytics
- System settings
- Offline mode support
- Local storage for data persistence

## Technologies Used

### HTML Version
- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API

### Vue.js Version
- Vue 3
- Vue Router
- Vite
- Component-based architecture
- Reactive data management

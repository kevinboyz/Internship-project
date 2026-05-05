<template>
  <div class="dashboard-wrapper">
    <header class="main-header">
      <div class="logo-container">
        <div class="text-logo">HOPE</div>
        <h1>HOPE HEALTH CENTER</h1>
      </div>
    </header>

    <div class="body-layout">
      <aside class="sidebar">
        <h3>Menu</h3>
        <ul>
          <li><router-link to="/" class="menu-link">Home</router-link></li>
          <li><router-link to="/dashboard" class="menu-link">Dashboard</router-link></li>
          <li><router-link to="/registration" class="menu-link">Patient Registration</router-link></li>
          <li><router-link to="/management" class="menu-link">Patient Management</router-link></li>
          <li><router-link to="/appointment" class="menu-link">Appointment</router-link></li>
          <li><router-link to="/report" class="menu-link">Reports</router-link></li>
          <li><router-link to="/settings" class="menu-link">Settings</router-link></li>
        </ul>
      </aside>

      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background-color: #000;
  padding: 20px;
}

.dashboard-wrapper {
  border: 2px solid #333;
  display: flex;
  flex-direction: column;
}

.main-header {
  background-color: #2c5282;
  padding: 15px;
  text-align: center;
  border-bottom: 2px solid #000;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.logo {
  height: 50px;
  width: auto;
}

.text-logo {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(135deg, #ff6b6b, #e74c3c);
  padding: 8px 12px;
  border-radius: 8px;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  display: inline-block;
  min-width: 60px;
  text-align: center;
}

.body-layout {
  display: flex;
  min-height: 80vh;
}

.sidebar {
  width: 250px;
  background-color: #cccccc;
  padding: 20px;
  border-right: 2px solid #000;
}

.sidebar h3 {
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  padding: 12px 0;
  font-weight: bold;
  cursor: pointer;
}

.sidebar li:hover {
  background-color: #bbb;
}

.menu-link {
  text-decoration: none;
  color: #000;
  display: block;
  width: 100%;
}

.main-content {
  flex: 1;
  background-color: #f5f5f5;
  padding: 30px;
}

@media (max-width: 768px) {
  .body-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #000;
  }
}
</style>

<template>
  <div class="container">
    <header class="header">
      <div class="logo-box">
        <div class="text-logo">HOPE</div>
        <h1>Hope Health Center Dashboard – Offline System</h1>
      </div>
    </header>

    <div class="main-body">
      <main class="content">
        <div class="stats-container">
          <div class="card red-card">
            <h4>Today patients</h4>
            <p class="stat-number">{{ todayPatients }}</p>
          </div>
          <div class="card green-card">
            <h4>Appointments</h4>
            <p class="stat-number">{{ appointments }}</p>
          </div>
          <div class="card blue-card">
            <h4>Pending</h4>
            <p class="stat-number">{{ pending }}</p>
          </div>
        </div>

        <section class="recent-patients">
          <h3>Recent Patients</h3>
          <ul>
            <li v-for="patient in recentPatients" :key="patient.id">
              {{ patient.name }} {{ patient.action }}
            </li>
          </ul>
        </section>

        <footer class="status-bar">
          Offline Mode ACTIVE
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      todayPatients: 24,
      appointments: 12,
      pending: 5,
      recentPatients: [
        { id: 1, name: 'Kevin', action: 'checked in' },
        { id: 2, name: 'Bonheur', action: 'added' },
        { id: 3, name: 'Appointment', action: 'scheduled' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  border: 2px solid #444;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #2c5282;
  padding: 15px;
  border-bottom: 2px solid #000;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #000;
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

.main-body {
  display: flex;
  flex: 1;
  background: #000;
}

.content {
  flex: 1;
  background: #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stats-container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  padding: 20px;
  border: 1px solid #999;
  height: 120px;
}

.red-card {
  background: #c00000;
  color: #000;
}

.green-card {
  background: #a9d08e;
  color: #000;
}

.blue-card {
  background: #5b9bd5;
  color: #000;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.recent-patients {
  background: #ccc;
  padding: 20px;
  min-height: 200px;
  border: 1px solid #999;
}

.recent-patients h3 {
  text-align: center;
  margin-bottom: 15px;
}

.recent-patients ul {
  margin-left: 40px;
}

.recent-patients li {
  margin-bottom: 8px;
  font-weight: bold;
}

.status-bar {
  background: #a5a5a5;
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #000;
  margin-top: auto;
}
</style>

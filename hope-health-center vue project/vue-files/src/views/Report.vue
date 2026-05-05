<template>
  <div class="main-container">
    <div class="filter-row">
      <div class="date-input">
        <label>From Date</label>
        <input type="date" v-model="filter.fromDate">
      </div>
      <div class="date-input">
        <label>To Date</label>
        <input type="date" v-model="filter.toDate">
      </div>
      <button @click="generateReport" class="generate-btn">Generate</button>
    </div>

    <div class="report-stats">
      <div class="stat-box green-box">
        <p>Total Patients</p>
        <h2>{{ stats.totalPatients }}</h2>
      </div>
      <div class="stat-box blue-box">
        <p>Appointments</p>
        <h2>{{ stats.appointments }}</h2>
      </div>
      <div class="stat-box brown-box">
        <p>Pending</p>
        <h2>{{ stats.pending }}</h2>
      </div>
    </div>

    <div class="chart-container">
      <h3>Monthly Activity Chart</h3>
      <div class="bar-chart">
        <div v-for="(bar, index) in chartData" :key="index" 
             class="bar" 
             :style="{ height: bar.height + '%' }">
        </div>
      </div>
    </div>

    <div class="report-footer">
      Reports Ready for print/Export
    </div>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data() {
    return {
      filter: {
        fromDate: '',
        toDate: ''
      },
      stats: {
        totalPatients: 103,
        appointments: 58,
        pending: 12
      },
      chartData: [
        { height: 30 },
        { height: 50 },
        { height: 80 },
        { height: 45 },
        { height: 90 },
        { height: 60 }
      ]
    }
  },
  methods: {
    generateReport() {
      const patients = JSON.parse(localStorage.getItem('patients')) || [];
      this.stats.totalPatients = patients.length;
      
      alert('Report generated successfully!');
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
}

.filter-row {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: flex-end;
}

.date-input {
  background: #fff;
  padding: 10px;
  border: 1px solid #000;
}

.date-input label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.generate-btn {
  background-color: #2c5282;
  color: #000;
  padding: 12px 30px;
  border: 2px solid #000;
  font-weight: bold;
  cursor: pointer;
}

.report-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-box {
  flex: 1;
  padding: 20px;
  border: 2px solid #000;
  color: #000;
}

.green-box {
  background-color: #4b6239;
}

.blue-box {
  background-color: #2c5282;
}

.brown-box {
  background-color: #7e4a1c;
}

.stat-box p {
  font-weight: bold;
  margin-bottom: 10px;
}

.chart-container {
  background: #fff;
  padding: 20px;
  border: 2px solid #000;
  height: 250px;
}

.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 15px;
  height: 150px;
  margin-top: 20px;
  border-bottom: 2px solid #000;
}

.bar {
  width: 40px;
  background-color: #888;
  transition: 0.3s;
}

.bar:hover {
  background-color: #2c5282;
}

.report-footer {
  margin-top: 30px;
  background-color: #a6a6a6;
  padding: 15px;
  border: 2px solid #000;
  font-weight: bold;
}
</style>

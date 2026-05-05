<template>
  <div class="main-container">
    <div class="management-header">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="search patient...." 
        class="search-input"
        @input="filterPatients"
      >
      <router-link to="/registration" class="add-patient-btn">Add patient</router-link>
    </div>

    <div class="table-container">
      <table class="patients-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>PHONE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(patient, index) in filteredPatients" :key="patient.id">
            <td>{{ String(index + 1).padStart(3, '0') }}</td>
            <td>{{ patient.fullName || patient.name }}</td>
            <td>{{ patient.gender || 'Male' }}</td>
            <td>{{ patient.phoneNumber || patient.phone }}</td>
            <td><button @click="viewPatient(patient)" class="view-link">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="total-status">
      Total Patients: {{ patients.length }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Management',
  data() {
    return {
      searchQuery: '',
      patients: [],
      filteredPatients: []
    }
  },
  mounted() {
    this.loadPatients();
  },
  methods: {
    loadPatients() {
      this.patients = JSON.parse(localStorage.getItem('patients')) || [];
      this.filteredPatients = this.patients;
    },
    filterPatients() {
      if (!this.searchQuery) {
        this.filteredPatients = this.patients;
      } else {
        this.filteredPatients = this.patients.filter(patient => 
          (patient.fullName || patient.name).toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          (patient.phoneNumber || patient.phone).includes(this.searchQuery)
        );
      }
    },
    viewPatient(patient) {
      alert(`Viewing patient: ${patient.fullName || patient.name}`);
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
}

.management-header {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 12px;
  background-color: #eee;
  border: 1px solid #000;
  font-size: 16px;
}

.add-patient-btn {
  background-color: #5b9bd5;
  color: #000;
  padding: 12px 25px;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #000;
}

.table-container {
  background-color: #fff;
  border: 2px solid #000;
}

.patients-table {
  width: 100%;
  border-collapse: collapse;
}

.patients-table th {
  background-color: #bfbfbf;
  color: #000;
  padding: 12px;
  border: 1px solid #000;
  text-align: left;
}

.patients-table td {
  padding: 10px;
  border: 1px solid #000;
  background-color: #fff;
}

.view-link {
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
}

.total-status {
  margin-top: 50px;
  background-color: #7f7f7f;
  padding: 15px;
  border: 2px solid #000;
  font-weight: bold;
  color: #000;
}
</style>

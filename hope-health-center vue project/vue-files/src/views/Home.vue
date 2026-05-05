<template>
  <section class="form-section">
    <h2>Patient Registration</h2>
    <form @submit.prevent="savePatient">
      <input type="text" v-model="patient.name" placeholder="Name" required>
      <input type="number" v-model="patient.age" placeholder="Age" required>
      <input type="text" v-model="patient.gender" placeholder="Gender" required>
      
      <div class="btn-group">
        <button type="submit" class="btn-save">Save</button>
        <button type="button" @click="clearForm" class="btn-clear">Clear</button>
        <button type="button" @click="window.print()" class="btn-print">Print</button>
      </div>
    </form>
  </section>

  <section class="appointments-section">
    <h3>Appointments Panel</h3>
    <p class="table-header">Date / Time / Doctor / Status</p>
    <div id="patientList" class="data-display">
      <div v-for="appointment in appointments" :key="appointment.id" class="appointment-item">
        {{ appointment.date }} / {{ appointment.time }} / {{ appointment.doctor }} / {{ appointment.status }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      patient: {
        name: '',
        age: '',
        gender: ''
      },
      appointments: []
    }
  },
  methods: {
    savePatient() {
      const patients = JSON.parse(localStorage.getItem('patients')) || [];
      patients.push({...this.patient, id: Date.now()});
      localStorage.setItem('patients', JSON.stringify(patients));
      
      alert("Patient saved successfully!");
      this.clearForm();
    },
    clearForm() {
      this.patient = {
        name: '',
        age: '',
        gender: ''
      };
    }
  }
}
</script>

<style scoped>
.form-section {
  background: #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #999;
}

input {
  display: block;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #ccc;
  border: 1px solid #777;
}

.btn-group {
  display: flex;
  gap: 10px;
}

.btn-save {
  background: #000;
  color: #00ff00;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-clear {
  background: #558b2f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-print {
  background: #1a5276;
  color: #ffff00;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.appointments-section {
  background: #fff;
  padding: 20px;
  border: 1px solid #000;
  min-height: 150px;
}

.table-header {
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.appointment-item {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
</style>

<template>
  <div class="main-container">
    <div class="form-card">
      <h2>New Patient Form</h2>
      
      <form class="patient-form" @submit.prevent="savePatient">
        <div class="form-grid">
          <div class="col">
            <label>Full Name:</label>
            <input type="text" v-model="patient.fullName" required>

            <label>Age:</label>
            <input type="number" v-model="patient.age" required>

            <label>Gender:</label>
            <input type="text" v-model="patient.gender" required>
          </div>

          <div class="col">
            <label>Phone Number:</label>
            <input type="text" v-model="patient.phoneNumber" required>

            <label>National ID:</label>
            <input type="text" v-model="patient.nationalId" required>
          </div>
        </div>

        <div class="full-width">
          <label>Address:</label>
          <textarea v-model="patient.address" rows="3"></textarea>
        </div>

        <div class="form-buttons">
          <button type="submit" class="btn-save">Save</button>
          <button type="button" @click="clearForm" class="btn-clear">Clear</button>
          <button type="button" @click="window.print()" class="btn-print">Print Card</button>
        </div>
      </form>
    </div>

    <div class="status-footer">
      Ready to Register Patient
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      patient: {
        fullName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        nationalId: '',
        address: ''
      }
    }
  },
  methods: {
    savePatient() {
      const patients = JSON.parse(localStorage.getItem('patients')) || [];
      patients.push({
        ...this.patient,
        id: Date.now(),
        registeredAt: new Date().toISOString()
      });
      localStorage.setItem('patients', JSON.stringify(patients));
      
      alert('Patient registered successfully!');
      this.clearForm();
    },
    clearForm() {
      this.patient = {
        fullName: '',
        age: '',
        gender: '',
        phoneNumber: '',
        nationalId: '',
        address: ''
      };
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-card {
  background-color: #a6a6a6;
  padding: 30px;
  border: 1px solid #000;
  width: 100%;
  max-width: 800px;
}

.form-grid {
  display: flex;
  gap: 40px;
}

.col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.patient-form label {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
}

.patient-form input, .patient-form textarea {
  padding: 8px;
  border: 1px solid #999;
  background-color: #fff;
  margin-bottom: 10px;
}

.full-width {
  margin-top: 10px;
}

.full-width textarea {
  width: 100%;
}

.form-buttons {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.btn-save {
  background-color: #1a5276;
  color: #ffff00;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-clear {
  background-color: #000;
  color: #00ff00;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-print {
  background-color: #4b6239;
  color: #000;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
}

.status-footer {
  background-color: #a6a6a6;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #000;
  font-weight: bold;
  font-size: 1.1em;
  text-align: center;
  width: 100%;
  max-width: 800px;
}
</style>

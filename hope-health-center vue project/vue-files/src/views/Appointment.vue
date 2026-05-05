<template>
  <div class="main-container">
    <div class="appointment-header">
      <div class="date-selector">Select Date: {{ selectedDate }}</div>
      <button @click="showNewAppointmentForm = true" class="new-appointment-btn">New Appointment</button>
    </div>

    <div class="table-container">
      <table class="appointments-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in appointments" :key="appointment.id">
            <td>{{ appointment.time }}</td>
            <td>{{ appointment.patient }}</td>
            <td>{{ appointment.doctor }}</td>
            <td>{{ appointment.status }}</td>
            <td><button @click="editAppointment(appointment)" class="action-link">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-box">
      <h3>Today's Summary</h3>
      <p>Total: {{ summary.total }}</p>
      <p>Pending: {{ summary.pending }}</p>
      <p>Done: {{ summary.done }}</p>
    </div>

    <div class="offline-status">
      Offline Mode ACTIVE
    </div>
  </div>
</template>

<script>
export default {
  name: 'Appointment',
  data() {
    return {
      selectedDate: new Date().toLocaleDateString(),
      showNewAppointmentForm: false,
      appointments: [
        { id: 1, time: '08:00', patient: 'Kevin', doctor: 'Dr.mac', status: 'Pending' },
        { id: 2, time: '09:30', patient: 'Marie', doctor: 'Dr. Alice', status: 'Done' },
        { id: 3, time: '11:00', patient: 'Eric', doctor: 'Dr.alice', status: 'Pending' }
      ]
    }
  },
  computed: {
    summary() {
      const total = this.appointments.length;
      const pending = this.appointments.filter(a => a.status === 'Pending').length;
      const done = this.appointments.filter(a => a.status === 'Done').length;
      return { total, pending, done };
    }
  },
  methods: {
    editAppointment(appointment) {
      alert(`Editing appointment for ${appointment.patient}`);
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
}

.appointment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}

.date-selector {
  background-color: #fff;
  padding: 10px 20px;
  border: 1px solid #000;
  width: 70%;
  font-weight: bold;
}

.new-appointment-btn {
  background-color: #5b9bd5;
  color: #000;
  padding: 10px 20px;
  border: 2px solid #000;
  font-weight: bold;
  cursor: pointer;
}

.table-container {
  background-color: #fff;
  border: 2px solid #000;
}

.appointments-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.appointments-table th {
  background-color: #bfbfbf;
  padding: 12px;
  border: 2px solid #000;
  text-align: left;
}

.appointments-table td {
  padding: 10px;
  border: 1px solid #000;
}

.action-link {
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
}

.summary-box {
  margin-top: 30px;
  background-color: #d9d9d9;
  padding: 20px;
  border: 2px solid #000;
  width: 350px;
}

.summary-box h3 {
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
  padding-bottom: 5px;
}

.summary-box p {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
}

.offline-status {
  margin-top: 30px;
  background-color: #a6a6a6;
  padding: 15px;
  border: 2px solid #000;
  font-weight: bold;
}
</style>

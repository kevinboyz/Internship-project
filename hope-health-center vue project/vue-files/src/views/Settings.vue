<template>
  <div class="main-container">
    <div class="settings-card">
      <h2>Configuration Panel</h2>
      
      <div class="settings-grid">
        <div class="full-row">
          <label>Clinic name:</label>
          <input type="text" v-model="settings.clinicName">
        </div>

        <div class="setting-item">
          <label>Language:</label>
          <select v-model="settings.language">
            <option value="en">English</option>
            <option value="rw">Kinyarwanda</option>
            <option value="fr">French</option>
          </select>
        </div>
        
        <div class="setting-item">
          <label>Printer:</label>
          <select v-model="settings.printer">
            <option value="default">Default Printer</option>
            <option value="hp">HP LaserJet 400</option>
          </select>
        </div>

        <div class="setting-item">
          <label>Auto Backup:</label>
          <select v-model="settings.autoBackup">
            <option value="enable">Enable</option>
            <option value="disable">Disable</option>
          </select>
        </div>
        
        <div class="setting-item">
          <label>Offline Mode:</label>
          <select v-model="settings.offlineMode">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div class="action-buttons">
        <button @click="saveSettings" class="blue-btn">Save Settings</button>
        <button @click="resetSettings" class="blue-btn">Reset to Default</button>
        <button @click="exportSettings" class="blue-btn">Export Config</button>
      </div>
    </div>

    <div class="settings-footer">
      System Ready > Offline System
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      settings: {
        clinicName: 'Hope Health Center',
        language: 'en',
        printer: 'default',
        autoBackup: 'enable',
        offlineMode: 'active'
      }
    }
  },
  mounted() {
    this.loadSettings();
  },
  methods: {
    loadSettings() {
      const savedSettings = localStorage.getItem('clinicSettings');
      if (savedSettings) {
        this.settings = JSON.parse(savedSettings);
      }
    },
    saveSettings() {
      localStorage.setItem('clinicSettings', JSON.stringify(this.settings));
      alert('Settings saved successfully!');
    },
    resetSettings() {
      this.settings = {
        clinicName: 'Hope Health Center',
        language: 'en',
        printer: 'default',
        autoBackup: 'enable',
        offlineMode: 'active'
      };
      alert('Settings reset to defaults!');
    },
    exportSettings() {
      const dataStr = JSON.stringify(this.settings, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = 'clinic_settings.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
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

.settings-card {
  background-color: #a6a6a6;
  padding: 30px;
  border: 1px solid #000;
  width: 100%;
  max-width: 800px;
}

.settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.full-row {
  grid-column: span 2;
}

.setting-item label, .full-row label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.setting-item select, .full-row input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 16px;
}

.action-buttons {
  display: flex;
  gap: 30px;
  margin-top: 40px;
}

.blue-btn {
  width: 120px;
  height: 45px;
  background-color: #5b9bd5;
  border: 1px solid #000;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  font-weight: bold;
  font-size: 14px;
}

.blue-btn:hover {
  background-color: #2c5282;
}

.settings-footer {
  margin-top: 30px;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #000;
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  width: 100%;
  max-width: 800px;
}
</style>

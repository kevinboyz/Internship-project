<template>
  <div class="hope-logo">
    <svg width="60" height="60" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Heart shape background -->
      <path d="M60 25 C45 0, 15 0, 15 30 C15 50, 60 90, 60 90 C60 90, 105 50, 105 30 C105 0, 75 0, 60 25 Z" 
            fill="#ff6b6b" stroke="#d63031" stroke-width="2"/>
      
      <!-- House with red cross -->
      <g transform="translate(35, 35)">
        <!-- House base -->
        <rect x="10" y="15" width="30" height="20" fill="#ffffff" stroke="#2d3436" stroke-width="1.5"/>
        <!-- Roof -->
        <polygon points="5,15 25,0 45,15" fill="#74b9ff" stroke="#2d3436" stroke-width="1.5"/>
        <!-- Door -->
        <rect x="20" y="25" width="10" height="10" fill="#636e72"/>
        <!-- Red cross on house -->
        <rect x="23" y="8" width="4" height="14" fill="#e74c3c"/>
        <rect x="18" y="11" width="14" height="4" fill="#e74c3c"/>
      </g>
      
      <!-- Supporting hands -->
      <g transform="translate(60, 60)">
        <!-- Left hand -->
        <ellipse cx="-20" cy="5" rx="15" ry="8" fill="#0984e3" opacity="0.8"/>
        <!-- Right hand -->
        <ellipse cx="20" cy="5" rx="15" ry="8" fill="#0984e3" opacity="0.8"/>
      </g>
      
      <!-- Medical symbols -->
      <g transform="translate(60, 75)">
        <circle cx="-15" cy="0" r="3" fill="#ffffff" opacity="0.9"/>
        <circle cx="0" cy="0" r="3" fill="#ffffff" opacity="0.9"/>
        <circle cx="15" cy="0" r="3" fill="#ffffff" opacity="0.9"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HopeLogo'
}
</script>

<style scoped>
.hope-logo {
  display: inline-block;
}

.hope-logo svg {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  transition: transform 0.3s ease;
}

.hope-logo svg:hover {
  transform: scale(1.05);
}
</style>

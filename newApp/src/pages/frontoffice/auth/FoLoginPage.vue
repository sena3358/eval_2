<script setup>
import FoLoginForm from '../../../components/frontoffice/auth/FoLoginForm.vue'
</script>

<template>
  <div class="auth-page min-vh-100 d-flex align-items-center justify-content-center p-3">
    <div class="auth-container">
      <!-- Decoration Background -->
      <div class="auth-blob auth-blob-1"></div>
      <div class="auth-blob auth-blob-2"></div>

      <div class="card border-0 shadow-xl overflow-hidden glass-card">
        <div class="card-body p-4 p-md-5 position-relative">
          <div class="text-center mb-5">
            <div class="brand-icon-wrapper mb-4">
              <div class="brand-icon">
                <i class="bi bi-headset"></i>
              </div>
            </div>
            <h1 class="h3 fw-bold mb-1 text-dark">Espace Utilisateur</h1>
            <p class="text-muted small px-4">
              Connectez-vous pour gérer vos équipements et déclarer vos incidents.
            </p>
          </div>

          <FoLoginForm />

          <footer class="mt-5 text-center">
            <p class="text-muted smaller mb-0">&copy; 2026 Portal GLPI v11 - Support Technique</p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  background-color: #f8fafc;
  background-image: 
    radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.05) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.05) 0px, transparent 50%);
  position: relative;
  overflow: hidden;
}

.auth-container {
  width: 100%;
  max-width: 440px;
  position: relative;
  z-index: 1;
}

.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: 24px;
}

.brand-icon-wrapper {
  display: flex;
  justify-content: center;
}

.brand-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 18px;
  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
}

.auth-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%);
  filter: blur(60px);
  border-radius: 50%;
  z-index: -1;
}

.auth-blob-1 {
  top: -100px;
  right: -100px;
}

.auth-blob-2 {
  bottom: -100px;
  left: -100px;
}

.smaller {
  font-size: 0.75rem;
}
</style>

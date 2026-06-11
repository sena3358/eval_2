<script setup>
import LoginForm from '../../components/auth/LoginForm.vue'
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <div class="card border-0 shadow-lg">
          <div class="card-body p-4 p-md-5">
            <div class="text-center mb-4">
              <div
                class="d-inline-flex align-items-center justify-content-center mb-3 rounded-4 bg-primary text-white shadow-sm p-3"
              >
                <i class="bi bi-shield-lock fs-3"></i>
              </div>
              <h1 class="h4 fw-semibold mb-1">Console d'administration</h1>
              <p class="text-muted small mb-0">
                Connexion via le compte GLPI
              </p>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

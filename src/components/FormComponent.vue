<template>
    <div class="formUsuarios container mb-5">
      <h4 class="text-center">Nuevo Usuarios</h4>
      <div class="row">
        <form class="col-4 mx-auto" @submit.prevent="agregar">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" required v-model="usuario.nombre">
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="lastname" required v-model="usuario.apellido">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required v-model="usuario.email">
          </div>
          <button type="submit" class="btn btn-success">Agregar usuario</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'FormComponent',
    data: function () {
      return {
        usuario: {
          nombre: '',
          apellido: '',
          email: ''
        }
      }
    },
    computed: {
      ...mapState(['usuarios'])
    },
    methods: {
      ...mapActions(['agregarUsuarios']),
      async agregar() {
        await this.agregarUsuarios(this.usuario)
        this.usuario = { nombre: '', apellido: '', email: '' }
      }
    },
  }
  </script>
  
  <style scoped></style>
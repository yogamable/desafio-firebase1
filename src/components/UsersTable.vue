<template>
    <table class="table">
  <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Email</th>
        <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
        <td>{{ index + 1 }}</td>
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.apellido }}</td>
        <td>{{ usuario.email }}</td>
        <td>
          <button class="btn btn-danger" @click="eliminarUsuarios(usuario.id)">Eliminar</button>
        </td>
    </tr>
  </tbody>
</table>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'UserTable',
    data(){
        return {

        }
    },
    computed: {
        ...mapState(["usuarios"])
    },
    methods: {
        ...mapActions(["eliminarUsuarios"])
    }
}
</script>
<template>
  <div class="home">
    <h1>Home</h1>
    <FormComponent />
    <UsersTable />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import UsersTable from '@/components/UsersTable.vue';
import FormComponent from '@/components/FormComponent.vue';

export default {
  name: 'HomeView',
  methods: {
    ...mapActions(["setUsuarios"])
  },
  components: {
  UsersTable,
  FormComponent,
  },
  mounted() {
    this.setUsuarios();
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="pt-10 px-4">
    <div class="max-w-screen-xl items-center justify-between mx-auto p-4">
      <h1 class="font-bold text-left mb-10 text-2xl">Complete the form to add new property for listing</h1>
      <AddNewPropertyForm />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AddNewPropertyForm from '@/components/AddNewPropertyForm.vue';

export default defineComponent({
  name: 'AddPropertyView',
  components: {
    AddNewPropertyForm,
  },
});
</script>
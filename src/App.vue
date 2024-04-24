<template>
  <CustomHeader/>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CustomHeader from '@/components/layouts/CustomHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    CustomHeader,
  },
});
</script>
<template>
  <div class="pt-6 flex justify-center">
    <span v-if="properties && properties.length === 0" class="text-xl font-medium">No Properties</span>
    <PropertyContainer v-else :properties="properties" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import properties from '@/utils/properties';
import PropertyContainer from '@/components/PropertyContainer.vue';
import { useStore } from '@/store/store';

export default defineComponent({
  name: 'HomeView',
  components: {
    PropertyContainer,
  },
  setup() {
    const store = useStore(); 

    // Define a reactive variable to store the errors
    const store_properties = ref(store.properties);
    store_properties.value = properties
    // Watch for changes in the errors object
    watch(() => store.properties, (newProperties) => {
        // Assign the new value of propertyFormErrors to the errors variable
        store_properties.value = newProperties;
    });

    const getProperties = async () => {
      await store.fetchProperties();
    };

    return {
      properties: store_properties,
      store,
      getProperties,
    };
  },
  beforeMount() {
    this.getProperties();
  },
});
</script>

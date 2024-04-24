<template>
  <div class="flex justify-center max-w-screen-xl">
    <div class="flex flex-col space-y-4 lg:w-1/2 md:w-10/12 w-full ">
      <TextInput :error="errors.address" name="address" label="Property Address" v-model="newProperty.address" :required="true" placeholder="Enter address" />
      <Textarea :error="errors.description" name="description" label="Property Description" v-model="newProperty.description" :required="true" placeholder="Enter description" :rows=8 />
      <TextInput :error="errors.price" name="price" label="Property Price" v-model="newProperty.price" type="number" :required="true" placeholder="Enter price" />
      <SelectInput :error="errors.status" name="status" label="Property Status" v-model="newProperty.status" :required="true" :options="propertyStatusOptions" placeholder="Property Status" />
      <button @click="addNewProperty" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">{{ Object.values(store.selectedProperty).length > 0 ? 'Edit Property' : 'Add Property' }} </button>
    </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useStore } from '@/store/store';
import TextInput from '@/components/form/TextInput.vue';
import SelectInput from '@/components/form/SelectInput.vue';
import Textarea from '@/components/form/Textarea.vue';
import { propertyStatusOptions } from '@/utils/properties';
  
export default defineComponent({
  components: {
    TextInput,
    SelectInput,
    Textarea,
  },

  setup() {
    const store = useStore();

    // Define a reactive variable to store the errors
    const errors = ref(store.propertyFormErrors);


    store.handleSelectedPropertyOnEdit();

    // Watch for changes in the errors object
    watch(() => store.propertyFormErrors, (newErrors) => {
      // Assign the new value of propertyFormErrors to the errors variable
      errors.value = newErrors;
    });

    const addNewProperty = async () => {
      // Call addProperty action
      await store.addProperty();
    };

    return {
      newProperty: store.newProperty,
      propertyStatusOptions,
      addNewProperty,
      errors,
      store,
    };
  },
  beforeUnmount() {
    this.store.resetSelectedProperty();
  },
});
</script>
<template>
    <div class="max-w-7xl">
      <div class="flex lg:flex-row flex-col  w-full justify-center items-center">
        <div>
          <TextInput class="max-w-64" name="search" label="Search property by address..." v-model="searchQuery"  placeholder="Enter address" />
        </div>
        <div>
          <SelectInput class="max-w-64" name="status" label="Filter by property status" v-model="selectedStatus"  :options="propertyStatusOptions" placeholder="Property Status" />
        </div>
        <div>
          <SelectInput class="max-w-64" name="status" label="Filter by property status" v-model="sort"  :options="sortOptions" placeholder="Property Status" />
        </div>
      </div>
      <div v-if="properties && properties.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center p-4">
        <PropertyCard
          v-for="(property, index) in displayedProperties"
          :key="property.id"
          :property="property"
        />
      </div>
      
      <PropertyModal v-if="Object.values(selectedProperty).length > 0" :property="selectedProperty"/>
      
      <div v-if="pages > 1" class="flex justify-center mt-4">
        <button @click="currentPage--" :disabled="currentPage === 1" class="px-4 py-2 mx-2 bg-blue-700 text-white rounded-md cursor-pointer">Previous</button>
        <button @click="currentPage++" :disabled="currentPage === pages" class="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md cursor-pointer">Next</button>
      </div>
    </div>
  </template>
  
<script lang="ts">
    import { defineComponent, computed, ref, watch } from 'vue';
    import PropertyCard from '@/components/PropertyCard.vue';
    import PropertyModal from '@/components/PropertyModal.vue';
    import Property from '@/store/store';
    import { useStore } from '@/store/store';
    import TextInput from './form/TextInput.vue';
    import SelectInput from './form/SelectInput.vue';
    import { propertyStatusOptions, sortOptions } from '@/utils/properties';

    export default defineComponent({
        name: 'PropertyContainer',
        components: {
            PropertyCard,
            PropertyModal,
            TextInput,
            SelectInput,
        },
        props: {
            properties: {
                type: Array as () => Property[],
                required: true,
            },
        },
        setup(props) {
            const store = useStore();

            // Define a reactive variable to store the errors
            const selectedProperty = ref(store.selectedProperty);

            // Watch for changes in the errors object
            watch(() => store.selectedProperty, (newSelectedProperty) => {
                // Assign the new value of propertyFormErrors to the errors variable
                selectedProperty.value = newSelectedProperty;
            });

            const screenWidth = ref(window.innerWidth);
    
            window.addEventListener('resize', () => {
                screenWidth.value = window.innerWidth;
            });
    
            const itemsPerPage = computed(() => {
                if (screenWidth.value < 768) { // Mobile screens
                  return 2;
                } else if (screenWidth.value >= 768 && screenWidth.value < 1280) { // Tablets
                  return 6;
                } else { // Other screens
                  return 8;
                }
            });
    
            const currentPage = ref(1);
            const sort = ref('');
            const searchQuery = ref('');
            const selectedStatus = ref('');

            const displayedProperties = computed(() => {
                let tempProperties = props.properties;
                
                // Filter properties based on the search query
                if (searchQuery.value.trim() !== '') {
                  tempProperties = props.properties.filter(property => property.address.toLowerCase().includes(searchQuery.value.toLowerCase()));
                }

                // Filter properties based on the selected status
                if (selectedStatus.value !== '') {
                  tempProperties = tempProperties.filter(property => property.status === selectedStatus.value);
                }

                if (sort.value === 'asc') {
                  tempProperties = tempProperties.sort((a, b) => a.price - b.price);
                }
                if (sort.value === 'desc'){
                  tempProperties = tempProperties.sort((a, b) => b.price - a.price);
                }

                const startIndex = (currentPage.value - 1) * itemsPerPage.value;
                const endIndex = startIndex + itemsPerPage.value;
                return tempProperties.slice(startIndex, endIndex);
            });
    
            const pages = computed(() => Math.ceil(props.properties.length / itemsPerPage.value));
    
            return {
                currentPage,
                displayedProperties,
                pages,
                selectedProperty,
                sort,
                searchQuery,
                selectedStatus,
                propertyStatusOptions,
                sortOptions
            };
        },
    });
  </script>
  
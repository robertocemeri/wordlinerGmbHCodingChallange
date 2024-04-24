
<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between  min-h-64">
        <div class="flex flex-col">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{{ property.address }} </h5> <span class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white ">{{ Number(property.price).toFixed(2)+ ' €' }}</span>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ property.description }}</p>
        </div>
        <div class="flex justify-center space-x-2">
            <button @click="setSelectProperty(property)" class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
                <EyeIcon class="w-4 h-4 ml-1 text-white" />
            </button>
            <button @click="deleteProperty(property.id)" class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
                <TrashIcon class="w-4 h-4 ml-1 text-white" />
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore } from '@/store/store';
    import { EyeIcon, TrashIcon } from '@heroicons/vue/24/outline';
    import Property from '@/store/store';  

    export default defineComponent({
        name: 'PropertyCard',
        components: {
            EyeIcon,
        TrashIcon,
        },
        props: {
        property: {
            type: Object as () => Property,
            required: true,
        },
        },
        setup() {
            const store = useStore();
    
            const deleteProperty = async (id: number) => {
                // Call deleteProperty action
                await store.deleteProperty(id);
            };

            const setSelectProperty = (property: Property) => {
                // Call setSelectProperty action
                store.setSelectedProperty(property);
            };

            return {
                deleteProperty,
                setSelectProperty
            };
        },
    });
</script>
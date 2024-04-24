
<template>
      <div class="fixed inset-0 z-50 bg-slate-900/25 backdrop-blur transition-opacity opacity-100">
        <div class="flex overflow-y-auto overflow-x-hidden  top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 relative">
                        <div class="text-xl font-semibold text-gray-900 dark:text-white pr-20 flex justify-between w-full">
                            {{ Number(property.price).toFixed(2) +' €' }} <span>{{ property.status }} </span>
                        </div>
                        <button @click="resetSelectedProperty" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white absolute top-4 right-4 md:top-4 md:right-5">
                            <svg class="w-3 h-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            {{ property.address }}
                        </h3>
                        <p class="text-base leading-relaxed text-white dark:text-gray-400">
                            {{ property.description }}
                        </p>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <RouterLink :to="{ name: 'add' }" class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Edit
                            <PencilIcon class="w-4 h-4 ml-1 text-white" />
                        </RouterLink>
                        <button @click="deleteProperty(property.id)" class="cursor-pointer inline-flex ms-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Delete
                            <TrashIcon class="w-4 h-4 ml-1 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore } from '@/store/store';
    import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
    import Property from '@/store/store';  

    export default defineComponent({
        name: 'PropertyModal',
        components: {
            PencilIcon,
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

            const setSelectProperty = () => {
                // Call setSelectProperty action
                store.setSelectedProperty({} as Property);
            };

            return {
                deleteProperty,
                resetSelectedProperty: store.resetSelectedProperty,
            };
        },
    });
</script>
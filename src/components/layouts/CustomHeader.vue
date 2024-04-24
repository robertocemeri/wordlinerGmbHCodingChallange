<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse" >
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Re/max</span>
      </router-link>

      <button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="h-6 w-6 text-white" />
      </button>
      <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-y-0 space-y-2">
          <li>
            <router-link to="/" :class="{ 'text-blue-700': $route.path === '/' }" class="py-2 px-3 text-white" >Home</router-link>
          </li>
          <li>
            <router-link to="/add" :class="{ 'text-blue-700': $route.path === '/add' }" class="py-2 px-3 text-white  " >Add New</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Bars3Icon } from '@heroicons/vue/24/outline'
  
  export default defineComponent({
    name: 'CustomHeader',
    components: {
      Bars3Icon,
    },
    setup() {
      const isMenuOpen = ref(false);

      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };

      return {
        isMenuOpen,
        toggleMenu
      };
    }
  });
</script>

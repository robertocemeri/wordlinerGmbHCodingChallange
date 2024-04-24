<template>
    <label v-if="label" class="text-left font-medium">{{ label }}</label>
    <select
      v-model="model"
      @change="updateSelected"
      v-bind="$attrs"
      class=" w-full rounded border py-3 px-5 text-black"
    >
      <option :value="''" >{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :selected="option.value === $attrs.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if="error" class="text-red-500">{{ error }}</div>
  </template>
  
  <script>
  import { useStore } from '@/store/store';
  import { computed, ref} from 'vue'; 

  export default {
    name: "SelectInput",
    setup(props, { emit }) {
      const store = useStore();
      const selected = ref(props.modelValue === false ? false : true);

      const model = computed({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value),
      });
      return { model, selected };
    },
    inheritAttrs: false,
    props: {
      selectedValue: String,
      options: Array,
      error: String,
      label: String,
      placeholder: String,
      modelValue: {
        default: false,
      },
    },
    methods: {
      updateSelected() {
        this.selected = this.model === false ? false : true;
      },
    },
  };
  </script>

  
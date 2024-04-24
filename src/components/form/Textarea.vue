<template>
  <label v-if="label" class="text-left font-medium">{{ label }}</label>
  <textarea 
    v-model="model"
    v-bind="$attrs" 
    :placeholder="placeholder" 
    :required="required" 
    :rows="rows"
    class="form-input w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-primary-default outline-none transition focus:border-primary-default active:border-primary-default disabled:cursor-default disabled:bg-whiter" :class="error && 'border-red-500'"  />
  <div v-if="error" class="text-red-500">{{ error }}</div>
</template>

<script>
import { useStore } from '@/store/store';
import { computed } from 'vue'; 

export default {
  name: "Textarea",
  setup(props, { emit }) {
    const store = useStore();

    const model = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { model };
  },
  inheritAttrs: false,
  props: {
    placeholder: String,
    required: Boolean,
    error: String,
    label: String,
    rows: Number,
    modelValue: {
      default: false,
    },
  },
};
</script>
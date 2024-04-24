<template>
  <label v-if="label" class="text-left font-medium">{{ label }}</label>
  <input
      v-model="model"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="form-input w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-primary-default outline-none transition focus:border-primary-default active:border-primary-default disabled:cursor-default disabled:bg-whiter" :class="error && 'border-red-500'"
    />
  <div v-if="error" class="text-red-500">{{ error }}</div>
</template>

<script>
import { useStore } from '@/store/store';
import { computed } from 'vue'; 

export default {
  name: "TextInput",
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
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    required: Boolean,
    error: String,
    label: String,
    disabled: Boolean,
    modelValue: {
      default: false,
    },
  },
};
</script>

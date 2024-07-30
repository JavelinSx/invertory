<template>
    <div class="number-input">
        <input type="number" :value="modelValue" @input="updateValue" :min="min" :max="max"
            @keyup.enter="$emit('enter')">
    </div>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: number;
    min?: number;
    max?: number;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void;
    (e: 'enter'): void;
}>();

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', parseInt(target.value));
};
</script>

<style scoped lang="scss">
.number-input {
    input {
        width: 90%;
        padding: 8px 12px;
        border: 1px solid var(--border-bg);
        border-radius: 4px;
        font-size: 16px;
        color: var(--text-color);
        background-color: var(--bg-color);
        transition: border-color 0.3s ease;

        &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.2);
        }

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type=number] {
            -moz-appearance: textfield;
        }
    }
}
</style>
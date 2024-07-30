<template>
    <button @click="toggleTheme" class="theme-toggle">
        Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Theme
    </button>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped lang="scss">
.theme-toggle {
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    background-color: var(--button-bg);
    color: var(--button-text);
    transition: background-color 0.3s, color 0.3s;
}
</style>
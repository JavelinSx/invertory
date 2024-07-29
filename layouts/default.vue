<template>
    <div class="theme-wrapper">
        <button @click="toggleTheme" class="theme-toggle">
            Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Theme
        </button>
        <div class="layout-default">
            <div class="content">
                <div class="card">
                    <Skeletor type="rect" class="skeletor-card-image" width="200" height="240" />
                    <Skeletor type="text" class="skeletor-card-title" width="190" height="26" />
                    <Skeletor type="text" class="skeletor-card-title" width="155" height="10" />
                    <Skeletor type="text" class="skeletor-card-title" width="190" height="10" />
                    <Skeletor type="text" class="skeletor-card-title" width="170" height="10" />
                    <Skeletor type="text" class="skeletor-card-title" width="160" height="10" />
                    <Skeletor type="text" class="skeletor-card-title" width="140" height="10" />
                    <Skeletor type="text" class="skeletor-card-title" width="80" height="10" />
                </div>
                <div class="inventory">
                    <slot />
                </div>
            </div>
            <footer>
                <Skeletor type="text" class="skeletor-footer" />
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { watch } from 'vue'

const { theme, toggleTheme } = useTheme()

watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
})
</script>

<style scoped lang="scss">
.theme-wrapper {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
}

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

.layout-default {
    display: flex;
    flex-direction: column;
}

.content {
    display: flex;
    flex-grow: 1;
    padding: 20px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 236px;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--card-bg);
    transition: background-color 0.3s;

    :deep(.vue-skeletor) {
        margin-bottom: 10px;
        border-radius: 8px;
        background-color: var(--skeleton-bg);
    }

    .skeletor-card-image {
        display: block;
    }

    .skeletor-card-title {
        height: 26px;
        width: 80%;
    }
}

.inventory {
    flex-grow: 1;
    margin-left: 20px;
}

footer {
    margin-top: 24px;
    padding: 18px;
    background-color: var(--footer-bg);
    transition: background-color 0.3s;

    :deep(.vue-skeletor) {
        background-color: var(--skeleton-bg);
    }
}
</style>
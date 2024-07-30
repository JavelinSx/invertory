<template>
    <div class="theme-wrapper">
        <ThemeToggle />
        <button @click="addRandomItem" class="add-item-btn">
            Add Random Item
        </button>
        <SortingOptions />
        <div class="layout-default">
            <div class="content">
                <CardSkeleton />

                <div class="inventory">

                    <slot />
                </div>
            </div>
            <FooterSkeleton />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import { watch } from 'vue'
import { useInventoryStore } from '@/store/invetory'
import ThemeToggle from '~/components/ThemeToggle.vue'
import CardSkeleton from '~/components/CardSkeleton.vue'
import FooterSkeleton from '~/components/FooterSkeleton.vue'
import SortingOptions from '~/components/SortingOptions.vue'
import type { ItemType, Rare } from '@/types/item'

const { theme } = useTheme()
const store = useInventoryStore()

watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
})

const addRandomItem = () => {
    const types: ItemType[] = ['green', 'purple', 'orange']
    const rare: Rare[] = ['default', 'silver', 'gold', 'epic']
    const randomType = types[Math.floor(Math.random() * types.length)]
    const randomRare = rare[Math.floor(Math.random() * rare.length)]
    const randomCount = Math.floor(Math.random() * 99) + 1
    const randomTitle = `Item ${Math.floor(Math.random() * 1000)}`
    const randomDescription = `This is a ${randomType} item with ${randomCount} units.`

    store.addItem({
        type: randomType,
        rare: randomRare,
        count: randomCount,
        title: randomTitle,
        description: randomDescription,
    })
}
</script>

<style scoped lang="scss">
.theme-wrapper {
    background-color: var(--bg-color);
    color: var(--text-color);
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

.inventory {
    flex-grow: 1;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

.add-item-btn {
    margin-left: 10px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    background-color: var(--button-bg);
    color: var(--button-text);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.98);
    }
}
</style>
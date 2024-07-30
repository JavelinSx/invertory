<template>
    <div class="sorting-options">
        <label for="sort-select">Сортировать:</label>
        <select id="sort-select" v-model="selectedSort" @change="sortItems">
            <option value="name">Имя</option>
            <option value="rarity">Уникальность</option>
            <option value="count">Количество</option>
        </select>
        <button @click="toggleOrder" class="order-toggle">
            {{ isAscending ? '↑' : '↓' }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInventoryStore } from '@/store/invetory'

const store = useInventoryStore()
const selectedSort = ref('name')
const isAscending = ref(true)

const sortItems = () => {
    store.sortItems(selectedSort.value, isAscending.value)
}

const toggleOrder = () => {
    isAscending.value = !isAscending.value
    sortItems()
}
</script>

<style scoped lang="scss">
.sorting-options {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;

    label {
        margin-right: 10px;
    }

    select {
        padding: 10px;
        border-radius: 4px;
        background-color: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--border-bg);
    }

    .order-toggle {
        margin-left: 10px;
        padding: 5px 10px;
        background-color: var(--button-bg);
        color: var(--button-text);
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
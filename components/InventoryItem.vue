<template>
    <div class="inventory-item" :class="item.type">
        <span class="item-count">{{ item.count }}</span>
        <span class="item-title">{{ item.title }}</span>
    </div>
</template>

<script setup lang="ts">
import type { Item } from '@/types/item';

defineProps<{
    item: Item;
}>();
</script>

<style scoped lang="scss">
.inventory-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.green {
        background-color: rgba(0, 255, 0, 0.2);
    }

    &.purple {
        background-color: rgba(128, 0, 128, 0.2);
    }

    &.orange {
        background-color: rgba(255, 165, 0, 0.2);
    }
}

.item-count {
    font-size: 1.2em;
    font-weight: bold;
}

.item-title {
    font-size: 0.8em;
}
</style>
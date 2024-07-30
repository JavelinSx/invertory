<template>
    <div class="inventory-item" :class="[`item-type-${item.type}`, `item-rare-${item.rare}`]">
        <div class="item-icon">
            <ItemIcon :fill-color="getFillColor()" />
        </div>
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-count">{{ item.count }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Item } from '~/types/item';
import ItemIcon from './ItemIcon.vue';

const props = defineProps<{
    item: Item;
}>();

const getFillColor = () => {
    switch (props.item.rare) {
        case 'default': return '#c8c8c8';
        case 'silver': return '#c0c0c0';
        case 'gold': return '#ffd700';
        case 'epic': return '#8a2be2';
        default: return '#c8c8c8';
    }
};
</script>

<style scoped lang="scss">
.inventory-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.3s ease;
    height: 100%;

    .item-icon {
        width: 55px;
        height: 55px;
        margin-right: 8px;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(0.95);
        }
    }

    .item-info {
        flex-grow: 1;
    }

    .item-title {
        font-size: 14px;
        margin: 0;
        font-weight: bold;
    }

    .item-count {
        position: absolute;
        border-left: 1px solid var(--border-bg);
        border-top: 1px solid var(--border-bg);
        border-top-left-radius: 12px;
        padding: 5px;
        padding-left: 7px;
        padding-top: 7px;
        bottom: 0;
        right: 0;
        font-size: 12px;
        margin: 0;
        opacity: 0.7;
    }

    // Стили для редкости предметов
    .item-rare-default {
        background-color: rgba(200, 200, 200, 0.1);
        fill: #c8c8c81a;
    }

    .item-rare-silver {
        background-color: rgba(192, 192, 192, 0.2);
        box-shadow: 0 0 5px rgba(192, 192, 192, 0.5);
        fill: #c0c0c033;
    }

    .item-rare-gold {
        background-color: rgba(255, 215, 0, 0.2);
        box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
        fill: #ffd70033;
    }

    .item-rare-epic {
        background-color: rgba(138, 43, 226, 0.2);
        box-shadow: 0 0 12px rgba(138, 43, 226, 0.5);
        fill: #8a2be233;
    }
}
</style>
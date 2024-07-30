<template>
    <div class="item-details">
        <ItemSkeleton />
        <ItemActions :is-action="isAction" :item="item" @update="$emit('update')" @cancel="$emit('cancel')"
            @submit="handleSubmit" @remove="$emit('remove', item.id)" />
        <Button :button="{ type: 'close' }" class="btn-close" @click="$emit('close')" />
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import ItemSkeleton from './ItemSkeleton.vue';
import ItemActions from './ItemActions.vue';
import type { Item } from '@/types/item';

const props = defineProps<{
    item: Item;
    isAction: boolean;
}>();

const emit = defineEmits<{
    (e: 'remove', id: string): void;
    (e: 'close'): void;
    (e: 'update'): void;
    (e: 'cancel'): void;
    (e: 'submit', count: number): void;
}>();

const handleSubmit = (count: number) => {
    emit('submit', count);
};
</script>

<style scoped lang="scss">
.item-details {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--bg-color);
    border: 1px solid var(--border-bg);
    border-top-right-radius: 12px;
    padding: 20px;
    z-index: 1000;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-close {
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>
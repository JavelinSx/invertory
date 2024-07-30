<template>
    <div class="item-actions">
        <Button v-if="!isAction" :button="{ type: 'update', text: 'Изменить количество' }" @click="$emit('update')" />
        <ItemChangeForm v-else :initial-count="item.count" @submit="handleSubmit" @cancel="$emit('cancel')" />
        <Button :button="{ type: 'remove', text: 'Удалить предмет' }" @click="$emit('remove', item.id)"
            class="btn-remove" />
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import ItemChangeForm from './ItemChangeForm.vue';
import type { Item } from '@/types/item';

defineProps<{
    item: Item;
    isAction: boolean;
}>();

const emit = defineEmits<{
    (e: 'update'): void;
    (e: 'cancel'): void;
    (e: 'submit', count: number): void;
    (e: 'remove', id: string): void;
}>();

const handleSubmit = (count: number) => {
    emit('submit', count);
};
</script>

<style scoped lang="scss">
.item-actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
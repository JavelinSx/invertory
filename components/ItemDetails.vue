<template>
    <div class="item-details">
        <Skeletor type="rect" class="skeletor-item-image" width="150" height="150" />
        <span class="divider"></span>
        <Skeletor type="text" class="skeletor-item-title" width="210" height="30" />
        <Skeletor type="text" class="skeletor-item-text" width="100%" height="10" />
        <Skeletor type="text" class="skeletor-item-text" width="100%" height="10" />
        <Skeletor type="text" class="skeletor-item-text" width="100%" height="10" />
        <Skeletor type="text" class="skeletor-item-text" width="180" height="10" />
        <Skeletor type="text" class="skeletor-item-text" width="80" height="10" />
        <span class="divider"></span>
        <div class="item-button-container">
            <Button v-if="!isAction" :button="{ type: 'update', text: 'Изменить количество' }"
                @click="$emit('update')"></Button>
            <div v-if="isAction" class="item-change-form">
                <input type="text">
                <div class="item-change-form__btn-group">
                    <Button :button="{ type: 'submit', text: 'Подтвердить' }"
                        @click="$emit('submit', item.count)"></Button>
                    <Button :button="{ type: 'cancel', text: 'Отмена' }" @click="$emit('cancel')"></Button>
                </div>
            </div>

            <Button :button="{ type: 'remove', text: 'Удалить предмет' }" @click="$emit('remove', item.id)"
                class="btn-remove"></Button>
        </div>

        <Button :button="{ type: 'close' }" class="btn-close" @click="$emit('close')"></Button>
    </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import type { Item } from '@/types/item';

defineProps<{
    item: Item;
    isAction: boolean;
}>();

defineEmits<{
    (e: 'remove', id: string): void;
    (e: 'close'): void;
    (e: 'update'): void;
    (e: 'cancel'): void;
    (e: 'submit', count: number): void;
}>();
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

.item-button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item-change-form {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.item-change-form__btn-group {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.divider {
    width: 90%;
    height: 1px;
    border-radius: 100%;
    opacity: .4;
    background-color: var(--border-bg);
    margin-bottom: 16px;
}

.vue-skeletor {
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: var(--skeleton-bg);
}

.skeletor-item-image {
    margin-top: 55px;
    margin-bottom: 30px;
}

.skeletor-item-title {
    margin-bottom: 24px;
}

.skeletor-item-text {
    margin-bottom: 16px;
}

.btn-close {
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>
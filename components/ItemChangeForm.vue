<template>
    <div class="item-change-form">
        <NumberInput v-model="newCount" :min="1" :max="999" @enter="submitForm" />
        <div class="item-change-form__btn-group">
            <Button :button="{ type: 'submit', text: 'Подтвердить' }" @click="submitForm" />
            <Button :button="{ type: 'cancel', text: 'Отмена' }" @click="$emit('cancel')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Button from './Button.vue';
import NumberInput from './NumberInput.vue';

const props = defineProps<{
    initialCount: number;
}>();

const emit = defineEmits<{
    (e: 'submit', count: number): void;
    (e: 'cancel'): void;
}>();

const newCount = ref(props.initialCount);

watch(() => props.initialCount, (newValue) => {
    newCount.value = newValue;
});

const submitForm = () => {
    if (newCount.value >= 1 && newCount.value <= 999) {
        emit('submit', newCount.value);
    }
};
</script>

<style scoped lang="scss">
.item-change-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.item-change-form__btn-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>
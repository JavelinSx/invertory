<template>
    <button :class="['btn', `btn-${button.type}`]" :type="button.type === 'submit' ? 'submit' : 'button'">
        <template v-if="button.type === 'close'">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
        </template>
        <template v-else>
            {{ button.text || button.type }}
        </template>
    </button>
</template>

<script setup lang="ts">
import type { IButton } from '~/types/button';

defineProps<{
    button: IButton;
}>();
</script>

<style lang="scss" scoped>
.btn {
    width: 100%;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &-submit {
        background-color: #4CAF50;
        color: white;
    }

    &-remove {
        background-color: #f44336;
        color: white;
    }

    &-cancel {
        background-color: var(--text-color);
        color: var(--bg-color);
    }

    &-close {
        background-color: inherit;
        color: var(--bg-color);
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .line {
        display: block;
        width: 20px;
        height: 2px;
        background-color: var(--text-color);
        position: absolute;

        &-1 {
            transform: rotate(45deg);
        }

        &-2 {
            transform: rotate(-45deg);
        }
    }

    .close-icon {
        font-size: 24px;
        line-height: 1;
    }
}
</style>
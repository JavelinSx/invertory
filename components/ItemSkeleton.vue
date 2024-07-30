<template>
    <div class="item-skeleton">
        <Skeletor type="rect" class="skeletor-item-image" width="150" height="150" />
        <span class="divider"></span>
        <Skeletor type="text" class="skeletor-item-title" width="210" height="30" />
        <Skeletor v-for="i in 5" :key="i" type="text" class="skeletor-item-text" :width="getTextWidth(i)" height="10" />
        <span class="divider"></span>
    </div>
</template>

<script setup lang="ts">
const getTextWidth = (index: number) => {
    if (index <= 3) return '100%';
    if (index === 4) return '180px';
    return '80px';
};
</script>

<style scoped lang="scss">
.item-skeleton {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>
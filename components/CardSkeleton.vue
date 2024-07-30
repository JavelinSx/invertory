<template>
    <div class="card">
        <Skeletor type="rect" class="skeletor-card-image" width="200" height="240" />
        <Skeletor type="text" class="skeletor-card-title" width="190" height="26" />
        <Skeletor v-for="i in 6" :key="i" type="text" class="skeletor-card-title" :width="getTextWidth(i)"
            height="10" />
    </div>
</template>

<script setup lang="ts">
const getTextWidth = (index: number) => {
    const widths = [155, 190, 170, 160, 140, 80]
    return `${widths[index - 1]}px`
}
</script>

<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 236px;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--card-bg);
    transition: background-color 0.3s;
    border: 1px solid var(--border-bg);

    :deep(.vue-skeletor) {
        margin-bottom: 10px;
        border-radius: 8px;
        background-color: var(--skeleton-bg);
    }

    .skeletor-card-image {
        display: block;
    }

    .skeletor-card-title {
        height: 26px;
        width: 80%;
    }
}
</style>
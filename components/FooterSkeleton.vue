<template>
    <footer>
        <Skeletor type="text" class="skeletor-footer" />
    </footer>
</template>

<style scoped lang="scss">
footer {
    margin-top: 24px;
    padding: 18px;
    background-color: var(--footer-bg);
    transition: background-color 0.3s;
    border-radius: 12px;
    border: 1px solid var(--border-bg);

    :deep(.vue-skeletor) {
        background-color: var(--skeleton-bg);
    }
}
</style>
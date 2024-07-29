<template>
  <button @click="addRandomItem">
    Add Random Item
  </button>
  <VueDraggableNext class="inventory-grid" v-model="items" item-key="id" @end="onDragEnd">

    <div v-for="element in items" class="inventory-slot">
      <InventoryItem v-if="element" :item="element" @click="showDetails(element)" />
      <div v-else class="empty-slot">Empty</div>
    </div>
    <ItemDetails v-if="selectedItem" :item="selectedItem" @close="selectedItem = null" @remove="removeItemFromInventory"
      @update="toggleAction" @cancel="toggleAction" @submit="changeItemInfo" :isAction="itemIsAction" />
  </VueDraggableNext>



</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { useInventoryStore } from '@/store/invetory';
import InventoryItem from './InventoryItem.vue';
import ItemDetails from './ItemDetails.vue';
import type { Item, ItemType } from '@/types/item';

const store = useInventoryStore();
const items = computed(() => store.items);
const selectedItem = ref<Item | null>(null);
const itemIsAction = ref(false)
const showDetails = (item: Item) => {
  selectedItem.value = item;
};

const removeItemFromInventory = (itemId: string) => {
  const index = store.items.findIndex(item => item?.id === itemId);
  if (index !== -1) {
    store.removeItem(index);
  }
  selectedItem.value = null;
};

const toggleAction = () => {
  itemIsAction.value = !itemIsAction.value;
}
const changeItemInfo = (count: number) => {
  const item = selectedItem.value;
  if (item) {
    item.count = count
  }

}
const addRandomItem = () => {
  const types: ItemType[] = ['green', 'purple', 'orange'];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const randomCount = Math.floor(Math.random() * 99) + 1;
  const randomTitle = `Item ${Math.floor(Math.random() * 1000)}`;
  const randomDescription = `This is a ${randomType} item with ${randomCount} units.`;

  store.addItem({
    type: randomType,
    count: randomCount,
    title: randomTitle,
    description: randomDescription,
  });
};

const onDragEnd = () => {
  store.saveToLocalStorage();
};
</script>

<style lang="scss">
.inventory-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 320px));
  grid-template-rows: repeat(5, minmax(100px, 170px));
  background-color: var(--bg-color);
}

.inventory-slot {
  background-color: var(--slot-bg-color);
  border: 1px solid var(--border-bg);
  cursor: move;
  overflow: hidden;
  @apply p-3;

  &:nth-child(1) {
    border-top-left-radius: 12px;
  }

  &:nth-child(5) {
    border-top-right-radius: 12px;
  }

  &:nth-child(21) {
    border-bottom-left-radius: 12px;
  }

  &:nth-child(25) {
    border-bottom-right-radius: 12px;
  }
}

.empty-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #999;


}
</style>
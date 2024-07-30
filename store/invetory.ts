import { defineStore } from 'pinia';
import type { Item, ItemType, Rare } from '@/types/item';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: Array(25).fill(null) as (Item | null)[],
  }),
  actions: {
    addItem(itemData: { type: ItemType; count: number; title: string; description: string; rare: Rare }) {
      const emptyIndex = this.items.findIndex((item) => item === null);
      if (emptyIndex !== -1) {
        const newItem: Item = {
          id: Date.now().toString(),
          ...itemData,
        };
        this.items[emptyIndex] = newItem;
      } else {
        console.log('Inventory is full');
      }
    },
    removeItem(index: number) {
      if (index >= 0 && index < this.items.length) {
        this.items[index] = null;
      }
    },
    updateItems(newItems: (Item | null)[]) {
      this.items = newItems;
    },
    sortItems(sortBy: string, isAscending: boolean) {
      const itemsToSort = this.items.filter((item): item is Item => item !== null);
      const nullItems = this.items.filter((item) => item === null);

      const sortedItems = itemsToSort.sort((a, b) => {
        let comparison = 0;
        switch (sortBy) {
          case 'name':
            comparison = a.title.localeCompare(b.title);
            break;
          case 'rarity':
            const rarityOrder = ['default', 'silver', 'gold', 'epic'];
            comparison = rarityOrder.indexOf(a.rare) - rarityOrder.indexOf(b.rare);
            break;
          case 'count':
            comparison = a.count - b.count;
            break;
        }
        return isAscending ? comparison : -comparison;
      });

      this.items = [...sortedItems, ...nullItems];
    },
  },
  persist: {
    storage: persistedState.localStorage,
    key: 'inventory-store',
  },
});

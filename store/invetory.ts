import { defineStore } from 'pinia';
import type { Item, ItemType } from '@/types/item';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: Array(25).fill(null) as (Item | null)[],
  }),
  actions: {
    addItem(itemData: { type: ItemType; count: number; title: string; description: string }) {
      const emptyIndex = this.items.findIndex((item) => item === null);
      if (emptyIndex !== -1) {
        const newItem: Item = {
          id: Date.now().toString(),
          ...itemData,
        };
        this.items[emptyIndex] = newItem;
        this.saveToLocalStorage();
      } else {
        console.log('Inventory is full');
      }
    },
    removeItem(index: number) {
      if (index >= 0 && index < this.items.length) {
        this.items[index] = null;
        this.saveToLocalStorage();
      }
    },
    updateItems(newItems: (Item | null)[]) {
      this.items = newItems;
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('inventory', JSON.stringify(this.items));
    },
    loadFromLocalStorage() {
      const saved = localStorage.getItem('inventory');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    },
    //заменить на persist
  },
});

export type ItemType = 'green' | 'purple' | 'orange';

export interface Position {
  x: number;
  y: number;
}

export interface Item {
  id: string;
  type: ItemType;
  count: number;
  title: string;
  description: string;
}

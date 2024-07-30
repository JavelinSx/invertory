export type ItemType = 'green' | 'purple' | 'orange';

export type Rare = 'default' | 'silver' | 'gold' | 'epic';

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
  rare: Rare;
}

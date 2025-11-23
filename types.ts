export enum DiagramPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

export interface ValuePoint {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name mapping
  position: DiagramPosition;
}

export interface SloganResult {
  slogan: string;
  rationale: string;
}
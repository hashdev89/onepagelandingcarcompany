export interface Choice {
  id: string;
  text: string;
  targetNodeId: string | null;
}

export interface StoryNode {
  id: string;
  title: string;
  content: string;
  x: number;
  y: number;
  choices: Choice[];
}


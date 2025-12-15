import { StoryNode } from '../types';

interface ConnectionLinesProps {
  nodes: StoryNode[];
  panOffset: { x: number; y: number };
}

export function ConnectionLines({ nodes, panOffset }: ConnectionLinesProps) {
  const connections: Array<{
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
  }> = [];

  nodes.forEach(node => {
    node.choices.forEach((choice, index) => {
      if (choice.targetNodeId) {
        const targetNode = nodes.find(n => n.id === choice.targetNodeId);
        if (targetNode) {
          connections.push({
            fromX: node.x + 280 + panOffset.x,
            fromY: node.y + 60 + index * 30 + panOffset.y,
            toX: targetNode.x + panOffset.x,
            toY: targetNode.y + 60 + panOffset.y
          });
        }
      }
    });
  });

  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {connections.map((conn, index) => {
        const midX = (conn.fromX + conn.toX) / 2;
        const path = `M ${conn.fromX} ${conn.fromY} C ${midX} ${conn.fromY}, ${midX} ${conn.toY}, ${conn.toX} ${conn.toY}`;
        
        return (
          <path
            key={index}
            d={path}
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
        );
      })}
      
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3, 0 6"
            fill="rgba(139, 92, 246, 0.5)"
          />
        </marker>
      </defs>
    </svg>
  );
}

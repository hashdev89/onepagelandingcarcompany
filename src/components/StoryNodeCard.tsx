import { StoryNode } from '../types';
import { MessageSquare } from 'lucide-react';

interface StoryNodeCardProps {
  node: StoryNode;
  isSelected: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onClick: () => void;
  panOffset: { x: number; y: number };
}

export function StoryNodeCard({ node, isSelected, onMouseDown, onClick, panOffset }: StoryNodeCardProps) {
  return (
    <div
      className={`absolute bg-slate-800 rounded-lg shadow-xl border-2 transition-all cursor-grab active:cursor-grabbing ${
        isSelected ? 'border-violet-500 shadow-violet-500/20' : 'border-slate-700'
      }`}
      style={{
        left: node.x + panOffset.x,
        top: node.y + panOffset.y,
        width: '280px'
      }}
      onMouseDown={onMouseDown}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <MessageSquare className="w-5 h-5 text-violet-400 flex-shrink-0 mt-1" />
          <h3 className="text-white flex-1">{node.title}</h3>
        </div>
        
        <p className="text-slate-400 text-sm line-clamp-3 mb-3">
          {node.content}
        </p>

        {node.choices.length > 0 && (
          <div className="space-y-1">
            {node.choices.map(choice => (
              <div
                key={choice.id}
                className="text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded truncate"
              >
                → {choice.text}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Connection points for choices */}
      {node.choices.map((choice, index) => (
        <div
          key={choice.id}
          className="absolute w-3 h-3 bg-violet-500 rounded-full border-2 border-slate-900"
          style={{
            right: '-6px',
            top: `${60 + index * 30}px`
          }}
          title={choice.text}
        />
      ))}
    </div>
  );
}

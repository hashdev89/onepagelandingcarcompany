import { useState, useRef } from 'react';
import { StoryNode } from '../types';
import { StoryNodeCard } from './StoryNodeCard';
import { ConnectionLines } from './ConnectionLines';
import { NodeEditor } from './NodeEditor';
import { Plus, Trash2 } from 'lucide-react';

interface StoryEditorProps {
  nodes: StoryNode[];
  setNodes: (nodes: StoryNode[]) => void;
}

export function StoryEditor({ nodes, setNodes }: StoryEditorProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const selectedNode = nodes.find(n => n.id === selectedNodeId);

  const handleNodeMouseDown = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const node = nodes.find(n => n.id === nodeId);
    if (node) {
      setDraggingNodeId(nodeId);
      setSelectedNodeId(nodeId);
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNodeId) {
      setNodes(nodes.map(node => {
        if (node.id === draggingNodeId) {
          return {
            ...node,
            x: e.clientX - dragOffset.x - panOffset.x,
            y: e.clientY - dragOffset.y - panOffset.y
          };
        }
        return node;
      }));
    } else if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setDraggingNodeId(null);
    if (isPanning) {
      setIsPanning(false);
    }
  };

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current) {
      setSelectedNodeId(null);
      setPanStart({
        x: e.clientX - panOffset.x,
        y: e.clientY - panOffset.y
      });
      setIsPanning(true);
    }
  };

  const addNewNode = () => {
    const newNode: StoryNode = {
      id: Date.now().toString(),
      title: 'New Scene',
      content: 'Enter your story content here...',
      x: 300 - panOffset.x,
      y: 200 - panOffset.y,
      choices: []
    };
    setNodes([...nodes, newNode]);
    setSelectedNodeId(newNode.id);
  };

  const deleteNode = (nodeId: string) => {
    // Remove connections to this node
    const updatedNodes = nodes
      .filter(n => n.id !== nodeId)
      .map(node => ({
        ...node,
        choices: node.choices.map(choice =>
          choice.targetNodeId === nodeId
            ? { ...choice, targetNodeId: null }
            : choice
        )
      }));
    setNodes(updatedNodes);
    if (selectedNodeId === nodeId) {
      setSelectedNodeId(null);
    }
  };

  const updateNode = (updatedNode: StoryNode) => {
    setNodes(nodes.map(n => n.id === updatedNode.id ? updatedNode : n));
  };

  return (
    <div className="flex h-full">
      {/* Canvas Area */}
      <div className="flex-1 relative overflow-hidden bg-slate-900">
        <div
          ref={canvasRef}
          className="absolute inset-0 cursor-move"
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: `${panOffset.x}px ${panOffset.y}px`
          }}
        >
          <ConnectionLines nodes={nodes} panOffset={panOffset} />
          
          {nodes.map(node => (
            <StoryNodeCard
              key={node.id}
              node={node}
              isSelected={selectedNodeId === node.id}
              onMouseDown={(e) => handleNodeMouseDown(node.id, e)}
              onClick={() => setSelectedNodeId(node.id)}
              panOffset={panOffset}
            />
          ))}
        </div>

        {/* Toolbar */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button
            onClick={addNewNode}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Scene
          </button>
          
          {selectedNodeId && selectedNodeId !== '1' && (
            <button
              onClick={() => deleteNode(selectedNodeId)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete Scene
            </button>
          )}
        </div>
      </div>

      {/* Properties Panel */}
      {selectedNode && (
        <NodeEditor
          node={selectedNode}
          nodes={nodes}
          onUpdate={updateNode}
          onClose={() => setSelectedNodeId(null)}
        />
      )}
    </div>
  );
}

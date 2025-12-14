import { useState } from 'react';
import { StoryNode, Choice } from '../App';
import { X, Plus, Trash2, Link } from 'lucide-react';

interface NodeEditorProps {
  node: StoryNode;
  nodes: StoryNode[];
  onUpdate: (node: StoryNode) => void;
  onClose: () => void;
}

export function NodeEditor({ node, nodes, onUpdate, onClose }: NodeEditorProps) {
  const [title, setTitle] = useState(node.title);
  const [content, setContent] = useState(node.content);
  const [choices, setChoices] = useState<Choice[]>(node.choices);

  const handleSave = () => {
    onUpdate({
      ...node,
      title,
      content,
      choices
    });
  };

  const addChoice = () => {
    const newChoice: Choice = {
      id: Date.now().toString(),
      text: 'New choice',
      targetNodeId: null
    };
    const updatedChoices = [...choices, newChoice];
    setChoices(updatedChoices);
    onUpdate({ ...node, choices: updatedChoices });
  };

  const updateChoice = (choiceId: string, updates: Partial<Choice>) => {
    const updatedChoices = choices.map(c =>
      c.id === choiceId ? { ...c, ...updates } : c
    );
    setChoices(updatedChoices);
    onUpdate({ ...node, choices: updatedChoices });
  };

  const deleteChoice = (choiceId: string) => {
    const updatedChoices = choices.filter(c => c.id !== choiceId);
    setChoices(updatedChoices);
    onUpdate({ ...node, choices: updatedChoices });
  };

  return (
    <div className="w-96 bg-slate-800 border-l border-slate-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        <h2 className="text-white">Edit Scene</h2>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Scene Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleSave}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm text-slate-300 mb-2">
            Story Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleSave}
            rows={6}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          />
        </div>

        {/* Choices */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm text-slate-300">
              Choices
            </label>
            <button
              onClick={addChoice}
              className="text-violet-400 hover:text-violet-300 flex items-center gap-1 text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Choice
            </button>
          </div>

          <div className="space-y-3">
            {choices.map((choice, index) => (
              <div key={choice.id} className="bg-slate-900 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={choice.text}
                    onChange={(e) => updateChoice(choice.id, { text: e.target.value })}
                    placeholder="Choice text"
                    className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <button
                    onClick={() => deleteChoice(choice.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Link className="w-4 h-4 text-slate-500" />
                  <select
                    value={choice.targetNodeId || ''}
                    onChange={(e) => updateChoice(choice.id, { 
                      targetNodeId: e.target.value || null 
                    })}
                    className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
                  >
                    <option value="">No connection</option>
                    {nodes
                      .filter(n => n.id !== node.id)
                      .map(n => (
                        <option key={n.id} value={n.id}>
                          {n.title}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            ))}

            {choices.length === 0 && (
              <p className="text-sm text-slate-500 text-center py-4">
                No choices yet. Add a choice to create branching paths.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

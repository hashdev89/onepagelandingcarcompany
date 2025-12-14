import { useState, useEffect } from 'react';
import { StoryNode } from '../App';
import { RotateCcw, BookOpen } from 'lucide-react';

interface StoryPlayerProps {
  nodes: StoryNode[];
  startNodeId: string;
}

export function StoryPlayer({ nodes, startNodeId }: StoryPlayerProps) {
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId);
  const [history, setHistory] = useState<string[]>([startNodeId]);

  const currentNode = nodes.find(n => n.id === currentNodeId);

  useEffect(() => {
    setCurrentNodeId(startNodeId);
    setHistory([startNodeId]);
  }, [startNodeId]);

  const handleChoice = (targetNodeId: string | null) => {
    if (targetNodeId) {
      setCurrentNodeId(targetNodeId);
      setHistory([...history, targetNodeId]);
    }
  };

  const restart = () => {
    setCurrentNodeId(startNodeId);
    setHistory([startNodeId]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentNodeId(newHistory[newHistory.length - 1]);
    }
  };

  if (!currentNode) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">Story not found. Please check your story configuration.</p>
        </div>
      </div>
    );
  }

  const isEnding = currentNode.choices.length === 0 || 
    currentNode.choices.every(c => !c.targetNodeId);

  return (
    <div className="h-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-3xl w-full">
        {/* Story Card */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
            <h2 className="text-2xl text-white mb-2">{currentNode.title}</h2>
            <div className="flex items-center gap-2 text-violet-200 text-sm">
              <div className="flex gap-1">
                {history.map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-violet-300 rounded-full" />
                ))}
              </div>
              <span>Step {history.length}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap mb-8">
              {currentNode.content}
            </p>

            {/* Choices */}
            {!isEnding && currentNode.choices.length > 0 && (
              <div className="space-y-3">
                {currentNode.choices.map((choice) => {
                  const isDisabled = !choice.targetNodeId;
                  return (
                    <button
                      key={choice.id}
                      onClick={() => handleChoice(choice.targetNodeId)}
                      disabled={isDisabled}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isDisabled
                          ? 'border-slate-700 bg-slate-900/50 text-slate-600 cursor-not-allowed'
                          : 'border-violet-600 bg-violet-600/10 text-violet-300 hover:bg-violet-600/20 hover:border-violet-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          isDisabled ? 'bg-slate-600' : 'bg-violet-500'
                        }`} />
                        <span>{choice.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Ending */}
            {isEnding && (
              <div className="text-center py-6">
                <div className="inline-block bg-violet-600/20 border border-violet-600 rounded-full px-6 py-2 text-violet-300 mb-6">
                  The End
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-slate-700 p-4 flex gap-3">
            <button
              onClick={goBack}
              disabled={history.length <= 1}
              className="flex-1 px-4 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Go Back
            </button>
            <button
              onClick={restart}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Restart Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

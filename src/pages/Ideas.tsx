import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Ideas.css';

interface Idea {
  id: number;
  text: string;
  author: string;
  timestamp: string;
}

const Ideas = () => {
  const scrollRef = useScrollReveal();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [newIdea, setNewIdea] = useState('');
  const [author, setAuthor] = useState('');

  // Load ideas from localStorage on mount
  useEffect(() => {
    const savedIdeas = localStorage.getItem('forge-ideas');
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    }
  }, []);

  // Save ideas to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('forge-ideas', JSON.stringify(ideas));
  }, [ideas]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdea.trim()) return;

    const idea: Idea = {
      id: Date.now(),
      text: newIdea,
      author: author.trim() || 'Anonymous',
      timestamp: new Date().toLocaleString(),
    };

    setIdeas([idea, ...ideas]);
    setNewIdea('');
    setAuthor('');
  };

  return (
    <div className="ideas-page" ref={scrollRef}>
      <div className="container">
        <header className="page-header">
          <h1 className="reveal">Community <span className="shader-text">Ideas</span></h1>
          <p className="reveal stagger-1">Share your vision. Let's forge the future together.</p>
        </header>

        <section className="idea-submission reveal stagger-2">
          <form onSubmit={handleSubmit} className="idea-form">
            <div className="form-group">
              <label>Your Idea</label>
              <textarea 
                placeholder="What should we build next?" 
                value={newIdea}
                onChange={(e) => setNewIdea(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Anonymous" 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <button type="submit" className="shader-button">Post Idea</button>
            </div>
          </form>
        </section>

        <section className="ideas-grid reveal stagger-3">
          {ideas.length === 0 ? (
            <div className="no-ideas">
              <p>No ideas yet. Be the first to share one!</p>
            </div>
          ) : (
            ideas.map((idea) => (
              <div key={idea.id} className="idea-card">
                <p className="idea-text">"{idea.text}"</p>
                <div className="idea-footer">
                  <span className="idea-author">By {idea.author}</span>
                  <span className="idea-date">{idea.timestamp}</span>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Ideas;

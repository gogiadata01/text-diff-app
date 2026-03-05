import React, { useState, useMemo } from 'react';
import { diffChars } from 'diff';
import './App.css';

function App() {
  // 1. State-ები 
  const [oldText, setOldText] = useState('');
  const [newText, setNewText] = useState('');
  const [showDiff, setShowDiff] = useState(false);

  // ტექსტის გასუფთავების ფუნქცია...
  const handleClear = () => {
    setOldText('');
    setNewText('');
    setShowDiff(false);
  };

  //  useMemo-ს გამოყენება ოპტიმიზაციისთვის (რომ ყოველ რენდერზე არ გადაითვალოს, თუ ტექსტი არ შეიცვალა)
  const allChanges = useMemo(() => diffChars(oldText, newText), [oldText, newText]);

  return (
    <div className="app-layout">
      
      {/* გვერდითა მენიუ (Sidebar) */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🦉</span>
            <span className="logo-text">ENAGRAM</span>
          </div>
          <div className="mobile-menu-btn">☰</div>
        </div>

        <nav className="menu-group">
          <div className="menu-item">
            <span className="icon">✓</span> <span className="m-text">მართლწერის შემოწმება</span>
          </div>
          <div className="menu-item active">
            <span className="icon">⇄</span> <span className="m-text">ტექსტის შედარება</span>
          </div>
          <div className="menu-item">
            <span className="icon">🎙</span> <span className="m-text">ხმა → ტექსტი</span>
          </div>
          <div className="menu-item">
            <span className="icon">🔊</span> <span className="m-text">ტექსტი → ხმა</span>
          </div>
          <div className="menu-item">
            <span className="icon">📄</span> <span className="m-text">PDF კონვერტაცია</span>
          </div>
        </nav>
      </aside>

      {/* მთავარი შინაარსი (Main Content) */}
      <main className="main-content">
        <header className="top-bar">
          <div className="left-controls">
            <select className="lang-select">
              <option>ქართული</option>
            </select>
            <label className="checkbox-label">
              <input type="checkbox" /> ფორმატის შენარჩუნება
            </label>
          </div>
          <button className="new-file-btn" onClick={handleClear}>⊕ ახლის გახსნა</button>
        </header>

        <section className="editor-container">
          <div className="input-grid">
            <textarea 
              value={oldText} 
              onChange={(e) => { setOldText(e.target.value); setShowDiff(false); }} 
              placeholder="შეიყვანეთ ორიგინალი ტექსტი..."
            />
            <div className="swap-icon">↔</div>
            <textarea 
              value={newText} 
              onChange={(e) => { setNewText(e.target.value); setShowDiff(false); }} 
              placeholder="შეიყვანეთ შეცვლილი ტექსტი..."
            />
          </div>

          <div className="btn-wrapper">
            <button className="compare-btn" onClick={() => setShowDiff(true)}>შედარება</button>
            <button className="clear-btn" onClick={handleClear}>
              <span>🗑</span> გასუფთავება
            </button>
          </div>

          {/*  შედეგის ჩვენება */}
          {showDiff && (
            <article className="diff-results">
              
              {/* ორიგინალის ბლოკი */}
              <div className="diff-box">
                <h4>ორიგინალი (წაშლილი)</h4>
                <div className="diff-display">
                  {allChanges.map((part, i) => !part.added && (
                    <span key={i} className={part.removed ? 'text-deleted' : ''}>
                      {part.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* შედეგის ბლოკი */}
              <div className="diff-box">
                <h4>შედეგი (დამატებული)</h4>
                <div className="diff-display">
                  {allChanges.map((part, i) => !part.removed && (
                    <span key={i} className={part.added ? 'text-added' : ''}>
                      {part.value}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
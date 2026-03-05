import React from "react";
import './MainContent.css';


const MainContent = ({ 
  oldText, 
  setOldText, 
  newText, 
  setNewText, 
  showDiff, 
  setShowDiff, 
  handleClear, 
  allChanges 
}) => {
  return (
    <main className="main-content">
      {/*  ზედა პანელი */}
      <header className="top-bar">
        <div className="left-controls">
          <select className="lang-select">
            <option>ქართული</option>
          </select>
          <label className="checkbox-label">
            <input type="checkbox" /> ფორმატის შენარჩუნება
          </label>
        </div>
        <button className="new-file-btn" onClick={handleClear}>
          ⊕ ახლის გახსნა
        </button>
      </header>

      {/* . ედიტორის ნაწილი */}
      <section className="editor-container">
        <div className="input-grid">
          <textarea
            value={oldText}
            onChange={(e) => {
              setOldText(e.target.value);
              setShowDiff(false);
            }}
            placeholder="შეიყვანეთ ორიგინალი ტექსტი..."
          />
          <div className="swap-icon">⇄</div>
          <textarea
            value={newText}
            onChange={(e) => {
              setNewText(e.target.value);
              setShowDiff(false);
            }}
            placeholder="შეიყვანეთ შეცვლილი ტექსტი..."
          />
        </div>

        {/*  ღილაკები */}
        <div className="btn-wrapper">
          <button className="compare-btn" onClick={() => setShowDiff(true)}>
            შედარება
          </button>
          <button className="clear-btn" onClick={handleClear}>
            <span>🗑</span> გასუფთავება
          </button>
        </div>

        {/*  შედეგები */}
        {showDiff && (
          <article className="diff-results">
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
  );
};

export default MainContent;
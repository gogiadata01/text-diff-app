import React, { useState, useMemo } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './maincontent/MainContent';
import { calculateDiff } from './utils/diffUtils';
import './App.css';

function App() {
 const [oldText, setOldText] = useState('');
  const [newText, setNewText] = useState('');
  const [showDiff, setShowDiff] = useState(false);

  // 2. ვიყენებ calculateDiff-ს useMemo-ს შიგნით
  const allChanges = useMemo(() => {
    return calculateDiff(oldText, newText);
  }, [oldText, newText]);

  const handleClear = () => {
    setOldText('');
    setNewText('');
    setShowDiff(false);
  };
 

  return (
    <div className="app-layout">
      
      {/*  აქ ვიძახებ კომპონენტს */}
      <Sidebar /> 

      {/* აქ ვიძახებ მთავარ კონტენტს და ვატან ინსტრუმენტებს */}
      <MainContent 

        oldText={oldText}
        setOldText={setOldText}
        newText={newText}
        setNewText={setNewText}
        showDiff={showDiff}
        setShowDiff={setShowDiff}
        handleClear={handleClear}
        allChanges={allChanges}
      />
    </div>
  );
}

export default App;


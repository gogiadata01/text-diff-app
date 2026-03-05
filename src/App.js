import Sidebar from './components/sidebar/Sidebar';
import MainContent from './maincontent/MainContent';
import React, { useState, useMemo } from 'react';
import { diffChars } from 'diff';
import './App.css';

function App() {
  //  State-ები 
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
      
      {/*  აქ ვიძახებ კომპონენტს */}
      <Sidebar /> 
      

      {/* აქ ვიძახებ მთავარ კონტენტს და ვატანთ "ინსტრუმენტებს" */}
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


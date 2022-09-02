import React from 'react';
import './App.scss';
import { ScoreBoard } from './components/scoreBoard';


function App() {

 

  return (
    <>
      <div className="bg-emerald-900 text-white text-5xl">
        <div className="p-12">
          <div className="text-center">
            <h4>Sports Scores</h4>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center mt-48">
          <ScoreBoard />
        </div>
      </div>
    </>
  );
}

export default App;

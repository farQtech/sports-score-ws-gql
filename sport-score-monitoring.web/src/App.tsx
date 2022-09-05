import React, { useState } from 'react';
import './App.scss';
import { ScoreBoard } from './components/scoreBoard';


function App() {

  return (
    <>
      <div className="bg-blue-700 text-white text-5xl">
        <div className="p-12">
          <div className="text-center">
            <h4>Sports Scores</h4>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-20">
          <ScoreBoard />
        </div>
      </div>
    </>
  );
}

export default App;

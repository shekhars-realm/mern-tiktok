import React from 'react';
import './App.css';
import Video from './Video'

function App() {
  return (
    <div className="app">
      <h1>Mern Application</h1>

      <div className="app__videos">
        <Video url={"/videos/coverr-lake-view-1572182181649.mp4"} />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

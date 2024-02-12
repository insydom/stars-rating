import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/StarRating.jsx';

function App() {

  return (
    <div className="app">
      <StarRating numStars={10}/>
    </div>       
  )
}

export default App

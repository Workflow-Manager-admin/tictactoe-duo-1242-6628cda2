import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  // State for the game board, current player, and game status
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

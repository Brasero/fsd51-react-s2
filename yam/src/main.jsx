import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import GameContextProvider from "./context/GameContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameContextProvider>
        <Router>
            <App />
        </Router>
    </GameContextProvider>
  </React.StrictMode>,
)
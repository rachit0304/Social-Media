import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PostListProvider from './context/post-list-store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
  
  </React.StrictMode>,
)

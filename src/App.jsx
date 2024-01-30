import './App.css'
import "Bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './context/post-list-store'
// import NoteContextProvider from './context/note-context'



function App() {

 const[tab, setTab] = useState("Home")

  return (
    <>
    <PostListProvider> 

    <div className="app-container">
    <Sidebar tab={tab} setTab={setTab}/>
      <div className='content'>
      <Header/>
      {tab === "Home" ?  <PostList/> :  <CreatePost/> }  {/*Switching between the side bar tabs */}
      <Footer/>
      </div>
    </div>
      
    </PostListProvider>
    </>
  )
}

export default App

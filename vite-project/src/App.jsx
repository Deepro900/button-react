import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/Post'
import Header from './Components/Header'
import ButtonCreator from './Components/ButtonCreator'
// import Sidebar from './Sidebar'
// import Layout from './Components/Layout'

function App() {


  return (
    <main>
      {/* <Post author="deepro" body="react in asome" />
      <Post author="bhattac" body="Check the couse" /> */}
      <Header />
      {/* <Layout ></Layout> */}
      {/* <Sidebar /> */}
      <ButtonCreator />
    </main>
  )
}

export default App

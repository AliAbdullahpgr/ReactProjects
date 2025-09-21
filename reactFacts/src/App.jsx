import React from 'react';
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx'
import './App.css'

const App = () => {
  return (
    <>
     <div className='w-full h-screen overflow-hidden relative'>
        <Header />
        <MainContent />
        <img src="./assets/react.svg" className='absolute top-[25%] right-[-31%] text-white w-[350px] z-[-1] opacity-15' alt="" />
     </div>
    </>
  )
}
export default App;

/*
  All the element i render get put inside the dive with the id of root 
  or whatever element i might select when calling createRoot

  wouldn't work show syntax error

  you are creating two separate elements in one render
  reacts don't allow that they should wrapped inside a div
  or some other tag

  declarative means we tell what should be done and imperative means
  how it should be done 

  composable means that it can be broken down into components

*/

/*
What is a React Component?
A React Component is a function that is stored in a separate file
or in the file that can be used to break the code into smaller pieces for readability, maintainabiliy and rendering them when
needed it should start with a capital letter and used as a self closing tag
A react component is a function that returns a React elements 

What's wrong with this code?
the name of the component should always start with a capital letter

What's wrong with this code?
width should equal to 40 not 40px it is recognized automatically and
when rendering it it should be rendered as a self closing tag like <Header /> and there's chance you need to write the absolute path
to select the image react. WE surround it in ANGLE brackets

*/
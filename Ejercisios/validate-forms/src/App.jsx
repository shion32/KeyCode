import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import { Loader } from './components/Loader';

function App() {
    return (
    <>
      
      <div className="card">
        <ContactForm/>
        <Loader/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import phrases from './utils/pharases.json'
import getRamdomFromArr from './utils/getRamdomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import number from './utils/photo.json'



function App() {

  const phrasesRandom = getRamdomFromArr(phrases)
  const [ramdon, setRamdon] = useState(phrasesRandom)

  const numberRamdo = getRamdomFromArr(number)
  const [numberr, setNumberr] = useState(numberRamdo)
  
  


  const objStyle = {
    backgroundImage: `url(/fondo${numberr}.jpg)`
  }

  return (
    <>
    <section className='section' style={objStyle}>
    <h1>Galleta de la fortuna</h1>
    
    <article>
    <img src="/rectangle1.svg" alt="" />
    <Phrase phraseRandom={ramdon} /> 
    
    <Button buttonChange={setRamdon}
      buttonChangeImage={setNumberr}/>
      
    </article>
    
    </section>
    </>
  )
}

export default App

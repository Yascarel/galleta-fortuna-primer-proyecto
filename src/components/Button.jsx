import getRamdomFromArr from "../utils/getRamdomFromArr"
import phrasesJson from '../utils/pharases.json'
import number from '../utils/photo.json'

const button = ({buttonChange, buttonChangeImage}) => {
  const changePhrases = () => {
    buttonChange(getRamdomFromArr(phrasesJson))
    buttonChangeImage(getRamdomFromArr(number))
    
  }

  return (
    <button onClick={changePhrases}>change phrase</button>
  )
}

export default button
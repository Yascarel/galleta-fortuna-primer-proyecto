const Phrase = ({phraseRandom}) => {

  return (
    <>
    <p className="P__phrase">{phraseRandom.phrase}</p>
    <p className="P__author"><span>Autor:</span> {phraseRandom.author}</p>
    </>
    
  )
}

export default Phrase
export default function BtnNextPrev({onChangeQuestion, actualQuestion, disableNext}) {

  const displayPrevBtn = (actualQuestion === 1) ? 'none' : 'inline'

  return (
    <div>
      <button style={{display: displayPrevBtn}} onClick={() => onChangeQuestion('prev')}>Prev</button>
      <button disabled={disableNext} onClick={() => onChangeQuestion('next')}>Next</button>
    </div>
  )
}
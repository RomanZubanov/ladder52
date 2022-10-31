import style from './results.module.css'

export default function Results({answers, actualQuestion}) {

  const answersList = answers.map((answer, index) => {
    return (
      <li key={index}>{answer}</li>
    )
  })

  const title = (actualQuestion !== 5) ? 'Расчет стоимости металлической лестницы' : 'Расчет стоимости сформирован'

  return (
    <div className={style.results}>
      <h3>{title}</h3>
      <ul>
        {answersList}
      </ul>
    </div>
  )
}
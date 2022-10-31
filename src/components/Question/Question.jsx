import SubQuestion from "../SubQuestion";
import style from './question.module.css'

export default function Question({ actualQuestion, title, name, options, subQuestion, answer, onAnswer, onSubAnswer }) {

  let subQuestionBlock = null

  if (subQuestion) {
    const {title, subTitle, name, placeholder} = subQuestion
    subQuestionBlock = <SubQuestion title={title} subTitle={subTitle} name={name} value={subQuestion.answer} placeholder={placeholder} onSubAnswer={onSubAnswer}/>
  }

  let optionList

  if (actualQuestion !== 5) {
    optionList = options.map((option, index) => {
      return (
        <div key={name + index}>
          <input
            className={style.input}
            type='radio'
            id={'option' + index}
            name={name}
            value={option}
            checked={index === answer.index}
            onChange={(e) => onAnswer(e.target.value, index)} />
          <label htmlFor={'option' + index}>
            {option}
          </label>
          {subQuestionBlock}
        </div>
      )
    })
  } else {
    optionList = (
      <div>
        <div className={style.messengers}>
          <label htmlFor='whatsapp'>WhatsApp<input type='radio' id='whatsapp' value='whatsapp' name='messengers'></input></label>
          <label htmlFor='telegram'>Telegram<input type='radio' id='telegram' value='telegram' name='messengers'></input></label>
          <label htmlFor='viber'>Viber<input type='radio' id='viber' value='viber' name='messengers'></input></label>
        </div>

        <label className={style.tel} htmlFor='phone'>Телефон<input type='tel' id='viber' name="phone"></input></label>
      </div>)
  }

  return (
    <div>
      <div className={style.title}>{title}</div>
      {optionList}
    </div>
  )
}
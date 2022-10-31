import style from './subQuestion.module.css'

export default function SubQuestion( { title, subTitle, name, value, placeholder, onSubAnswer } ) {
  return (
    <div className={style['sub-question']}>
      <h4>{title}</h4>
      <p>{subTitle}</p>
      <input type="text" name={name} value={value} placeholder={placeholder} onChange={(e) => onSubAnswer(e.target.value)}/>
    </div>
  )
}
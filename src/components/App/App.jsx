import { Component } from 'react'

import Question from "../Question";
import BtnNextPrev from "../BtnNextPrev";
import BtnSubmit from "../BtnSubmit";
import Results from "../Results";

import style from './app.module.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: {
        1: {
          title: 'Какой тип лестницы Вас интересует?',
          name: 'ladder-type',
          options: ['деревянная', 'металлическая', 'бетонная', 'комбинированная', 'не знаю'],
          answer: {value: '', index: null},
          subQuestion: {
            title: 'Укажите высоту проема в потолке',
            subTitle: 'в метрах или сантиметрах',
            name: 'opening-ceiling',
            answer: '',
            placeholder: 'например 110х240 ',
          },
        },
        2: {
          title: 'Выберите форму лестницы:',
          name: 'ladder-form',
          options: ['прямая', 'с поворотом на 90 градусов', 'с поворотом на 180 градусов', 'винтовая', 'не знаю'],
          answer: {value: '', index: null},
        },
        3: {
          title: 'Выберите вариант комплектации',
          name: 'complete',
          options: ['«под ключ» с покраской', 'покрашу сам (смонтированная лестница без покраски)', 'соберу и покрашу сам (комплект лестницы для самостоятельной сборки)'],
          answer: {value: '', index: null},
        },
        4: {
          title: 'Какой подарок Вы хотите получить?',
          name: 'present',
          options: ['скидка на монтаж 15%', '3D-проект с визуализацией', 'бесплатная доставка до объекта'],
          answer: {value: '', index: null},
        },
        5: {
          title: 'Куда вам удобнее получить точный расчет стоимости и каталог лестниц',
          name: 'present',
          options: ['скидка на монтаж 15%', '3D-проект с визуализацией', 'бесплатная доставка до объекта'],
          answer: {value: '', index: null},
          phoneNumber: '',
        }
      },
      actualQuestion: 1,
    }
  }

  onChangeQuestion = (btn) => {
    switch (btn) {
      case 'prev':
        this.setState(state => state.actualQuestion--)
        break
      case 'next':
        this.setState(state => state.actualQuestion++)
        break
      default: return
    }
  }

  onAnswer = (value, index) => {
    const {actualQuestion} = this.state
    this.setState(state => {
      return state.questions[actualQuestion].answer = {index, value}
    })
  }

  onSubAnswer = (value) => {
    const {actualQuestion} = this.state
    this.setState(state => {
      return state.questions[actualQuestion].subQuestion.answer = value
    })
  }

  render() {

    const {questions, actualQuestion} = this.state
    const question = questions[actualQuestion]
    const disableNext = (question.answer.value === '')

    const answers = []

    for (let key in questions) {
      if (questions[key].answer.value !== '') {answers.push(questions[key].answer.value)}
      if (('subQuestion' in questions[key]) && questions[key].subQuestion.answer !== '') {answers.push(questions[key].subQuestion.answer)}
    }

    console.log(answers)

    const btn = (actualQuestion !== 5) ?
      <BtnNextPrev disableNext={disableNext} onChangeQuestion={this.onChangeQuestion} actualQuestion={actualQuestion} /> : <BtnSubmit/>

    return (
      <section className={style.wrapper}>
          <h1>Рассчитайте стоимость вашей лестницы</h1>
          <h3>ответив на 5 вопросов за 1 минуту</h3>
          <div className={style['question-results-block']}>
            <div className={style.questions}>
              <Question
                actualQuestion={actualQuestion}
                title={question.title}
                name={question.name}
                options={question.options}
                answer={question.answer}
                subQuestion={question.subQuestion}
                onAnswer={this.onAnswer}
                onSubAnswer={this.onSubAnswer}
              />
              {btn}
            </div>
            <Results answers={answers} actualQuestion={actualQuestion} />
          </div>

      </section>)
  }
}
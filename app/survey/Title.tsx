import { replaceQuots } from 'helper/replaceQuots'
import { useSurveyStore } from './store'

export default function Title() {
  const { questions, questionNumber } = useSurveyStore()

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold leading-8 text-gray-900">
        Вопрос {questionNumber}/{questions.length}
      </h3>
      <p className="mt-4 text-base font-semibold leading-7">
        {replaceQuots(questions[questionNumber - 1].question)}
      </p>
      <p className=" text-sm leading-6 text-gray-500">
        Категория {questions[questionNumber - 1].category}
      </p>
    </div>
  )
}

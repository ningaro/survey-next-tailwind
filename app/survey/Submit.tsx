import { useRouter } from 'next/navigation'
import { useSurveyStore } from './store'
import { useCallback, useMemo } from 'react'

export default function Submit() {
  const { questions, questionNumber, setQuestionNumber } = useSurveyStore()
  const { replace } = useRouter()

  const isDisabled = useMemo(
    () => !questions[questionNumber - 1].selectedAnswer,
    [questionNumber, questions]
  )

  const submitEvent = useCallback(() => {
    if (!isDisabled) {
      if (questions.length === questionNumber) replace('/survey/result')
      else setQuestionNumber(questionNumber + 1)
    }
  }, [isDisabled, questionNumber, questions.length, replace, setQuestionNumber])

  return (
    <button
      className="max-w-fit rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:bg-gray-500 disabled:hover:bg-gray-500"
      disabled={!questions[questionNumber - 1].selectedAnswer}
      onClick={submitEvent}
    >
      Ответить
    </button>
  )
}

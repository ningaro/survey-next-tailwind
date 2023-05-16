'use client'
import { useCallback, useEffect, useState } from 'react'
import { storeQuestions, useSurveyStore } from './store'
import { replaceQuots } from 'helper/replaceQuots'

export default function Answers() {
  const { questions, questionNumber, setSelectedAnswer } = useSurveyStore()

  const createAnswersList = (
    questions: storeQuestions[],
    questionNumber: number
  ) =>
    [
      ...questions[questionNumber - 1].incorrect_answers,
      questions[questionNumber - 1].correct_answer,
    ]
      .sort(() => Math.random() - 0.5)
      .map((answer) => ({ text: answer, isChecked: false }))

  const [answers, setAnswers] = useState<
    { text: string; isChecked: boolean }[]
  >([])

  const updateAnswers = useCallback(
    () => setAnswers(createAnswersList(questions, questionNumber)),
    [questionNumber, questions]
  )

  const setAnswerChecked = useCallback(
    (answerText: string) => {
      setSelectedAnswer(questionNumber, answerText)
      setAnswers((oldAnswers) =>
        oldAnswers.map((oldAnswer) =>
          oldAnswer.text === answerText
            ? { ...oldAnswer, isChecked: !oldAnswer.isChecked }
            : { ...oldAnswer, isChecked: false }
        )
      )
    },
    [questionNumber, setSelectedAnswer]
  )

  // Обновляем список вопросов, если изменился номер вопроса
  useEffect(() => {
    updateAnswers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionNumber])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      {answers.map(({ text, isChecked }) => (
        <div
          key={text}
          aria-checked={isChecked}
          onClick={() => setAnswerChecked(text)}
          className="rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm transition hover:cursor-pointer aria-checked:ring-2 aria-checked:ring-teal-500 aria-checked:ring-offset-0"
        >
          {replaceQuots(text)}
        </div>
      ))}
    </div>
  )
}

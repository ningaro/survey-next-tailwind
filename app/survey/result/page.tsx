'use client'

import { replaceQuots } from 'helper/replaceQuots'
import Tag from 'components/Tag'
import { useSurveyStore } from '../store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ButtonLink from 'components/ButtonLink'

export default async function Result() {
  const { questions } = useSurveyStore()
  const { replace } = useRouter()

  // Если нету данных теста переходим на главную
  useEffect(() => {
    if (questions.length === 0) replace('/')
  }, [questions, replace])

  if (questions.length === 0) return null

  const correctCount = questions.reduce(
    (prev, now) =>
      now.correct_answer === now.selectedAnswer ? prev + 1 : prev,
    0
  )

  return (
    <div className="flex flex-col pb-4 pt-8 supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
      <h2 className="text-center text-xl font-bold tracking-tight">
        Результаты теста.
      </h2>
      <p className="text-center text-lg leading-8 text-gray-700">
        Правильных ответов {correctCount} из {questions.length}
      </p>
        {questions.map(
          ({
            question,
            correct_answer,
            selectedAnswer,
            category,
            difficulty,
          }) => {
            const isCorrect = correct_answer === selectedAnswer
            return (
              <div
                key={question}
                className="flex flex-col rounded-md bg-white transition hover:bg-gray-100"
              >
                <div className="rounded-t-md border border-slate-200  px-6 py-4">
                  <p className="text-base font-semibold text-gray-900">
                    {/* @ts-ignore */}
                    <Tag difficulty={difficulty} /> {replaceQuots(question)}
                  </p>
                  <p className="text-xs text-gray-500">Категория: {category}</p>
                </div>
      <div className="mt-4 flex flex-col gap-8 overflow-auto px-4 lg:px-8">
                <div
                  className="border-x border-slate-200  px-6 py-4 data-[is-correct=true]:rounded-b-md data-[is-correct=false]:border-y-0 data-[is-correct=true]:border-b"
                  data-is-correct={correct_answer === selectedAnswer}
                >
                  Ваш ответ:{' '}
                  <span
                    className="data-[is-correct=false]:text-red-500 data-[is-correct=true]:text-green-500"
                    data-is-correct={correct_answer === selectedAnswer}
                  >
                    {replaceQuots(selectedAnswer!)}
                  </span>
                </div>
                {isCorrect ? undefined : (
                  <div className="rounded-b-md border border-slate-200 px-6 py-4">
                    Правильный ответ: {replaceQuots(correct_answer)}
                  </div>
                )}
              </div>
            )
          }
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <ButtonLink text="Пройти снова" linkPath="/" />
      </div>
    </div>
  )
}

'use client'

import { getQuestionsResponse } from 'api/getQuestions'
import Answers from './Answers'
import { useSurveyStore } from './store'
import { useEffect, useMemo } from 'react'
import Title from './Title'
import Submit from './Submit'

interface ProcessProps {
  data: string
}

export default function Process({ data: code }: ProcessProps) {
  const data = useMemo(
    () => JSON.parse(atob(code)) as getQuestionsResponse,
    [code]
  )
  const { questions, setQuestions, setQuestionNumber } = useSurveyStore()

  // Сохраняем данные в Store
  useEffect(() => {
    if (data.results) {
      setQuestions(data.results)
      setQuestionNumber(1)
    }
  }, [data, setQuestionNumber, setQuestions])

  if (questions.length < 1) return <>Загрузка</>

  return (
    <div className="flex h-full flex-col items-center pb-4 pt-8">
      <Title />
      <Answers />
      <Submit />
    </div>
  )
}

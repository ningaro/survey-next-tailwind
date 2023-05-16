import { IQuestion } from 'models/question'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface storeQuestions extends IQuestion {
  selectedAnswer?: string
  isCorrectAnswerSelected?: boolean
}

type Store = {
  questions: storeQuestions[]
  questionNumber: number
  // eslint-disable-next-line no-unused-vars
  setQuestions: (questions: IQuestion[]) => void
  // eslint-disable-next-line no-unused-vars
  setQuestionNumber: (number: number) => void
  // eslint-disable-next-line no-unused-vars
  setSelectedAnswer: (questionNumber: number, answerText: string) => void
}

export const useSurveyStore = create<Store>()(
  devtools((set) => ({
    questions: [],
    questionNumber: 0,
    setQuestions: (questions) => set((state) => ({ ...state, questions })),
    setQuestionNumber: (number) =>
      set((state) => ({ ...state, questionNumber: number })),
    setSelectedAnswer: (questionNumber, answerText) =>
      set((state) => ({
        ...state,
        questions: state.questions.map((question, i) => {
          if (i === questionNumber - 1)
            return { ...question, selectedAnswer: answerText }

          return question
        }),
      })),
  }))
)

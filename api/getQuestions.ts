import { IQuestion } from 'models/question'

export interface getQuestionsResponse {
  response_code: number
  results?: IQuestion[]
}

// axios.get<getQuestionsResponse>('')

export const getQuestions = async () =>
  (await (
    await fetch('https://opentdb.com/api.php?amount=10', {
      next: { revalidate: 0 },
    })
  ).json()) as Promise<getQuestionsResponse>

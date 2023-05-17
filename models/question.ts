export interface IQuestion {
  category: string
  type: 'boolean' | 'multiple'
  difficulty: 'medium' | 'easy' | 'hard'
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export enum difficultyNum {
  easy = 1,
  medium,
  hard,
}

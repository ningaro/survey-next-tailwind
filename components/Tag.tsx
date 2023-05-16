import { IQuestion } from 'models/question'

interface TagProps {
  difficulty: IQuestion['difficulty']
}

export default function Tag({ difficulty }: TagProps) {
  return (
    <span
      data-d={difficulty}
      className="max-w-max rounded-full px-2 py-1 align-bottom text-[0.6rem] uppercase  data-[d=easy]:bg-green-100 data-[d=hard]:bg-red-100 data-[d=medium]:bg-yellow-100"
    >
      {difficulty}
    </span>
  )
}

import { getQuestions } from 'api/getQuestions'
import Process from './Process'

export default async function Survey() {
  const data = await getQuestions()

  return <Process data={btoa(JSON.stringify(data))} />
}

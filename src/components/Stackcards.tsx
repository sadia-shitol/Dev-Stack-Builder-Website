import { use } from 'react'
import type { IstackType } from '../types/stacktype'
interface StackcardsProps {
  stackcardsPromise: Promise<IstackType[]>
}
const Stackcards = ({ stackcardsPromise }: StackcardsProps) => {
  const stackcards = use(stackcardsPromise)
  return <div></div>
}

export default Stackcards

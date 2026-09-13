import { use } from 'react'
import type { IstackType } from '../types/stacktype'

type StackcardsProps = {
  stackcardsPromise: Promise<IstackType[]>
}

const Stackcards = ({ stackcardsPromise }: StackcardsProps) => {
  const stackcards = use(stackcardsPromise)
  console.log(stackcards)
  return <div></div>
}

export default Stackcards

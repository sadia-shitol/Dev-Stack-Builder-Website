import type { IstackType } from '../types/stacktype'
import Cardcomponent from './Cardcomponent'

type StackcardsProps = {
  stackcards: IstackType[]
  onAddToStack: (technology: IstackType) => void
}

const Stackcards = ({ stackcards, onAddToStack }: StackcardsProps) => {
  return (
    <div>
      <section className='container mb-10 mt-10'>
        <h2 className='text-5xl font-bold'>
          Explore the{' '}
          <span className='bg-gradient-to-r from-[#f97316] via-[#db2777] to-[#7c3aed] bg-clip-text text-transparent'>
            Technologies
          </span>
        </h2>
        <p className='mt-2'>
          Pick one technology pere category to build your ideal stack
        </p>
      </section>
      <Cardcomponent stackcards={stackcards} onAddToStack={onAddToStack} />
    </div>
  )
}

export default Stackcards

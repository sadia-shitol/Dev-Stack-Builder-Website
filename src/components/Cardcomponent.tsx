import type { IstackType } from '../types/stacktype'
import { toast } from 'react-toastify'
type CardcomponentProps = {
  stackcards: IstackType[]
  onAddToStack: (technology: IstackType) => void
}

const Cardcomponent = ({ stackcards, onAddToStack }: CardcomponentProps) => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-3 gap-5'>
      {stackcards.map((stackcard) => {
        return (
          <div
            key={stackcard.id}
            className='card bg-base-100 shadow-md border border-base-300'
          >
            <div className='card-body'>
              <div className='flex items-start justify-between'>
                <img
                  src={stackcard.icon}
                  alt={stackcard.name}
                  className='w-12 h-12'
                />

                <span className='badge badge-primary'>{stackcard.badge}</span>
              </div>

              <h2 className='card-title mt-3'>{stackcard.name}</h2>

              <p className='text-sm text-base-content/70'>
                {stackcard.description}
              </p>

              <div className='mt-3'>
                <span className='badge badge-outline'>
                  {stackcard.category}
                </span>
              </div>

              <div className='text-sm'>
                <span className='font-semibold'>Difficulty: </span>
                {stackcard.difficulty}
              </div>

              <div className='flex items-center gap-1'>
                <span>⭐</span>
                <span>{stackcard.rating}</span>
              </div>

              <button
                onClick={() => {
                  onAddToStack(stackcard)
                  toast.success(`${stackcard.name} added to your stack!`)
                }}
                className='btn btn-primary bg-gradient-to-r from-pink-600 to-purple-600  px-6 py-2.5  text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg'
              >
                Add to Stack
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cardcomponent

import type { IstackType } from '../types/stacktype'

interface StackProps {
  stack: IstackType[]
}

const Stack = ({ stack }: StackProps) => {
  return (
    <div className='mt-40 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'>
      <h2 className='text-lg font-bold text-gray-800'>Your Stack</h2>

      <p className='mt-1 text-xs text-gray-400'>
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} technolog${
              stack.length === 1 ? 'y' : 'ies'
            } selected.`}
      </p>

      {stack.length === 0 ? (
        <div className='mt-4 rounded-lg border border-dashed border-gray-200 py-6 text-center text-xs text-gray-400'>
          Your stack is empty.
        </div>
      ) : (
        <div className='mt-4 space-y-3'>
          {stack.map((stackcard) => (
            <div
              key={stackcard.id}
              className='flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3'
            >
              <img
                src={stackcard.icon}
                alt={stackcard.name}
                className='h-8 w-8 object-contain'
              />

              <span className='text-sm font-semibold text-gray-700'>
                {stackcard.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Stack

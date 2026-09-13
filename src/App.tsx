import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Bottomfooter from './components/Bottomfooter'
import Navbar from './components/Navbar'
import Prefooter from './components/Prefooter'
import Stackcards from './components/Stackcards'
import Stack from './components/Stack'
import type { IstackType } from './types/stacktype'
import { ToastContainer } from 'react-toastify'

function App() {
  const [stackcards, setStackcards] = useState<IstackType[]>([])

  const [stack, setStack] = useState<IstackType[]>([])

  useEffect(() => {
    const stackcardsFetch = async () => {
      try {
        const res = await fetch('/data.json')
        const data: IstackType[] = await res.json()

        setStackcards(data)
      } catch (error) {
        console.error('Error fetching technology data:', error)
      }
    }

    stackcardsFetch()
  }, [])

  const handleAddToStack = (technology: IstackType) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (!alreadyAdded) {
      setStack((previousStack) => [...previousStack, technology])
    }
  }
  return (
    <>
      <Navbar />
      <Banner />
      <main className='mx-auto max-w-[1200px] px-4 py-8'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]'>
          <section>
            {stackcards.length === 0 ? (
              <h2 className='text-center text-lg'>Loading...</h2>
            ) : (
              <Stackcards
                stackcards={stackcards}
                onAddToStack={handleAddToStack}
              />
            )}
          </section>
          <aside>
            <Stack stack={stack} />
          </aside>
        </div>
      </main>
      <Prefooter />
      <Bottomfooter />
      <ToastContainer />
    </>
  )
}

export default App

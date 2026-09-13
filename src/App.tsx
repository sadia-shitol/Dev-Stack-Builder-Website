import Banner from './components/Banner'
import { Suspense } from 'react'
import Bottomfooter from './components/Bottomfooter'
import Navbar from './components/Navbar'
import Prefooter from './components/Prefooter'
import Stackcards from './components/Stackcards'
import type { IstackType } from './types/stacktype'

const stackcardsFetch = async (): Promise<IstackType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {
  const stackcardsPromise = stackcardsFetch()
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Stackcards stackcardsPromise={stackcardsPromise} />
      </Suspense>

      <Prefooter />
      <Bottomfooter />
    </>
  )
}

export default App

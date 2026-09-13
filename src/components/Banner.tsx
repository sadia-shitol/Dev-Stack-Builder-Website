import banner from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className='container my-0'>
      <div className='hero bg-base-200 min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={banner} alt='banner image' />
          <div>
            <h1 className='text-5xl font-bold'>
              Build Your Ideal <br />
              <span className='bg-gradient-to-r from-[#f97316] via-[#db2777] to-[#7c3aed] bg-clip-text text-transparent'>
                Development Stack
              </span>
            </h1>
            <p className='my-6 max-w-[580px] leading-8'>
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project
            </p>
            <div className='flex gap-2'>
              <button className='btn btn-primary bg-gradient-to-r from-pink-600 to-purple-600  px-6 py-2.5  text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg'>
                Explore Technologies
              </button>
              <button className='btn  font-medium text-slate-600 px-8 py-2.5  text-sm font-semibold  shadow-md transition hover:scale-105 hover:shadow-lg'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

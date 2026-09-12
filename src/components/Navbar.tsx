import logo from '../assets/logo-text.png'

const Navbar = () => {
  const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact']
  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-sm  flex align-middle justify-center container border-b border-[#f1f5f9] '>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center gap-3 h-10 w-auto'>
          <img
            className='flex justify-center items-center'
            src={logo}
            alt='logo'
          />
        </div>
        <ul className='flex items-center gap-8 text-sm font-medium text-slate-500'>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`${item}`}
                className={`relative transition-colors hover:text-pink-600 ${
                  item === 'Home'
                    ? 'text-pink-600 after:absolute after:-bottom-3 after:left-0  after:rounded-full after:bg-pink-600'
                    : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-4'>
          <button className='text-sm font-medium text-slate-600 transition hover:text-pink-600'>
            Sign In
          </button>
          <button className='rounded-full bg-gradient-to-r from-pink-600 to-purple-600  px-6 py-2.5  text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"'>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

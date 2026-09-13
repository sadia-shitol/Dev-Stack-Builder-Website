import logo from '../assets/logo-text.png'
const Prefooter = () => {
  return (
    <div className=' bg-base-200 text-base-content'>
      <footer className='container pl-80 pt-4 flex gap-24 footer sm:footer-horizontal border-t-4 border-[#f1f5f9]'>
        <aside>
          <img src={logo} alt='' />
          <p>
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>

          <ul className='flex gap-6'>
            <li className='text-slate-600 font-semibold'>GitHub</li>
            <li className='text-slate-600 font-semibold'>Twitter</li>
            <li className='text-slate-600 font-semibold'>LinkedIn</li>
          </ul>
        </aside>
        <nav>
          <h6 className='footer-title  text-slate-700 '>PRODUCT</h6>
          <a className='link link-hover text-slate-950'>Home</a>
          <a className='link link-hover  text-slate-950'>Technologies</a>
          <a className='link link-hover text-slate-950'>Projects</a>
        </nav>
        <nav>
          <h6 className='footer-title  text-slate-700'>Company</h6>
          <a className='link link-hover text-slate-950'>About</a>
          <a className='link link-hover text-slate-950'>Contact</a>
          <a className='link link-hover text-slate-950'>Careers</a>
        </nav>
        <nav>
          <h6 className='footer-title  text-slate-700'>Legal</h6>
          <a className='link link-hover text-slate-950'>Privacy policy</a>
          <a className='link link-hover text-slate-950'>Terms of Service</a>
        </nav>
      </footer>
    </div>
  )
}

export default Prefooter

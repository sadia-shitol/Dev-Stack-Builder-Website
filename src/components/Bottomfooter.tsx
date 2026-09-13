const Bottomfooter = () => {
  return (
    <footer className=' mt-4 border-t border-[#e3e6e8]  bg-base-200 text-base-content footer flex pl-[400px] justify-start align-top sm:footer-horizontal items-center p-4 '>
      <aside className='grid-flow-col items-start'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}

export default Bottomfooter

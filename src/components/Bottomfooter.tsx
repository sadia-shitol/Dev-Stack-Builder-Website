const Bottomfooter = () => {
  return (
    <footer className='border-b border-[#cfd6dc]  bg-base-200 text-base-content footer flex pl-[400px] justify-start align-top sm:footer-horizontal items-center p-4 '>
      <aside className='grid-flow-col items-start'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}

export default Bottomfooter

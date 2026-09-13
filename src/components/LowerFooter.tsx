const LowerFooter = () => {
  return (
    <div className='container'>
      <footer className='footer sm:footer-horizontal  bg-base-200 text-base-content items-center'>
        <aside className='grid-flow-col items-center'>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  )
}

export default LowerFooter

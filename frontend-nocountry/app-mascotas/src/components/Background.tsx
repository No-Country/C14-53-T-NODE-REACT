const Background = () => {
  return (
    <>
      <div id='background' className='absolute top-0 left-0 w-full h-full min-h-screen overflow-hidden'>
        <div className='absolute top-[-30px] md:top-[-105px] left-[20%]'>
          <img src='./img/ellipse1.png' alt='background shape' />
        </div>
        <div className='absolute bottom-[-6%] rotate-[-20deg] left-[-15%] md:left-0 md:rotate-0 md:bottom-[-17%] md:w-2/4'>
          <img src='./img/ellipse2.png' alt='background shape' />
        </div>
        <div className='absolute -right-[15%] bottom-[20%] w-2/5 md:bottom-[-20%] md:right-[5%] md:w-auto'>
          <img src='./img/ellipse3.png' alt='background shape' />
        </div>
      </div>
    </>
  )
}

export default Background

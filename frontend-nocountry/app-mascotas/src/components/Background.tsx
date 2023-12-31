const Background = () => {
  return (
    <>
      <div id="background" className='absolute  top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute top-[-30px] md:top-[-105px] left-[50%] md:left-80 w-2/6 md:w-1/4'>
          <img src='./img/ellipse1.png' alt='background shape' />
        </div>
        <div className='absolute top-[500px] w-2/4 ms'>
          <img src='./img/ellipse2.png' alt='background shape' />
        </div>
        <div className='absolute top-[400px] right-[-34%] md:bottom-0 md:right-0 w-3/5 md:w-auto rotate-[-45deg] md:rotate-0'>
          <img src='./img/ellipse3.png' alt='background shape' />
        </div>
      </div>
    </>
  )
}


export default Background
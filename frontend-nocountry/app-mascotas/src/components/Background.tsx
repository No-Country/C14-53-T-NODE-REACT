const Background = () => {
  return (
    <>
      <div id="background" className='absolute  top-0 left-0 w-full h-full overflow-hidden 2xl:w-5/6 2xl:flex 2xl:justify-center'>
        <div className='absolute top-[-30px] md:top-[-105px] left-[50%] md:left-80 w-2/6 md:w-1/4 2xl:left-[40%]'>
          <img src='./img/ellipse1.png' alt='background shape' />
        </div>
        <div className='absolute top-[500px] w-2/4 2xl:top-[1000px]'>
          <img src='./img/ellipse2.png' alt='background shape' />
        </div>
        <div className='absolute top-[400px] right-[-34%] md:bottom-0 md:right-0 w-3/5 md:w-auto rotate-[-45deg] md:rotate-0 2xl:top-[900px]'>
          <img src='./img/ellipse3.png' alt='background shape' />
        </div>
      </div>
    </>
  )
}


export default Background
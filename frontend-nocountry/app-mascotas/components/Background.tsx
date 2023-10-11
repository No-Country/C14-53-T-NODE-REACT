const Background = () => {
  return (
    <>
     <div className="absolute z-10 top-0 w-full h-full overflow-hidden">
        <div className="relative left-80 w-1/4"><img src='./img/ellipse1.png' alt='background shape' /></div>
        <div className="relative bottom-[-400px] w-2/4"><img src='./img/ellipse2.png' alt='background shape' /></div>
        <div className="relative bottom-[-126px] right-[-1070px] w-2/4"><img src='./img/ellipse3.png' alt='background shape' /></div>
    </div>
  </>
  )
}

export default Background
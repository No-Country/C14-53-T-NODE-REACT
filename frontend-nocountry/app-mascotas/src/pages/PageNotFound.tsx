export const PageNotFound = () => {
  return <div className="flex justify-center flex-col gap-12 text-montserrat items-center h-screen">


    <h1 className="font-black text-2xl md:text-5xl"> ¡UPS!</h1>
    <p className="text-xl md:text-3xl font-semibold mb-12 ">¡No encontramos esta pagina! </p>


    <img className="absolute bottom-0 z-20" src="./img/not-found.png" alt="not-found-image" />

  </div>
}

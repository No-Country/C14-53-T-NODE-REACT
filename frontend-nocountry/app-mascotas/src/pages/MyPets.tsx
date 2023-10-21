import { PetAvatar } from "../components/Pets/PetAvatar"


export const MyPets = () => {

  return (
    <>
      <main className="flex z-20 relative ">
        <div className="flex flex-col items-center z-90 lg:items-stretch">

          <div className=' text-montserrat relative  h-[160px] md:h-[220px] xl:h-[260px]   w-[85%] lg:w-[90%] xl:w-[90%] md:m-8 md:px-12    rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
            <h2 className='text-center py-2 font-black text-[1rem] xl:text-2xl'>Tus mascotas</h2>
            <div className="flex items-center justify-around">
              <div className="flex pl-2 md:pl-0 overflow-x-hidden py-2 w-[99%] lg:w-[89%] gap-2 lg:gap-6 xl:gap-3">
                <PetAvatar img='./img/Chucky.png' name='Chucky'></PetAvatar>
                <PetAvatar img='./img/Darth_Vader.png' name='Darth Vader'></PetAvatar>
                <PetAvatar img='./img/Lucifer.png' name='Lucifer'></PetAvatar>
                <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
                <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
                <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
                <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
              </div>
              <img className="hidden lg:flex pl-8 mb-12" src="../../public/img/arrow-right.svg" alt="carrousel-arrow-right" />
            </div>
          </div>


          {/* Luego hay que sacar el margen vertical que tengan, ya que estos seran componentes */}
          <div className="h-[45vh] mt-8 lg:mt-0 relative w-[85%] lg:w-[90%] xl:w-[90%]  md:mx-8 rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">
          </div>

          <div className="mobilepanel relative h-[50px] w-[85%] lg:hidden rounded-xl  shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">
          </div>


        </div>


        <div className="hidden lg:flex h-[78vh]   m-8 pl-[150px]  relative  lg:w-[300px] xl:w-[25%]  rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">

        </div>





      </main>
    </>
  )
}

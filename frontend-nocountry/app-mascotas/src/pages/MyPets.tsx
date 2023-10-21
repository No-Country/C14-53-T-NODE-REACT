import { PetAvatar } from "../components/Pets/PetAvatar"


export const MyPets = () => {
  return (
    <main >
      <div className=' text-montserrat relative  h-[150px] md:h-[220px] xl:h-[260px]   w-[90%] lg:w-[60%] xl:w-[65%] md:m-8 md:px-12   mx-5 rounded-2xl opacity-100 shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>


        <h2 className='text-center py-2 font-black text-[1rem] xl:text-2xl'>Tus mascotas</h2>

        <div className="flex items-center justify-around">
          <div className="flex pl-2 md:pl-0 overflow-x-hidden py-2 w-[99%] lg:w-[89%] gap-3 lg:gap-6 xl:gap-3">

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

    </main>
  )
}

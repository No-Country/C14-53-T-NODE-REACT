import { PetAvatar } from "../components/Pets/PetAvatar"


export const MyPets = () => {
  return (
    <main >
      <div className='text-montserrat relative  h-[150px]   w-[90%]  mx-5 rounded-2xl opacity-100 shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>


        <h2 className='text-center py-2 font-black text-[1rem]'>Tus mascotas</h2>

        <div className="flex overflow-x-auto py-2 w-full">

          <PetAvatar img='./img/Chucky.png' name='Chucky'></PetAvatar>
          <PetAvatar img='./img/Darth_Vader.png' name='Darth Vader'></PetAvatar>
          <PetAvatar img='./img/Lucifer.png' name='Lucifer'></PetAvatar>
          <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
          <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
          <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
          <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>

        </div>
      </div>

    </main>
  )
}

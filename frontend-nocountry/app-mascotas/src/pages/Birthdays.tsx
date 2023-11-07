import { PetAvatar } from "../components/Pets/PetAvatar"
export const Birthdays = () => {
  return (
    <section className="h-[90vh] w-screen absolute top-20 flex flex-col items-center">

      <div className='containerbox w-[90%] z-20 lg:w-auto  lg:ml-8  lg:mt-6 xl:mt-12 xl:ml-16  lg:flex  rounded-2xl  '>
        <div className='pb-3  text-center   lg:h-[600px] xl:h-[700px] overflow-auto'>
          <p className='text-lg my-2 lg:mb-5 lg:text-xl font-bold font-montserrat'>Tus Mascotas</p>
          <div className='flex justify-center gap-3 lg:gap-7 lg:grid px-6'>
            {/* {MyPets ? MyPets?.slice(0, 6).map((pet: any, index: any) => <PetAvatar fn={null} key={index} img={pet.image} name={pet.name}></PetAvatar>) : <PetAvatarSkeleton /> */}
            {/* } */}
            <PetAvatar img={null} name={"Test"} fn={null} />
            <PetAvatar img={null} name={"Test"} fn={null} />
            <PetAvatar img={null} name={"Test"} fn={null} />
            <PetAvatar img={null} name={"Test"} fn={null} />

          </div>
        </div>
      </div>

    </section>
  )
}

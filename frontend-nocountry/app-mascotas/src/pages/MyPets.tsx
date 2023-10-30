import { PetAvatar } from '../components/Pets/PetAvatar'
import AddPetModal from '../components/modals/AddPetModal'
import AddHistoryModal from '../components/modals/AddHistoryModal'
import { useState, useEffect } from 'react'
import SeeEventsModal from '../components/modals/SeeEventsModal'
import AddActivityModal from '../components/modals/AddActivityModal'
import { GetPets } from '../api/pets'



export const MyPets = () => {
  const [showAddPetModal, setShowAddPetModal] = useState<boolean>(false)
  const [showAddHistoryModal, setShowAddHistoryModal] = useState<boolean>(false)
  const [showEventsModal, setShowEventsModal] = useState<boolean>(false)
  const [showActivityModal, setShowActivityModal] = useState<boolean>(false)

  const [pets, setPets] = useState<any>([1, 2, 3, 4])

  async function getPets() {
    return await GetPets()
  }


  useEffect(() => {
    getPets().then(res => {
      setPets(res.data?.pets)
    })
    console.log("renderizando")

  }, [])




  function closePetModal() {
    setShowAddPetModal(false)
    document.body.style.overflowY = 'auto'
  }

  function openPetModal(e: React.MouseEvent<HTMLElement>): void {
    e.preventDefault()
    setShowAddPetModal(true)
  }

  return (
    <>
      <main className='container mx-auto relative z-20 flex pt-[86px] md:pt-[150px]'>
        <div className='flex flex-col items-center gap-8 lg:gap-0 z-90 lg:items-stretch'>
          <div className=' text-montserrat relative  h-[160px] md:h-[220px] xl:h-[260px]   w-[85%] lg:w-[90%] xl:w-[90%] md:mx-8 md:mb-8 md:px-12    rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
            <h2 className='text-center py-2 font-black text-[1rem] xl:text-2xl'>Tus mascotas</h2>
            <div className='flex items-center justify-between'>
              <a className='absolute left-2 top-[38%]' href='#firstslide'>
                <img className='hidden mb-12 rotate-180 lg:flex' src='./img/arrow-right.svg' alt='carrousel-arrow-right' />
              </a>
              <div className='.n-scrollbar flex pl-2 md:pl-0 lg:pl-2 overflow-x-scroll lg:overflow-x-hidden scroll-smooth py-2 w-[99%] lg:w-[91%]  gap-2 lg:gap-6 xl:gap-3'>
                <div id='firstslide' className='flex gap-4'>
                  {pets
                    .slice(0, 6)
                    .map((pet: any) => (
                      <PetAvatar img={pet.image} name={pet.name}></PetAvatar>
                    ))}
                  <div id='anchor'></div>
                </div>
              </div>
              <a className='absolute right-2 top-[38%]' href='#anchor'>
                <img className='hidden mb-12 lg:flex' src='./img/arrow-right.svg' alt='carrousel-arrow-right' />
              </a>
            </div>
          </div>

          <div className='h-[45vh] overflow-y-hidden flex flex-col  lg:flex-row  lg:gap-4 items-center py-6 lg:mt-0 text-montserrat relative w-[85%] lg:w-[90%] xl:w-[90%]  md:mx-8 rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
            <button className='absolute lg:hidden right-8 '>
              <img className='md:scale-150' src='./img/addtasks.svg' alt='add-task-button' />
            </button>

            <img className='w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] xl:h-[230px] xl:w-[230px] lg:ml-6 ' src='./img/Chucky.png' alt='selected-pet-image' />
            <div className='flex flex-col lg:gap-3'>
              <div className='grid grid-cols-3 place-items-center m-4 gap-3  text-[10px] md:text-sm xl:text-xl'>
                <div className='flex gap-1'>
                  <h2 className='font-black'>Nombre:</h2>
                  <p className='font-bold'>Chucky</p>
                </div>
                <div className='flex gap-1'>
                  <h2 className='font-black'>Especie:</h2>
                  <p className='font-bold'>Conejo</p>
                </div>

                <div className='flex gap-1'>
                  <h2 className='font-black'>Raza:</h2>
                  <p className='font-bold'>N/A</p>
                </div>

                <div className='flex gap-1'>
                  <h2 className='font-black'>Peso:</h2>
                  <p className='font-bold'>4.2kg</p>
                </div>

                <div className='flex gap-1 ml-20'>
                  <h2 className='font-black whitespace-nowrap'>Fecha de nacimiento:</h2>
                  <p className='font-bold'>12/10/23</p>
                </div>
              </div>

              <div className='flex flex-col items-center gap-2'>
                <h2 className='text-[12px] font-black md:text-sm xl:text-xl'>Descripcion Adicional</h2>
                <p className='text-[10px] md:text-sm px-4 font-[700] mt-2  xl:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis impherdiet nunc eget vehicula. Curabitur sed elementum turpis, in varius metus. Sed vehicula erat sed lacus pellentesque vulputate. Nullam nec felis a eros consectetur hendrerit in ac augue. </p>
              </div>
            </div>
          </div>

          <div className='flex justify-center gap-7 md:justify-around  mobilepanel relative h-[70px] w-[85%] lg:hidden rounded-xl  shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
            <button onClick={e => openPetModal(e)}>
              <img src='./img/addpet.svg' alt='add-pet-button' />
            </button>
            <button onClick={() => setShowAddHistoryModal(true)}>
              <img src='./img/addhistory.svg' alt='add-history-button' />
            </button>
            <button onClick={() => setShowEventsModal(true)} className='mb-2'>
              <img src='./img/seetasks.svg' alt='see-tasks-button' />
            </button>
            <button>
              <img src='./img/deletepet.svg' alt='delete-pet-button' />
            </button>
          </div>
        </div>

        <div className='hidden lg:flex flex-col text-montserrat py-8 items-center gap-12 h-[78vh]   mb-8 mx-8  relative  lg:w-[90%] xl:w-[80%]  rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
          <h2 className='text-3xl font-black xl:text-4xl'>Acciones</h2>
          <ul className='font-bold text-left lg:text-lg xl:text-2xl'>
            <li className='py-4'>
              <button onClick={openPetModal}>Agregar mascota</button>
            </li>
            <li className='py-4 xl:py-7'>
              <button onClick={() => setShowAddHistoryModal(true)}>Ingresar historia medica </button>
            </li>
            <li className='py-4 xl:py-7'>
              <button onClick={() => setShowActivityModal(true)}>Agendar Actividad</button>
            </li>
            <li className='py-4 xl:py-7'>
              <button onClick={() => setShowEventsModal(true)}>Ver Actividades</button>
            </li>
            <li className='py-4 xl:py-7'>
              <button>Eliminar</button>
            </li>
          </ul>
        </div>

        <AddPetModal isVisible={showAddPetModal} onClose={() => closePetModal()} />

        <AddHistoryModal isVisible={showAddHistoryModal} onClose={() => setShowAddHistoryModal(false)} />
        <SeeEventsModal isVisible={showEventsModal} onClose={() => setShowEventsModal(false)} />
        <AddActivityModal isVisible={showActivityModal} onClose={() => setShowActivityModal(false)} />

      </main>
    </>
  )
}

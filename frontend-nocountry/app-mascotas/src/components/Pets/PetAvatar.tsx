export const PetAvatar = ({ img, name, fn }: { img: string; name: string, fn?: any }) => {
  if (img === null) {
    img = './img/anonym-pet.jpeg'
  }
  return (
    <div onClick={fn} className='flex flex-col items-center flex-shrink-0 xl:px-4 group'>
      <img className='mb-2 w-[66px] h-[66px] md:w-[120px] border-4 md:h-[120px] border-transparent xl:w-[150px] xl:h-[150px] group-hover:border-4 hover:border-solid group-hover:border-[#000] rounded-full' src={img} alt='{name}' />
      <p className='md:text-[20px] text-sm text-center font-black font-montserray'>{name}</p>
    </div>
  )
}

export const PetAvatar = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="px-2 flex-shrink-0">
      <img className='mb-2 w-[66px] h-[66px] md:w-[90px] md:h-[90px]' src={img} alt='{name}' />
      <p className='md:text-lg text-[8px] text-center font-black font-montserray'>{name}</p>
    </div>
  )
}

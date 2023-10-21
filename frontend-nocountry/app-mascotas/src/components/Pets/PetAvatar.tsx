export const PetAvatar = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="xl:px-4 flex-shrink-0 flex flex-col items-center ">
      <img className='mb-2 w-[66px] h-[66px] md:w-[120px] md:h-[120px] xl:w-[150px] xl:h-[150px]' src={img} alt='{name}' />
      <p className='md:text-[20px] text-sm text-center font-black font-montserray'>{name}</p>
    </div>
  )
}

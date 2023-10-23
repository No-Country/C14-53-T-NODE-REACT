export const PetAvatar = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className='group'>
      <img className='mb-2 border-4 border-transparent rounded-full group-hover:border-4 group-hover:border-[#000]' src={img} alt='{name}' />
      <p className='text-xl font-black font-montserray'>{name}</p>
    </div>
  )
}

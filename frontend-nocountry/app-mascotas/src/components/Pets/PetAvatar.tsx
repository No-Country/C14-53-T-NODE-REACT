import React from 'react'

export const PetAvatar = ({ img, name }: { img: string; name: string }) => {
  return (
    <div>
      <img className='mb-2' src={img} alt='{name}' />
      <p className='text-lg font-black font-montserray'>{name}</p>
    </div>
  )
}

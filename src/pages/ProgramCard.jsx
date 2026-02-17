import React from 'react'

const ProgramCard = ({ image, title, age }) => {
  return (
    <div className="bg-pink-600 rounded-3xl p-6 w-[260px] text-center text-white
                    hover:-translate-y-3 transition-all duration-300 shadow-xl">

      <div className="bg-white rounded-2xl p-4 mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-[160px] object-contain rounded-2xl"
        />
      </div>

      <h3 className="font-kid text-xl mb-2">{title}</h3>
      <p className="text-sm opacity-90">{age}</p>
    </div>
  )
}

export default ProgramCard
import React from 'react'

export const CtaregoryItems = (props) => {
  return (
    <div className="group relative h-75 w-75 overflow-hidden rounded-2xl cursor-pointer">
   
      <img 
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
        src={props.img} 
        alt="Watch" 
      />

      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 p-5 text-white z-10">
        <h1 className="text-xl font-bold tracking-wide transition-transform duration-300 group-hover:-translate-y-1">
          {props.title}
        </h1>
        <p className="text-sm text-gray-300 mt-1 transition-transform duration-300 group-hover:-translate-y-1">
          {props.Artifacts} Artifacts
        </p>
      </div>
    </div>
  )
}
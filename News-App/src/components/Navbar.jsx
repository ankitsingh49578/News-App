import React from 'react'

function Navbar({setCategory}) {
  return (
    <div className='flex flex-row gap-10 bg-[#616161] py-4 px-4 select-none'>
        <div className='cursor-pointer'>
            <div className='bg-[#e0dfdf] p-1 rounded-md px-2 font-bold text-xl'>
                NewsTime
            </div>
        </div>
        <ul className='flex flex-row justify-evenly gap-5 text-[#e0dfdf] text-[18px] font-semibold'>
            <li onClick={()=>setCategory("technology")} className='cursor-pointer hover:text-yellow-100 group'> Technology <div className='h-[2px] w-full group-hover:bg-white'></div></li>
            <li onClick={()=>setCategory("business")} className='cursor-pointer hover:text-yellow-100 group:'> Business <div className='h-[2px] w-full group-hover:bg-white'></div></li>
            <li onClick={()=>setCategory("health")} className='cursor-pointer hover:text-yellow-100 group'> Health <div className='h-[2px] w-full group-hover:bg-white'></div></li>
            <li onClick={()=>setCategory("science")} className='cursor-pointer hover:text-yellow-100 group'> Science <div className='h-[2px] w-full group-hover:bg-white'></div></li>
            <li onClick={()=>setCategory("entertainment")} className='cursor-pointer hover:text-yellow-100 group'> Entertainment <div className='h-[2px] w-full group-hover:bg-white'></div></li>
        </ul>
    </div>
  )
}

export default Navbar
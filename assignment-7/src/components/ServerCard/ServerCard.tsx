import React from 'react'

interface Card {
  bookName:string;
  type:string;
  available:boolean;
  id:number;
}
const ServerCard = ({bookName, type, available, id}: Card) => {
  return (
    <div className='bg-gray-300 p-3 rounded-md w-[350px] border-2 border-solid border-gray-300'>
      <h1 className='text-2xl font-bold'>{bookName}</h1>
      <div className='text-gray-400 text-[15px] flex flex-row flex-nowrap justify-start items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="text-gray-400 bi bi-book" viewBox="0 0 16 16" id="Book--Streamline-Bootstrap" height="16" width="16"><desc>Book Streamline Icon: https://streamlinehq.com</desc><path d="M1 2.828c0.885 -0.37 2.154 -0.769 3.388 -0.893 1.33 -0.134 2.458 0.063 3.112 0.752v9.746c-0.935 -0.53 -2.12 -0.603 -3.213 -0.493 -1.18 0.12 -2.37 0.461 -3.287 0.811zm7.5 -0.141c0.654 -0.689 1.782 -0.886 3.112 -0.752 1.234 0.124 2.503 0.523 3.388 0.893v9.923c-0.918 -0.35 -2.107 -0.692 -3.287 -0.81 -1.094 -0.111 -2.278 -0.039 -3.213 0.492zM8 1.783C7.015 0.936 5.587 0.81 4.287 0.94c-1.514 0.153 -3.042 0.672 -3.994 1.105A0.5 0.5 0 0 0 0 2.5v11a0.5 0.5 0 0 0 0.707 0.455c0.882 -0.4 2.303 -0.881 3.68 -1.02 1.409 -0.142 2.59 0.087 3.223 0.877a0.5 0.5 0 0 0 0.78 0c0.633 -0.79 1.814 -1.019 3.222 -0.877 1.378 0.139 2.8 0.62 3.681 1.02A0.5 0.5 0 0 0 16 13.5v-11a0.5 0.5 0 0 0 -0.293 -0.455c-0.952 -0.433 -2.48 -0.952 -3.994 -1.105C10.413 0.809 8.985 0.936 8 1.783" strokeWidth="1"></path></svg>  {id} min read</div>
      <div className='text-gray-400 text-[15px] flex flex-row flex-nowrap justify-start items-center gap-2'>{type}</div>
      {available?       <div className='text-green-500 text-[15px] font-normal'> <span className='bg-green-500 relative rounded-full w-[10px] h-[10px]'></span>Available</div>: 
      <div className='text-red-500 text-[15px] font-normal'><span></span> Not Available</div>}
      </div>
  )
}

export default ServerCard
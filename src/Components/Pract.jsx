import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Pract() {
    const[nav,setNav]=useState(false)
    const links=[
      {title:"Home" ,path:"/"},
      {title:"About" ,path:"/about"},
      {title:"Projects" ,path:"/project"},
      {title:"Contact" ,path:"/contact"},
    ]
  return (
    <>
    <h1 className='text-white'>Hii</h1>
    
     <h1 className='text-white'> {
        links.map((data)=>
          (<ul>
            <li>{data.title}</li>
          </ul>
        ))
      }</h1>

    </>
    // <div>
    // <div 
    //    onClick={()=>setNav(!nav)}
    //    className='text-4xl text-white pl-20 pt-20'>
    //    {
    //     nav? <FaTimes/>:<FaBars />
    // }
    // </div>
    
    //   {
    //     nav &&(
    //       <div className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-2xl font-bold'>
    //         {
    //           links.map((data)=>{
    //             <NavLink to={data.path}>
    //               <ul>
    //                 <li>{data.title}</li>
    //               </ul>
    //             </NavLink>
    //           })
    //         }
    //       </div>
    //     )
    //   }
    // </div>
    

        
  )
}

export default Pract

import React from "react";
import CabImage from "/Images/cabProjectImage.avif";
import TiicTacToe from "/Images/TictactoeImage.png";
import PizzaPool from "/Images/PizzaPool.png";
import WeatherApp from "/Images/WeatherApp1.jpeg";
import PortFolioImage from "/Images/Portfolio.avif";
import Todo from "/Images/TodoApp.avif";

function Project() {
  return (
    // <div>
    //   <div className=' md:h-screen  text-white/80'>
    //     <div className='max-w-[1320px] mx-auto'>
    //       <h1 className='text-4xl text-center py-5'>Projects</h1>
    //     </div>
    //       <div className='max-w-[1320px] mx-auto grid  lg:grid-cols-4 md:grid-cols-3 gap-16 px-[20px]'>
    //         <div className='  rounded-lg shadow-[#E63946] shadow-xl '>
    //           <div className='h-[150px] bg-green-400 mx-3 my-2 rounded-lg'>Image section</div>
    //           <div className=' '>
    //             <p className='md:px-3 px-8 text-sm '><h1 className='text-xl'>VAHAN </h1>(Cab Booking Management System)</p>
    //           <p className='text-xs md:px-3 px-8 py-3'>A WebApp Where Customer Can know the Accurate Cab Rent Based On the Cabs Varients</p>
    //           {/* <p className='tect-sm'> In This </p> */}
    //           <p className='text-xs md:px-3 px-8 '>Technology used :- React Js (Frontend) , NodeJs (Backend) , MongoDB (DataBase).</p>
    //           </div>
    //           <div className='flex h-[50px] my-3'>
    //             <div className='md:px-3 px-7'>
    //               <button className='md:w-20 w-28 border-2 border-[#E63946] h-10 shadow-[#E63946] shadow-md'>GitHub</button>
    //             </div>
    //             <div className='px-3'>
    //               <button className='md:w-20 w-28 border-2 border-[#E63946] h-10 shadow-[#E63946] shadow-md'>Live</button>
    //             </div>

    //           </div>
    //         </div>
    //         <div className='  rounded-lg shadow-[#E63946] shadow-xl border-2 border-red-300 '>
    //           <div className='h-[150px] bg-green-400 mx-3 my-2 rounded-lg '>Image Section</div>
    //           <div className=''>
    //            <p className='md:px-3 px-8 text-sm '><h1 className='text-xl'>Portfolio </h1>(Portfolio Website)</p>
    //            <p className='text-xs md:px-3 px-8 py-3'>A Personal Website That Reprents My Skills, Projects And Experiance</p>
    //            <p className='text-xs md:px-3 px-8 '>Technology used :-    React Js , Node Js  ,  ExpressJs ,TailwindCss.</p>
    //           </div>
    //           <div>
    //           <div className='flex h-[50px] my-3'>
    //             <div className='md:px-3 px-7'>
    //               <button className='md:w-20 w-28 border-2 border-[#E63946] h-10 shadow-[#E63946] shadow-md'>GitHub</button>
    //             </div>
    //             <div className='px-3'>
    //               <button className='md:w-20 w-28 border-2 border-[#E63946] h-10 shadow-[#E63946] shadow-md'>Live</button>
    //             </div>
    //           </div>
    //           </div>
    //         </div>
    //         <div className='h-96  rounded-lg shadow-[#E63946] shadow-xl'>
    //           <div className='h-[150px] bg-green-400 mx-3 my-2 rounded-lg'>Image section</div>
    //           <div className=''>
    //           <p className='md:px-3 px-8 text-sm '><h1 className='text-xl'>Tic Tac Toe </h1>(WebApp Game)</p>
    //            <p className='text-xs md:px-3 px-8 py-3'>A Tic Tac Toe Game Where Two players Can Play Game and Enjoy It. I make this to build Up Logic </p>
    //            <p className='text-xs md:px-3 px-8 '>Technology used :-    React Js  And TailwindCss.</p>
    //           </div>
    //           <div>
    //           <div className='flex h-[50px] my-3'>
    //             <div className='md:px-3 px-7'>
    //               <button className='md:w-20 w-28 border-2 border-[#E63946] h-10 shadow-[#E63946] shadow-md'>GitHub</button>
    //             </div>
    //             <div className='px-3'>
    //               <button className='md:w-20 w-28 border-2 border-[#E63946] h-10 shadow-[#E63946] shadow-md'>Live</button>
    //             </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className='h-96 shadow-[#E63946] shadow-xl rounded-lg'>
    //           <div className='h-[40%] bg-green-400 mx-3 my-2 rounded-lg'>Image section</div>
    //           <div className='h-[40%] bg-orange-400'>content</div>
    //           <div>Buttons</div>
    //         </div>
    //       </div>
    //   </div>
    // </div>
    <>
      <div className="">
        <div className="">
          <h1 className="text-4xl py-2 font-bold text-white text-center">
            Projects
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-10 mx-10 px-12 pt-4">
          <div className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg ">
            <img
              className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
              src={PizzaPool}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#ed0c1d]  "></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
              <h1 className="text-3xl font-bold text-white">Pizza Pool</h1>
              <div className="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <p>
                  A WebApp Where Customer Can know the Accurate Cab Rent Based
                  On the Cabs Varients
                </p>

                <p>
                  Technology Used:- React Js (Frontend) , NodeJs (Backend) ,
                  MongoDB (DataBase).
                </p>
              </div>
              <div className="flex gap-10">
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  GitHub
                </button>
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  Live
                </button>
              </div>
            </div>
          </div>
          <div className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg ">
            <img
              className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
              src={CabImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#ed0c1d]  "></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
              <h1 className="text-3xl font-bold text-white">VAHAN</h1>
              <div className="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <p>
                  A WebApp Where Customer Can know the Accurate Cab Rent Based
                  On the Cabs Varients
                </p>

                <p>
                  Technology Used:- React Js (Frontend) , NodeJs (Backend) ,
                  MongoDB (DataBase).
                </p>
              </div>
              <div className="flex gap-10">
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  GitHub
                </button>
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  Live
                </button>
              </div>
            </div>
          </div>
          <div className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg ">
            <img
              className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
              src={WeatherApp}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#ed0c1d]  "></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
              <h1 className="text-3xl font-bold text-white">Weather App</h1>
              <div className="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <p>
                  A WebApp Where Customer Can know the Accurate Cab Rent Based
                  On the Cabs Varients
                </p>

                <p>
                  Technology Used:- React Js (Frontend) , NodeJs (Backend) ,
                  MongoDB (DataBase).
                </p>
              </div>
              <div className="flex gap-10">
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  GitHub
                </button>
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  Live
                </button>
              </div>
            </div>
          </div>
          <div className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg ">
            <img
              className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
              src={PortFolioImage}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#ed0c1d]  "></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
              <h1 className="text-3xl font-bold text-white">PORTFOLIO</h1>
              <div className="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <p>
                  A WebApp Where Customer Can know the Accurate Cab Rent Based
                  On the Cabs Varients
                </p>

                <p>
                  Technology Used:- React Js (Frontend) , NodeJs (Backend) ,
                  MongoDB (DataBase).
                </p>
              </div>
              <div className="flex gap-10">
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  GitHub
                </button>
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  Live
                </button>
              </div>
            </div>
          </div>
          <div className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg ">
            <img
              className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
              src={TiicTacToe}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#ed0c1d]  "></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
              <h1 className="text-3xl font-bold text-white">Tic Tac Toe</h1>
              <div className="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <p>
                  A WebApp Where Customer Can know the Accurate Cab Rent Based
                  On the Cabs Varients
                </p>

                <p>
                  Technology Used:- React Js (Frontend) , NodeJs (Backend) ,
                  MongoDB (DataBase).
                </p>
              </div>
              <div className="flex gap-10">
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  GitHub
                </button>
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  Live
                </button>
              </div>
            </div>
          </div>

          <div className="h-[300px] group relative items-center justify-center overflow-hidden cursor-pointer rounded-lg ">
            <img
              className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-transform duration-500"
              src={Todo}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent group-hover:to-[#ed0c1d]  "></div>
            <div className=" absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
              <h1 className="text-3xl font-bold text-white">Todo App</h1>
              <div className="text-sm italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <p>
                  A WebApp Where Customer Can know the Accurate Cab Rent Based
                  On the Cabs Varients
                </p>

                <p>
                  Technology Used:- React Js (Frontend) , NodeJs (Backend) ,
                  MongoDB (DataBase).
                </p>
              </div>
              <div className="flex gap-10">
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  GitHub
                </button>
                <button className="bg-white w-[100px] font-bold h-[35px] rounded-md">
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

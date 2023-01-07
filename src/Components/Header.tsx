import React from "react";
import { useNavigate } from "react-router-dom";


const navigate = useNavigate()

function handleClickNavigateDogApi(){
    navigate("/dogpage")
   }
   function handleClickNavigateCatApi(){
    navigate("/cathttps")
   }
    

export function Header(){

    
    return(
        <div className='flex gap-3 bg-black justify-center'>
        
          <button onClick={() => handleClickNavigateDogApi()} className='text-white'>
            DogApi
          </button>
          <button onClick={() => handleClickNavigateCatApi()} className='text-white'>
            CatApi
          </button>
          <button onClick={() => handleClickNavigateCatApi()} className='text-white'>
            CRUD
          </button>
      </div>
    )
}
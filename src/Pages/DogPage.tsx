import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";



export function DogPage(){
const [data,setData] = useState<string>('')

useEffect(() =>{
    async function Api(){
        await axios.get('https://random.dog/woof.json')
        .then((response) => {
        setData(response.data.url)
        })
    }
   Api()
},[])



function refreshPage() {
    // Atualiza a página atual
    window.location.reload();
  }
  const navigate = useNavigate()

  function handleClickNavigateDogApi(){
      navigate("/dogpage")
     }
  function handleClickNavigateCatApi(){
      navigate("/cathttps")
     }
     function handleClickNavigateCrud(){
      navigate("/crud")
     }
     
    return(
        <div>
       <div className='flex gap-3 bg-black h-16 justify-center'>
        
        <button onClick={() => handleClickNavigateDogApi()} className='text-white'>
          DogApi
        </button>
        <button onClick={() => handleClickNavigateCatApi()} className='text-white'>
          CatApi
        </button>
        <button onClick={() => handleClickNavigateCrud()} className='text-white'>
          CRUD
        </button>
    </div>
        <div className="flex w-100 flex-col items-center justify-center h-screen">
            <div className=" w-96" >
            <img className=" w-96" src={data} />
            </div>
     
        <div>
        <button onClick={refreshPage} type="submit" className="bg-blue-500 mt-4  font-bold text-gray-100 p-3
            rounded hover:bg-blue-600 transition-colors
            ">Refresh para um novo DOG</button>
        </div>
        </div>
        </div>
       
        )
}
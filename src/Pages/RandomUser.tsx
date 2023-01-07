import axios from 'axios';
import react,{ useEffect, useState,ChangeEvent, } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardUser } from '../Components/Card';
import { filter, find } from 'lodash';

interface PropsRandom{
    email: string;
    name: {
        senhor:string;
        first:string;
        last:string;
    }
    picture:{
        large: string;
    }
    login:{
      username:string;
    }
    dob:{
      age:string;
    }
   
}

export function RandomUser() {
  const [users, setUsers] = useState<PropsRandom[]>([]);
  const [page, setPage] = useState(2);
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<PropsRandom[]>([]);


  const navigate  = useNavigate()
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://randomuser.me/api?page=1&results=15`
      );
      console.log(result.data.results)
      setUsers(result.data.results);
      
    }
    fetchData();
  }, [page]);

useEffect(() =>{
  
  const user: PropsRandom[] = filter(users, user => {
    return (
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.login.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  setResults(user)
},[search])

  const onSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const user: PropsRandom[] = filter(users, user => {
    return (
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.login.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

 function handleClickNavigateDogApi(){
  navigate("/dogpage")
 }
 function handleClickNavigateCatApi(){
  navigate("/cathttps")
 }
  
 function handleClickNavigateCrud(){
  navigate("/crud")
 }
  

  return (
    <div className=' flex flex-col'>
      <div className='flex gap-3 bg-black justify-center'>
        <input placeholder="Procure o usuario..." value={search} onChange={onSearch} type="text" className=" rounded  py-2 mt-3 bg-gray-50 text-gray-500 w-40 px-1 outline-none mb-4 md:w-48"/>
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
    <div className='flex h-[900px] md:justify-center'>
      <div >
      {search.length > 0 ? 
      <div className='flex flex-wrap md:w-[1550px] py-10  gap-2 justify-center'>
        {results.map((user) => {
                  return(

                          <CardUser
                          email={user.email}
                          picture={user.picture.large}
                          senhor={user.name.senhor}
                          first={user.name.first}
                          last={user.name.last}
                          username={user.login.username}
                          age={user.dob.age}
                          />
                      
                  )
                  })} 

      </div> : 
      <div className='flex flex-wrap md:w-[1550px] py-10  gap-2 justify-center'>
        {users.map((user) => {
                  return(

                          <CardUser
                          email={user.email}
                          picture={user.picture.large}
                          senhor={user.name.senhor}
                          first={user.name.first}
                          last={user.name.last}
                          username={user.login.username}
                          age={user.dob.age}
                          />
                      
                  )
                  })} 
      
      </div>}
      <div className='flex w-[398px] justify-center align-middle  md:w-full   md:mt-4'>
        
              <div aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
    
      <li>
        <button onClick={() => setPage(1)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100">1</button>
      </li>
      <li>
        <button onClick={() => setPage(2)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100">2</button>
      </li>
      <li>
        <button onClick={() => setPage(3)} aria-current="page" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100">3</button>
      </li>
      <li>
        <button onClick={() => setPage(4)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100">4</button>
      </li>
      <li>
        <button onClick={() => setPage(5)} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100">5</button>
      </li>
    
      </ul>
      </div>

    </div>
            
      </div>
      
    </div>
      
    </div>
        
        
  );
}
import react,{} from 'react'


interface Props{
    email:string
    picture:string
    senhor:string
    first:string
    last:string
    username:string
    age:string
}

export function CardUser({email,picture,first,last,senhor,username,age}:Props){
    return(

        <div className='shadow md:w-[430px] w-[400px] flex  rounded  '>

        <div className=' '>
            <img className='w-32 md:w-32 rounded' src={picture}/>
        </div>

        <div className=' justify-center  align-middle mt-6 ml-3  flex'>
            <div className='flex-col justify-start flex text-sm'>
                <div>
               <strong>Name:</strong>{senhor} {first} {last}
                </div>
                <div>
                <strong>Email:</strong>{email}
                </div>
                <div>
                <strong>Username:</strong>{username}
                </div>
                <div>
                <strong>Age:</strong>{age}
                </div>
            </div>
            
        </div>

        </div>
        
   
    
    )
}
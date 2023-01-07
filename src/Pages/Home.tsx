import axios from "axios";
import react,{ChangeEvent, useState} from "react";
import { useNavigate } from "react-router-dom";


export function Home(){

  const navigate  = useNavigate()
  const [username,setUsername] = useState<string>('')
  const [password,setPassword] = useState<string>('')

  const onEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const onPasswordChange= (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

const loginbutton = () =>{
 axios.post ("http://192.168.15.126:3000/user/login",{
  username:username,
  password:password
}).then((response) => {
  navigate("/randomuser")
  console.log(response)

}).catch((error) => {
  alert("usuario ou senha errada !")

  return
})

}
  

  

    return(
       <div className="flex items-center justify-center h-screen bg-gray-100">
        <div>
          <div className="bg-white w-96 p-6 rounded shadow-sm" >
            <div className="flex items-center justify-center mb-4"> 
              <img src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              className="w-32"
              />
            </div>

            <label className="text-gray-700 font-bold">
              email
            </label>
            <input
           onChange={onEmailChange}
            required placeholder="name@hotmail.com" value={username} type="text" className=" rounded w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"/>
            <label className="text-gray-700 font-bold">
              password
            </label>
            <input
            onChange={onPasswordChange}
            placeholder="******" type="password" value={password} className=" rounded w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4
          
            " required/>
            
            <input type="checkbox" className="m-2" />
            <label >Remember me </label>    

            <div className="flex items-center justify-center mt-4">
            <button onClick={loginbutton} type="submit" className="bg-blue-500 w-full text-gray-100 py-2
            rounded hover:bg-blue-600 transition-colors
            ">Login</button>
            </div>
            </div>
          
        </div>

       </div>
    )
}


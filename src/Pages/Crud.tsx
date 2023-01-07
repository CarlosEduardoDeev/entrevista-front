import axios from "axios";
import react, { useEffect, useState } from "react";
import { ListUser } from "../Components/ListUser";
import Modal from 'react-modal';
import { Alert } from "@mui/material";

interface ListUsers{
    name: string,
    telefone:string, 
    email:string
    endereco:string
    _id:string
    cpf:string
}


export function Crud(){

    useEffect(()=>{
        axios.get('http://192.168.15.126:3000/client/list')
        .then((response) =>{
            setUsers(response.data)
            console.log(response.data)
        })
    },[])

    const customStyles = {
        content: {
            top: "300px",
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        };

    const [users,setUsers] = useState<ListUsers[]>([])
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');

    function handleSave(){
            axios.post("http://192.168.15.126:3000/client/",{
                name:name,
                telefone:telefone,
                email:email,
                endereco:endereco,
                cpf:cpf
            }).then(() =>{
                alert("usuario criado ")
                window.location.reload();
            })
    }

    function handleCloseModal(){
        setOpen(false)
        
    
    }

    return(
        <div className="flex w-full border-4 border-blue-900 justify-center h-screen">
            <div className=" mt-36 m-2 w-[800px] h-[400px] flex-col flex  ">
                <div className=" flex justify-end ">
                    <button onClick={() =>setOpen(true)} className="mr-4 bg-green-600 m-3 p-2 rounded font-bold text-white">
                        Create
                    </button>
                </div>
                <div className=" flex  rounded  justify-between ">
                    <strong>Name</strong>
                </div>
                <div className=" gap-2 flex flex-col  rounded  h-24 ">
                    {users.map(user =>{
                        return(
                            <ListUser
                            key={user._id}
                            name={user.name}
                            telefone={user.telefone}
                            email={user.email}
                            cpf={user.cpf}
                            endereco={user.endereco}
                            id={user._id}
                            />
                        )
                    })}
                    
                    <div>
                    <Modal
                        style={customStyles}
                        isOpen={open}
                
                    >   
                <div className='gap-2 flex flex-col'>
                    <div className='flex justify-end'>
                     <button onClick={handleCloseModal} className='font-bold'>
                        X
                     </button>
                    </div>
                    <div className=' w-60'>
                    Name
                    </div>
                    <input  type="text" className='' placeholder='teste' onChange={(e) => setName(e.target.value)} />
                    <div className=' w-60'>
                    Email
                    </div>
                    <input type="text" className='' placeholder='teste' onChange={(e) => setEmail(e.target.value)} />
                    <div className=' w-60'>
                    Telefone
                    </div>
                    <input type="text" className='' placeholder='teste' onChange={(e) => setTelefone(e.target.value)}/>
                    <div className=' w-60'>
                    Endereço
                    </div>
                    <input  type="text" className='' placeholder='teste' onChange={(e) => setEndereco(e.target.value)}/>
                    <div className=' w-60'>
                    CPF
                    </div>
                    <input  type="text" className='' placeholder='teste' onChange={(e) => setCpf(e.target.value)}/>
                    <div className='gap-2 flex justify-end mt-5'>
                        <button onClick={handleSave}  className='bg-green-600 w-14 text-white font-bold rounded disabled:opacity-40'>
                            Salvar
                        </button>
                       
                       
                    </div>
                </div>    
                
                </Modal>
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}
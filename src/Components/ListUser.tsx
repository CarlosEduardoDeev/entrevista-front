import react,{useEffect, useState} from 'react'
import Modal from 'react-modal';

import axios from 'axios';

Modal.setAppElement("#root")

interface ListUsers{
    name: string,
    telefone:string, 
    email:string
    endereco:string
    id:string
    cpf:string
    key:string
}

export function ListUser({name,cpf,endereco,email,telefone,key,id}:ListUsers){
    
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
    
function handleOpenModal(){
    setOpen(true)
}
function handleCloseModal(){
    setOpen(false)
    setDisabled(true)

}
function handleEdit(){
    

    setDisabled(false)
}

function handleSaveEdit(){

    if(!names){
        setName(name)
    }

    axios.patch(`http://192.168.15.126:3000/user/update/${id}`,{
        name:names,
        telefone:tel,
        email:emails,
        endereco:enderecos,
        cpf:cpfs
        
    }).then(() =>{
        alert("user updated successfully")
    })
}
function handleDeleteUser(){
    axios.delete(`http://192.168.15.126:3000/user/${id}`)
    .then(() =>{
        alert("User deleted")
        window.location.reload();
    })
    .catch((err) =>{
        console.log(err)
    })
}

const [open, setOpen] = useState(false);
const [disabled, setDisabled] = useState(true);

const [names, setName] = useState('');
const [tel, setTel] = useState('');
const [emails, setEmails] = useState('');
const [enderecos, setEnderecos] = useState('');
const [cpfs, setCpfs] = useState('');


 
    return(
        <div className='rounded shadow flex h-14 align-middle justify-between'>
            <div className=" m-3 mt-2 ml-2">
                {name}
            </div>
            <div>
                <button onClick={handleOpenModal} className='mr-4 mt-2  bg-orange-500 w-14 rounded text-white font-bold'>
                    ver+
                </button>  
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
                    <div className=' w-60 font-bold'>
                    Name                    
                    </div>
                    <input  onChange={(e) => setName(e.target.value)} disabled={disabled} type="text" className='' placeholder={name}/>
                    <div className=' w-60 font-bold'>
                    Email
                    </div>
                    <input onChange={(e) => setEmails(e.target.value)} disabled={disabled} type="text" className='' placeholder={email}/>
                    <div className=' w-60 font-bold'>
                    Telefone
                    </div>
                    <input onChange={(e) => setTel(e.target.value)}  disabled={disabled} type="text" className='' placeholder={telefone}/>
                    <div className=' w-60 font-bold'>
                    Endereço
                    </div>
                    <input  onChange={(e) => setEnderecos(e.target.value)} disabled={disabled} type="text" className='' placeholder={endereco}/>
                    <div className=' w-60 font-bold'>
                    CPF
                    </div>
                    <input onChange={(e) => setCpfs(e.target.value)}  disabled={disabled} type="text" className='' placeholder={cpf}/>
                    <div className='gap-2 flex justify-end mt-5'>
                        <button onClick={handleSaveEdit} disabled={disabled === true} className='bg-green-600 w-14 text-white font-bold rounded disabled:opacity-40'>
                            Salvar
                        </button>
                        <button onClick={handleEdit} disabled={disabled === false} className='bg-blue-600 w-11 text-white font-bold rounded disabled:opacity-40'>
                            Edite
                        </button>
                        <button onClick={handleDeleteUser} className='bg-red-600 w-16 text-white font-bold rounded' >
                            Excluir
                        </button>
                    </div>
                </div>    
                
                </Modal>
                   
                
            </div>
        </div>
    )
}
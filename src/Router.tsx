import { Route, Routes } from 'react-router-dom'
import { CatCodes } from './Pages/CatHttps'
import { Crud } from './Pages/Crud'
import { DogPage } from './Pages/DogPage'
import { Home } from './Pages/Home'
import { RandomUser } from './Pages/RandomUser'


export function Router (){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dogpage" element={<DogPage/>}/>
            <Route path="/randomuser" element={<RandomUser/>}/>
            <Route path="/cathttps" element={<CatCodes/>}/>
            <Route path="/crud" element={<Crud/>}/>
        </Routes>
    )
}
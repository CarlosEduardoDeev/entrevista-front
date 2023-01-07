import axios from "axios"
import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";


export function CatCodes(){

    const [code,setCode] = useState(400)

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
        <div className=" flex justify-center ">
            <div className=" md:w-[600px] shadow-lg flex flex-col p-3 rounded mt-6">
                <img className="md:w-[600px] "  src={`https://http.cat/${code}`}/>
          
                <div className=" flex-wrap flex md:justify-center justify-center mt-2 gap-2 md:flex-wrap">
                    <button onClick={() =>setCode(100)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        100
                    </button>
                    <button onClick={() =>setCode(101)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        101
                    </button>
                    <button onClick={() =>setCode(102)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        102
                    </button>
                    <button onClick={() =>setCode(103)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        103
                    </button>
                    <button onClick={() =>setCode(200)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        200
                    </button>
                    <button onClick={() =>setCode(201)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        201
                    </button>
                    <button onClick={() =>setCode(202)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        202
                    </button>
                    <button onClick={() =>setCode(203)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        203
                    </button>
                    <button onClick={() =>setCode(204)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        204
                    </button>
                    <button onClick={() =>setCode(206)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        206
                    </button>
                    <button onClick={() =>setCode(207)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        207
                    </button>
                    <button onClick={() =>setCode(300)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        300
                    </button>
                    <button onClick={() =>setCode(301)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        301
                    </button>
                    <button onClick={() =>setCode(302)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        302
                    </button>
                    <button onClick={() =>setCode(301)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        301
                    </button>
                    <button onClick={() =>setCode(302)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        302
                    </button>
                    <button onClick={() =>setCode(303)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        303
                    </button>
                    <button onClick={() =>setCode(304)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        304
                    </button>
                    <button onClick={() =>setCode(305)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        305
                    </button>
                    <button onClick={() =>setCode(307)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        307
                    </button>
                    <button onClick={() =>setCode(308)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        308
                    </button>
                    <button onClick={() =>setCode(400)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        400
                    </button>
                    <button onClick={() =>setCode(401)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        401
                    </button>
                    <button onClick={() =>setCode(402)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        402
                    </button>
                    <button onClick={() =>setCode(403)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        403
                    </button>
                    <button onClick={() =>setCode(404)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        404
                    </button>
                    <button onClick={() =>setCode(405)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        405
                    </button>
                    <button onClick={() =>setCode(406)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                       406
                    </button>
                    <button onClick={() =>setCode(407)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                       407
                    </button>
                    <button onClick={() =>setCode(408)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      408
                    </button>
                    <button onClick={() =>setCode(409)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      409
                    </button>
                    <button onClick={() =>setCode(410)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      410
                    </button>
                    <button onClick={() =>setCode(411)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      411
                    </button>
                    <button onClick={() =>setCode(412)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      412
                    </button>
                    <button onClick={() =>setCode(413)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      413
                    </button>
                    <button onClick={() =>setCode(414)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      414
                    </button>
                    <button onClick={() =>setCode(415)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      415
                    </button>
                    <button onClick={() =>setCode(416)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      416
                    </button>
                    <button onClick={() =>setCode(417)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      417
                    </button>
                    <button onClick={() =>setCode(418)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      418
                    </button>
                    <button onClick={() =>setCode(420)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      420
                    </button>
                    <button onClick={() =>setCode(421)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      421
                    </button>
                    <button onClick={() =>setCode(422)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      422
                    </button>
                    <button onClick={() =>setCode(423)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      423
                    </button>
                    <button onClick={() =>setCode(424)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      424
                    </button>
                    <button onClick={() =>setCode(425)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      425
                    </button>
                    <button onClick={() =>setCode(426)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      426
                    </button>
                    <button onClick={() =>setCode(429)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      429
                    </button>
                    <button onClick={() =>setCode(431)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      431
                    </button>
                    <button onClick={() =>setCode(444)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      444
                    </button>
                    <button onClick={() =>setCode(450)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      450
                    </button>
                    <button onClick={() =>setCode(451)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                      451
                    </button>
                    <button onClick={() =>setCode(497)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        497
                    </button>
                    <button onClick={() =>setCode(498)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        498
                    </button>
                    <button onClick={() =>setCode(499)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        499
                    </button>
                    <button onClick={() =>setCode(500)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        500
                    </button>
                    <button onClick={() =>setCode(501)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        501
                    </button>
                    <button onClick={() =>setCode(502)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        502
                    </button>
                    <button onClick={() =>setCode(503)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        503
                    </button>
                    <button onClick={() =>setCode(504)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        504
                    </button>
                    <button onClick={() =>setCode(506)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        506
                    </button>
                    <button onClick={() =>setCode(507)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        507
                    </button>
                    <button onClick={() =>setCode(508)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        508
                    </button>
                    <button onClick={() =>setCode(509)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        509
                    </button>
                    <button onClick={() =>setCode(510)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        510
                    </button>
                    <button onClick={() =>setCode(511)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        511
                    </button>
                    <button onClick={() =>setCode(521)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        521
                    </button>
                    <button onClick={() =>setCode(522)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        522
                    </button>
                    <button onClick={() =>setCode(523)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        523
                    </button>
                    <button onClick={() =>setCode(525)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        525
                    </button>
                    <button onClick={() =>setCode(599)} className="bg-red-500 w-14 rounded text-[18px] text-white font-bold hover:bg-red-400 " >
                        599
                    </button>


                </div>
            </div>
           
        </div>
        </div>
    )
}
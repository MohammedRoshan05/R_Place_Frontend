import { useNavigate } from 'react-router-dom'

export default function Start(){
    const navigate = useNavigate()
    return(
        <div className='bg-[#DDCA75] h-screen w-screen flex flex-col justify-center items-center '>
            <h1 className=' h-auto text-[8.125rem] text-[#DE5131] w-auto font-figma  px-[50px] rounded-2xl '> R/Place</h1>
            <div className=' h-full w-full flex items-center justify-center'>
                <img src='Logo.png' className='h-[50%] mx-[10%] '/>
                <div className='h-full w-[50%] flex flex-col justify-center items-center'>
                <button 
                className='bg-[#000000] h-auto text-[5.125rem] text-[#DE5131] w-auto font-figma px-[50px] m-[50px] rounded-2xl opacity-93'> 
                Sign Up  
                </button> 
                <button  onClick={() => navigate('/login')}
                className='bg-[#000000] h-auto text-[5.125rem] text-[#DE5131] w-auto font-figma px-[50px] m-[50px] rounded-2xl opacity-93'> Login   </button>
                </div>
            </div>
        </div>
    )
}

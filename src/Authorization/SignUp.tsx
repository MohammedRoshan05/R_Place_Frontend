import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

type SignupReq = {
    Email: string,
    Password: string
};

export default function SignUp(){
    const navigate = useNavigate()
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSignup = async () => {
        var req : SignupReq = {
            Email : username,
            Password : password
        }
        instance.post('/create',req)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return(
        <div className='bg-[#DDCA75] h-screen w-screen flex flex-col justify-around items-center '>
            <div className='flex flex-row justify-center items-center'>
                <img src='Logo.png' className='h-[50%] mx-[10%] '/>
                <h1 className=' h-auto text-[8.125rem] text-[#DE5131] w-auto font-figma  px-[50px] rounded-2xl '> R/Place</h1>
            </div>

            <div className='bg-white h-[50%] w-full flex items-center justify-center '>
                <div className='h-full w-[50%] flex flex-col justify-center items-center'>
                    <label 
                        className='bg-[#000000] text-center h-auto text-[3.125rem] text-[#DE5131] text-3xl font-figma w-[60%] p-4 m-4 rounded-xl outline-none'> 
                        Username  
                    </label>
                    <label 
                        className='bg-[#000000] h-auto text-center text-[3.125rem] text-[#DE5131] text-3xl font-figma w-[60%] p-4 m-4 rounded-xl outline-none'> 
                        Password 
                    </label>
                </div>
                <div className='h-full w-[50%] flex flex-col justify-center items-center'>
                    <input
                        type='text'
                        value={username}
                        placeholder='Username'
                        onChange={(e) => {setUsername(e.target.value)}}
                        className='bg-[#000000] text-center h-auto text-[3.125rem] text-[#DE5131] text-3xl font-figma w-[60%] p-4 m-4 rounded-xl outline-none'
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        placeholder='Password'
                        className='bg-[#000000] text-center h-auto text-[3.125rem] text-[#DE5131] text-3xl font-figma w-[60%] p-4 m-4 rounded-xl outline-none'  
                    />
                </div>
            </div>
            <button 
                className='bg-[#000000] text-center h-auto text-[3.125rem] text-[#DE5131] text-3xl font-figma w-[10%] p-4 m-4 rounded-xl outline-none'
                onClick={() => handleSignup()}
                >
                SignUp
            </button>
        </div>
    )
}
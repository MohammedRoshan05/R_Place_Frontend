import React, { JSX,useEffect,useState } from 'react';
import { useAuthContext } from './context';
import useWebSocket from 'react-use-websocket';


type Cell = [number,string]

interface TileUpdate {
  tile_no: number;            // 1–100
  update_time: string;        // ISO timestamp
  username: string;
  colour: string;
}

export default function Game(): JSX.Element {
        

    const gridSize:number = 10;
    const initialGrid:Cell[] = Array.from({ length: gridSize * gridSize }, (_, i) => [i,"black"]);
    const [grid,setGrid] = useState<Cell[]>(initialGrid);
    const handlePixelClick = (index: number): void => {
        setGrid((cur) => 
            cur.map(([i,colour]) => 
                i == index ? [i,selectedColour] : [i,colour]
            )
        );
    };
    const [selectedColour,setSelectedColour] = useState("");
    const changeColour = (colour:string):void => {
        switch (colour) {
        case 'black': setSelectedColour("black"); break;
        case 'red':   setSelectedColour("red"); break;
        case 'blue':  setSelectedColour("blue"); break;
        case 'orange' :setSelectedColour("orange"); break;
        case 'yellow':  setSelectedColour("yellow"); break;
        case 'violet' : setSelectedColour("violet"); break;
        case 'green' : setSelectedColour("green"); break;
        default:      
        }
    }

    return (
    <div className="bg-[#DDCA75] h-screen w-screen flex flex-row justify-between items-center">
        <div className='bg-white w-[15%] h-full flex flex-col justify-center items-center'>
            <div className='w-full flex flex-row'>
                <button className='bg-black w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("black")}
                >  
                </button>
                <button className='bg-blue-600 w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("blue")}
                >  
                </button>
            </div>
            <div className='w-full flex flex-row'>
                <button className='bg-orange-500 w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("orange")}
                >  

                </button>
                <button className='bg-yellow-400 w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("yellow")}
                >   
                </button>
            </div>
            <div className='w-full flex flex-row'>
                <button className='bg-violet-700 w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("violet")}
                >  
                </button>
                <button className='bg-red-600 w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("red")}
                >  
                </button>
            </div>
            <div className='w-full flex flex-row'>
                <button className='bg-green-500 w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("green")}
                > 
                </button>
                <button className='bg-black w-[35%] aspect-square m-[5%]'
                onClick={() => changeColour("yellow")}
                >
                </button>
            </div>
        </div>
        <div className='bg-amber-50 grid w-auto h-[80%] grid grid-cols-10 grid-rows-10'>
        {grid.map(([i,colour]) => (
            <div
            key={i}
            className={`border border-gray-200  aspect-square hover:bg-blue-300 h-full ${bgClass(colour)}`}
            onClick={() => handlePixelClick(i)}
            ></div>
        ))}
        </div>
        <div className='bg-white w-[15%] h-full'>
        </div>
    </div>
    );
}


function bgClass(color: string) {
  switch (color) {
    case 'black': return 'bg-black'; 
    case 'blue':  return 'bg-blue-500';
    case 'orange' : return 'bg-orange-500'; 
    case 'yellow':   return 'bg-yellow-400';
    case 'violet' : return 'bg-violet-700';
    case 'red':  return 'bg-red-500';
    case 'green': return 'bg-green-500'
    default:      return 'bg-black';
  }
}

export const WebSocketDemo = () => {
    const [socketUrl,setSocketUrl] = useState<string>("ws://localhost:3000/ws/Roshan")
    const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    useEffect(() => {
        if(lastMessage != null){
            setMessageHistory((prev) =>{
                return prev.concat(lastMessage)
            })
        }
    },[lastMessage])
    
}   
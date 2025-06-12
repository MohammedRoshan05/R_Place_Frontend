import useWebSocket,{ReadyState} from 'react-use-websocket';
import React, { useState, useCallback, useEffect } from 'react';

const WebSocketDemo = () => {
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
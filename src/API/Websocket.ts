import useWebSocket,{ReadyState} from 'react-use-websocket';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { TileUpdate } from '../Game';

// Read once at module load
const WS_URL     = "ws://localhost:8000/ws/Roshan";
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlJvc2hhbiIsImlzc3VlZF90aW1lIjoxNzQ5NzIxODI3fQ.8B89plVg7qIcR5cOH0kY2p3cH72cG8sNp_oHbYU-ipw"

const WS_OPTIONS = {
  protocols:       JWT_TOKEN,
  shouldReconnect: () => true,
    onOpen:  () => console.log("🟢 WebSocket opened"),
  onClose: () => console.log("🔴 WebSocket closed"),
  onError: (e) => console.error("⚠️ WebSocket error", e),
};

export function useTileSocket() {
  const { lastMessage, readyState,sendJsonMessage } = useWebSocket(WS_URL, WS_OPTIONS);
  return { lastMessage, readyState,sendJsonMessage };
}



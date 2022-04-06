import React, { useState, createContext } from 'react'
export const valueContext = createContext({});

export default function ChekboxContext({ children }) {
  const [title, setTitle] = useState([])
  return (
    <div>
      <valueContext.Provider value={{ title, setTitle }}>
        {children}
      </valueContext.Provider>
    </div>
  )
}

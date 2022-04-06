import React, { useContext } from 'react'
import { valueContext } from './ChekboxContext'

export default function SelectedItem() {
  const { title } = useContext(valueContext)
  return (
    <div>
      <h1 className='bg-pink'>SelectedItem</h1>
      <div className='selectItem'>
        {title.map(item => <p>{item.title}</p>)}
      </div>
    </div>
  )
}

'use client'
import { DataContext } from '@/store/data/context';
import Image from 'next/image'
import { useContext, useEffect } from 'react';

export default function Home() {

  const dataManager = useContext(DataContext);
  return (
    <>

      <div>
        <label htmlFor='#set'>Set To Context: </label>
      </div >
      <div>
        <input id='set' onChange={e => dataManager.setData(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='#get'>Read From Context: </label>
      </div>
      <div>
        <h1 id='get'>{dataManager.data}</h1>
      </div >
    </>
  )
}

'use client'
import { DataContext } from '@/store/1-usecontext/data1/context';
import { useContext } from 'react';
export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <div>
        <label htmlFor='#set'>Set To Context: </label>
      </div >
      <div>
        <input id='set' onChange={e => dataManager.setData1(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='#get'>Read From Context: </label>
      </div>
      <div>
        <h1 id='get'>{dataManager.data1}</h1>
      </div >
    </>
  )
}
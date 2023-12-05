'use client'
import { DataContext } from '@/store/1-usecontext/challenge1/context';
import { useContext } from 'react';
export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>setDataChallenge1</h1>
      <div >
        <label htmlFor='#set'>Set To Context: </label>
      </div >
      <div>
        <input id='set' onChange={e => dataManager.setDataChallenge1(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='#get'>dataChallenge1</label>
        <input id='get' value={dataManager.dataChallenge1} readOnly={true} disabled></input>
      </div >
    </>
  )
}
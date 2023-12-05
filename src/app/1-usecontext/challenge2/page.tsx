'use client'
import { DataContext } from '@/store/1-usecontext/challenge2/context';
import { useContext } from 'react';
export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>1-useContext / Challenge2</h1>
      <div>
        <label htmlFor='set'>setDataChallenge2</label>
      </div >
      <div>
        <input id='set' value={dataManager.dataChallenge2} onChange={e => dataManager.setDataChallenge2(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='get'>dataChallenge2</label>
        <input id='get' value={dataManager.dataChallenge2} readOnly={true} disabled></input>
      </div >
    </>
  )
}

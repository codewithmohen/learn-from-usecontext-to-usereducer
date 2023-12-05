'use client'
import { DataContext } from '@/store/1-usecontext/data2/context';
import { useContext } from 'react';
export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <div>
        <label htmlFor='set'>Set To Context: </label>
      </div >
      <div>
        <input id='set' value={dataManager.data2} onChange={e => dataManager.setData2(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='get'>Read From Context: </label>
      </div>
      <div>
        <input id='get' value={dataManager.data2} readOnly={true}></input>
      </div >
    </>
  )
}

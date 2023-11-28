'use client'
import { DataContext3 } from '@/store/data3/context';
import { useContext, useEffect } from 'react';

export default function Home() {
  const dataManager = useContext(DataContext3);
  return (
    <>
      <div>
        <label htmlFor='setState'>setState: </label>
      </div >
      <div>
        <input id='setState' value={dataManager.data3} onChange={e => dataManager.setData3(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='setStateB'>setState B: </label>
      </div >
      <div>
        <input id='setStateB' value={dataManager.data3} onChange={e => dataManager.setData3B(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='setStateC'>setState C: </label>
      </div >
      <div>
        <input id='setStateC' value={dataManager.data3} onChange={e => dataManager.setData3C(e.target.value)}></input>
      </div >
      <br />
      <div>
        <input id='resetData' type='button' value='resetData' onClick={e => dataManager.resetData()}></input>
      </div >
      <br />
      <div>
        <input id='clearData' type='button' value='clearData' onClick={e => dataManager.clearData()}></input>
      </div >
      <br />
      <div>
        <label htmlFor='get'>Read From Context: </label>
      </div>
      <div>
        <input id='get' value={dataManager.data3} readOnly={true}></input>
      </div >
    </>
  )
}

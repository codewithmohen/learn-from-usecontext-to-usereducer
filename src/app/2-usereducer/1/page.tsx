'use client'
import { DataContext } from '@/store/2-usereducer/data4/context';
import { useContext } from 'react';

export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <div>
        <label htmlFor='setState'>setState: </label>
      </div >
      <div>
        <input id='setState' value={dataManager.data4} onChange={e => dataManager.setData(e.target.value)}></input>
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
        <input id='get' value={dataManager.data4} readOnly={true}></input>
      </div >
    </>
  )
}

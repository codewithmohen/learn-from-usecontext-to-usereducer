'use client'
import { DataContext } from '@/store/2-usereducer/challenge4/context';
import { useContext } from 'react';

export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>2-useReducer / Challenge4</h1>
      <div>
        <label htmlFor='setState'>setDataChallenge4</label>
      </div >
      <div>
        <input id='setState' value={dataManager.dataChallenge4} onChange={e => dataManager.setDataChallenge4(e.target.value)}></input>
      </div >
      <br />
      <div>
        <input id='resetData' type='button' value='resetData' onClick={e => dataManager.resetDataChallenge4()}></input>
      </div >
      <br />
      <div>
        <input id='clearData' type='button' value='clearData' onClick={e => dataManager.clearDataChallenge4()}></input>
      </div >
      <br />
      <div>
        <label htmlFor='get'>dataChallenge4</label>
        <input id='get' value={dataManager.dataChallenge4} readOnly={true} disabled></input>
      </div >
    </>
  )
}

'use client';
import { DataContext } from '@/store/2-usereducer/challenge4/context';
import { useContext } from 'react';

export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>2-useReducer / Challenge4</h1>
      <p>Simple String State + Multiple Functions + localStorage</p>
      <div>
        <label htmlFor='setState'>Write to set context</label>
      </div >
      <div>
        <input id='setState' value={dataManager.data} onChange={e => dataManager.setData(e.target.value)}></input>
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
        <label htmlFor='#get'>Context value is</label>
      </div >
      <div>
        <input id='get' value={dataManager.data} readOnly={true} disabled></input>
      </div >
    </>
  );
}

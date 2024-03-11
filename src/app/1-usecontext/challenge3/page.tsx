'use client';
import { DataContext } from '@/store/1-usecontext/challenge3/context';
import { useContext } from 'react';

export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>1-useContext / Challenge3</h1>
      <p>Simple String State + Multiple Functions + localStorage</p>
      <div>
        <label htmlFor='setState'>Write to set context</label>
      </div >
      <div>
        <input id='setState' value={dataManager.data} onChange={e => dataManager.setData(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='setStateB'>Write to set context With the 2nd method</label>
      </div >
      <div>
        <input id='setStateB' value={dataManager.data} onChange={e => dataManager.setData2(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='setStateC'>Write to set context With the 3rd method</label>
      </div >
      <div>
        <input id='setStateC' value={dataManager.data} onChange={e => dataManager.setData3(e.target.value)}></input>
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

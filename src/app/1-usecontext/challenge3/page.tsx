'use client'
import { DataContext } from '@/store/1-usecontext/challenge3/context';
import { useContext } from 'react';

export default function Home() {
  const dataManager = useContext(DataContext);
  return (
    <>
      <h1>1-useContext / Challenge3</h1>
      <div>
        <label htmlFor='setState'>setDataChallenge3</label>
      </div >
      <div>
        <input id='setState' value={dataManager.dataChallenge3} onChange={e => dataManager.setDataChallenge3(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='setStateB'>setDataChallenge3_2</label>
      </div >
      <div>
        <input id='setStateB' value={dataManager.dataChallenge3} onChange={e => dataManager.setDataChallenge3_2(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='setStateC'>setDataChallenge3_3</label>
      </div >
      <div>
        <input id='setStateC' value={dataManager.dataChallenge3} onChange={e => dataManager.setDataChallenge3_3(e.target.value)}></input>
      </div >
      <br />
      <div>
        <input id='resetData' type='button' value='resetData' onClick={e => dataManager.resetDataChallenge3()}></input>
      </div >
      <br />
      <div>
        <input id='clearData' type='button' value='clearData' onClick={e => dataManager.clearDataChallenge3()}></input>
      </div >
      <br />
      <div>
        <label htmlFor='get'>dataChallenge3</label>
        <input id='get' value={dataManager.dataChallenge3} readOnly={true} disabled></input>
      </div >
    </>
  )
}

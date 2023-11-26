'use client'
import { DataContext3 } from '@/store/data3/context';
import { useContext, useEffect } from 'react';

export default function Home() {

  const dataManager = useContext(DataContext3);
  useEffect(() => {
    console.log(dataManager.data);
  }, [dataManager.data]);
  return (
    <>
      <div>
        <label htmlFor='#setState'>setState: </label>
      </div >
      <div>
        <input id='setState' onChange={e => dataManager.setData(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='#setState2'>setState2: </label>
      </div >
      <div>
        <input id='setState2' onChange={e => dataManager.setData(e.target.value)}></input>
      </div >
      <br />
      <div>
        <label htmlFor='#setState3'>setState3: </label>
      </div >
      <div>
        <input id='setState3' onChange={e => dataManager.setData(e.target.value)}></input>
      </div >
      <br />
      <div>
        <input id='resetData' type='button' value='resetData'></input>
      </div >
      <br />
      <div>
        <input id='clearData' type='button' value='clearData'></input>
      </div >
      <br />
      <div>
        <label htmlFor='get'>Read From Context: </label>
      </div>
      <div>
        <input id='get' value={dataManager.data} readOnly={true}></input>
      </div >
    </>
  )
}

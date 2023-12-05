
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ol>
        <li> props </li>
        <li> useState </li>
        <li> useContext
          <ol>
            <li>
              <Link href='/3-usecontext/1'>Simple String State + hook setState</Link>
            </li>
            <li>
              <Link href='/3-usecontext/2'>Simple String State + hook setState + localStorage</Link>
            </li>
            <li>
              <Link href='/3-usecontext/3'>Simple String State + Multiple Functions + localStorage</Link>
            </li>
          </ol>
        </li>
        <li> useReducer </li>
        <ol>
          <li>
            <Link href='/3-usecontext/1'>Simple String State  + Multiple Functions + localStorage</Link>
          </li>
        </ol>
        <li> Redux </li>
        <li> ReduxToolkit</li>
        <li> ReduxSaga </li>
      </ol>
    </>
  )
}

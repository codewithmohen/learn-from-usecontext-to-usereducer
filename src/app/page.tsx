
import Link from 'next/link';

export default function Home() {
  return (
    <>

      <ol>
        <li> useContext
          <ol>
            <li>
              <Link href='/1-usecontext/challenge1'>Simple String State + hook setState</Link>
            </li>
            <li>
              <Link href='/1-usecontext/challenge2'>Simple String State + hook setState + localStorage</Link>
            </li>
            <li>
              <Link href='/1-usecontext/challenge3'>Simple String State + Multiple Functions + localStorage</Link>
            </li>
          </ol>
        </li>
        <li> useReducer
          <ol>
            <li>
              <Link href='/2-usereducer/challenge4'>Simple String State  + Multiple Functions + localStorage</Link>
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
}

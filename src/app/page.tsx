
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ol>
        <li>
          <Link href='/1'>Simple String State + hook setState</Link>
        </li>
        <li>
          <Link href='/2'>Simple String State + hook setState + localStorage</Link>
        </li>
        <li>
          <Link href='/3'>Simple String State + Multiple Functions + localStorage</Link>
        </li>
      </ol>
    </>
  )
}

'use client'
import DataContextProvider1 from "@/store/1-usecontext/challenge1/provider"
import DataContextProvider2 from "@/store/1-usecontext/challenge2/provider"
import DataContextProvider3 from "@/store/1-usecontext/challenge3/provider"
import DataContextProvider4 from "@/store/2-usereducer/challenge4/provider"
import './style.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DataContextProvider1>
      <DataContextProvider2>
        <DataContextProvider3>
          <DataContextProvider4>
            <html lang="en">
              <body >
                <div className='middle'>
                  <div className='box'>
                    {children}
                  </div>
                </div>
              </body>
            </html>
          </DataContextProvider4>
        </DataContextProvider3>
      </DataContextProvider2>
    </DataContextProvider1>

  )
}

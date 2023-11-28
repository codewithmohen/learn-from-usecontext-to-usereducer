'use client'
import DataContextProvider1 from "@/store/3-usecontext/data1/provider"
import DataContextProvider2 from "@/store/3-usecontext/data2/provider"
import DataContextProvider3 from "@/store/3-usecontext/data3/provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DataContextProvider1>
      <DataContextProvider2>
        <DataContextProvider3>
          <html lang="en">
            <body>{children}</body>
          </html>
        </DataContextProvider3>
      </DataContextProvider2>
    </DataContextProvider1>
  )
}

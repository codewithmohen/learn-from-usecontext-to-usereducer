'use client'
import DataContextProvider from "@/store/data/provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DataContextProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </DataContextProvider>
  )
}

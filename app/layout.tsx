import './globals.css'

export const metadata = {
  title: 'Random Test | Главная',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="relative isolate grid h-full place-items-center overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}

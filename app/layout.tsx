import './globals.css'
import ToasterContext from './context/ToasterContext'

export const metadata = {
  title: 'A-M-D Messenger',
  description: 'Messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <ToasterContext />
          {children}
      </body>
    </html>
  )
}
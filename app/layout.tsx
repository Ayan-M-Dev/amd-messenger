import './globals.css'
import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

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
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
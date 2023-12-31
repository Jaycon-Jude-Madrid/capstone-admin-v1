import './globals.css'
import { Roboto } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ThemeModeProvider from '../context/ThemeProvider';
import AuthProvider from '../context/AuthProvider';




const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"], })

export const metadata = {
  title: "Admin Dashboard",
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <ThemeModeProvider>
            <ToastContainer position="top-right" />
            {children}
          </ThemeModeProvider>
        </AuthProvider>

      </body>
    </html>
  )
}

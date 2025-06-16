import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'Next.js + TanStack Query App',
  description: 'Demo with POST API',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
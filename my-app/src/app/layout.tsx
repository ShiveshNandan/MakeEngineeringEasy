import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/Shadcn components/theme-provider'
import { GlobalStateProvider } from '@/components/GlobalVariableProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Make Engineering Easy',
  description: 'Generated by Make Engineering Easy',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <GlobalStateProvider>
            {/* <Navbar></Navbar> */}
              <main>
                {children}
                <Analytics />
                <SpeedInsights />
              </main>
            </GlobalStateProvider>
          </ThemeProvider>
        </body>
      </html>
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
  )
}

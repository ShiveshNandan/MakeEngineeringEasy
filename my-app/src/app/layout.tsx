import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/Shadcn components/theme-provider'
import { GlobalStateProvider } from '@/components/GlobalVariableProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] })

const client = process.env.NEXT_PUBLIC_CLIENT;

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
        <GoogleOAuthProvider clientId={`${client}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <GlobalStateProvider>
              <main>
                {children}
                <Analytics />
                <SpeedInsights />
              </main>
            </GlobalStateProvider>
          </ThemeProvider>
          </GoogleOAuthProvider>
        </body>
      </html>
  )
}

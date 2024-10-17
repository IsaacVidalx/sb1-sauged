"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomContextMenu from '@/components/CustomContextMenu';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUIProvider>
            <CustomContextMenu>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </CustomContextMenu>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
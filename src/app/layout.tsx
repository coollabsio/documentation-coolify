import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';
const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <Banner id="v5.0.0-beta.412" variant="rainbow">🚀 Coolify v5.0.0-beta.412 is now released to Public! </Banner>
      <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
          
        >{children}</RootProvider>
      </body>
    </html>
  );
}

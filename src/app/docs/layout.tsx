'use client';

import { usePathname } from 'next/navigation';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  const path = usePathname();

  // if we’re exactly on "/docs", just render the child layout (HomeLayout)
  if (path === '/docs') {
    return <>{children}</>;
  }

  // otherwise wrap everything in the sidebar DocsLayout
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}

import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
} from 'fumadocs-ui/page';
import { notFound, redirect } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // If slug is missing, redirect to /docs/home
  if (!params.slug || params.slug.length === 0) {
    redirect('/docs/home');
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const lastUpdated = new Date(page.data.lastModified).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ enabled: false }}
      tableOfContent={{ style: 'clerk' }}
    >
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
        <br />
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          Last updated: {lastUpdated}
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // If slug is missing, redirect metadata generation too (optional, but safe)
  if (!params.slug || params.slug.length === 0) {
    return {
      title: 'Redirecting...',
      description: 'Redirecting to Home page...',
    };
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
} from 'fumadocs-ui/page';
import { notFound, redirect } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

type ParamsPromise = { params: Promise<{ slug?: string[] }> };

type PageParams = { slug?: string[] };

export default async function Page(props: ParamsPromise) {
  // Await the params promise before using
  const { slug } = await props.params;

  // If slug is missing or empty, redirect to /docs/home
  if (!slug || slug.length === 0) {
    redirect('/docs/home');
  }

  const page = source.getPage(slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  // Safely handle optional lastModified
  const lastUpdated = page.data.lastModified
    ? new Date(page.data.lastModified).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ enabled: false }}
      tableOfContent={{ style: 'clerk' }}
      editOnGithub={{
        owner: 'coollabsio',
        repo: 'coolify-docs',
        sha: 'next',
        path: `content/${page.file.path}`,
      }}
    >
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
        <br />
        {lastUpdated && (
          <div style={{ fontSize: '0.875rem', color: '#666' }}>
            Last updated: {lastUpdated}
          </div>
        )}
      </DocsBody>
    </DocsPage>
  );
}

// Tell Next.js all the paths we need to pre-render, including the base /docs
export async function generateStaticParams() {
  // source.generateParams() returns e.g. [{ slug: ['home'] }, ...]
  const paramsList = await source.generateParams();
  return [
    // include the empty slug for /docs itself
    { slug: [] },
    // then all the real doc pages
    ...paramsList,
  ];
}

// Generate per-page metadata (title, description)
export async function generateMetadata(props: ParamsPromise) {
  // Await the params promise
  const { slug } = await props.params;

  // Redirect metadata too if someone hits /docs directly
  if (!slug || slug.length === 0) {
    return {
      title: 'Redirecting...',
      description: 'Redirecting to Home page...',
    };
  }

  const page = source.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

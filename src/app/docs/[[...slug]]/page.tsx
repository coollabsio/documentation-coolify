import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
} from 'fumadocs-ui/page';
import { notFound, redirect } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import FeedbackClient from '@/components/feedback-client'

type ParamsPromise = { params: Promise<{ slug?: string[] }> };

export default async function Page(props: ParamsPromise) {
  // Await the params promise before using
  const { slug } = await props.params;

  // If slug is missing or empty and it's /docs/v5, redirect to /docs/v5/home
  if (!slug || slug.length === 0 || (slug.length === 1 && slug[0] === 'v5')) {
    redirect('/docs/v5/home');
  }

  const page = source.getPage(slug);
  if (!page) notFound();

  const showEdit        = page.data.showEdit        ?? true;
  const showLastUpdated = page.data.showLastUpdated ?? true;
  const showRate        = page.data.showRate        ?? true;
  const isApiPage     = slug[0] === 'v5' && slug[1] === 'api';
  const finalShowEdit = isApiPage ? false : showEdit;
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
      footer={{ enabled: false }}
      {
        ...(finalShowEdit && {
          editOnGithub: {
            owner: 'coollabsio',
            repo:  'coolify-docs',
            sha:   'next',
            path:  `content/${page.file.path}`,
            className: '-mt-6 mb-15'
          },
        })
      }
    >
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
        <br />
        {showLastUpdated && lastUpdated && (
        <div
          className="last-updated"
          style={{ fontSize: '0.875rem', color: '#666' }}
        >
          Last updated: {lastUpdated}
        </div>
      )}
        {showRate && <FeedbackClient />}
      </DocsBody>
    </DocsPage>
  );
}

// Tell Next.js all the paths we need to pre-render, including the base /docs/v5
export async function generateStaticParams() {
  // source.generateParams() returns e.g. [{ slug: ['home'] }, ...]
  const paramsList = await source.generateParams();
  return [
    // include the empty slug for /docs and /docs/v5 itself
    { slug: [] },
    { slug: ['v5'] }, // This ensures /docs/v5 is pre-rendered
    // then all the real doc pages
    ...paramsList,
  ];
}

// Generate per-page metadata (title, description)
export async function generateMetadata(props: ParamsPromise) {
  // Await the params promise
  const { slug } = await props.params;

  // Redirect metadata too if someone hits /docs/v5 directly
  if (!slug || slug.length === 0 || (slug.length === 1 && slug[0] === 'v5')) {
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

import React from 'react';
import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Callout } from '@/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import Details from '@/components/details';
import { trackEvent } from '@/lib/plausible';

export function getMDXComponents(extra: MDXComponents = {}): MDXComponents {
  const base: MDXComponents = {
    ...defaultComponents,
    img: ({ src, alt, width, height, ...props }) => (
      <ImageZoom
        src={src as string}
        alt={alt as string}
        width={'1280'}
        height={'720'}
        {...props}
      />
    ),
    Callout,
    Card: (props) => <Card {...props} />,
    Cards: (props) => <Cards {...props} />,
    pre: ({ ref: _ref, title, ...props }) => (
      <CodeBlock title={title}>
        <Pre {...props} />
      </CodeBlock>
    ),
    Steps,
    Step,
    TypeTable,
    Details: (props) => <Details {...props} />,
    Detail: (props) => <Details.Detail {...props} />,

    ...extra,
  }

  const wrapped = {} as MDXComponents

  for (const [tag, Component] of Object.entries(base) as [keyof MDXComponents, React.ComponentType<any>][]) {
    wrapped[tag] = (props: any) => {
      const { data_plausible_event_name, onClick, _rsc, ...rest } = props

      if (typeof data_plausible_event_name === 'string' && typeof window !== 'undefined') {
        const handleClick = (e: any) => {
          trackEvent(data_plausible_event_name)
          if (typeof onClick === 'function') onClick(e)
        }

        return <Component {...rest} onClick={handleClick} />
      }

      return <Component {...props} />
    }
  }

  return wrapped
}

import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Callout } from '@/components/Callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import Details from '@/components/details';

export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...defaultComponents,
    img: ({ src, alt, width, height, ...props }) => (
      <ImageZoom
        src={src as string}
        alt={alt as string}
        width={'1280'}
        height={'720'}
        data-umami-event="Zoom Images"
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
    ...components, // Let passed-in components override if needed
  };
}

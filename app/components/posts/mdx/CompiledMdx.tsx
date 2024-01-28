import { MDXProvider } from '@mdx-js/react'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

const CompiledMdx = async ({
  source,
  components,
}: {
  source: string
  components?: React.ComponentProps<typeof MDXProvider>['components']
}) => {
  try {
    const result = await MDXRemote({ source: source, components: components })
    return result
  } catch (error) {
    notFound()
  }
}

export default CompiledMdx

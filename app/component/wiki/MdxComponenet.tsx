import { Code } from 'bright'
import type { MDXComponents } from 'mdx/types'

const languageString = 'language-'

interface childrenI {
  props: {
    className: string
    children: string
  }
}

export const MdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    const code = (children as childrenI).props.children
    const className = (children as childrenI).props.className

    let language = ''
    let fileName = ''

    if (className) {
      fileName = className.substring(languageString.length)
      if (fileName === 'terminal') {
        language = 'bash'
      } else {
        const fileNameToken = fileName.split('.')
        language = fileNameToken[fileNameToken.length - 1]
      }
    }

    return (
      <Code
        {...props}
        theme="material-default"
        title={fileName}
        lang={language}
      >
        {code}
      </Code>
    )
  },
}

import { Code } from 'bright'
import GithubSlugger from 'github-slugger'
import type { MDXComponents } from 'mdx/types'
import { Noto_Serif } from 'next/font/google'

import styles from './styles.module.css'

const languageString = 'language-'
const notoSerif = Noto_Serif({ subsets: ['latin'] })

interface childrenI {
  props: {
    className: string
    children: string
  }
}

export const getMdxComponents = () => {
  const slugger = new GithubSlugger()
  slugger.reset()

  const MdxComponents: MDXComponents = {
    h1: (props) => {
      return (
        <section id={slugger.slug(props.children?.toString() || '')}>
          <h1 className={styles.postH1}>{props.children}</h1>
        </section>
      )
    },
    h2: (props) => {
      return (
        <section id={slugger.slug(props.children?.toString() || '')}>
          <h2 className={styles.postH2}>{props.children}</h2>
        </section>
      )
    },
    h3: (props) => {
      return (
        <section id={slugger.slug(props.children?.toString() || '')}>
          <h3 className={styles.postH13}>{props.children}</h3>
        </section>
      )
    },
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
        <div className={styles.codeBox}>
          <Code
            {...props}
            // theme="material-default"
            theme="github-light"
            title={fileName}
            lang={language}
          >
            {code}
          </Code>
        </div>
      )
    },
  }

  return MdxComponents
}

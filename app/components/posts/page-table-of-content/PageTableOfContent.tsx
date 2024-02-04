import { headingNode } from '@/utils/getheadings'

interface PageTableOfContentProps {
  headings: headingNode[]
}

const PageTableOfContent = ({ headings }: PageTableOfContentProps) => {
  return (
    <ul>
      {headings.map((child) => {
        return (
          <li key={child.key}>
            <a href={`#${child.key}`}>{child.text}</a>
            <PageTableOfContent headings={child.children} />
          </li>
        )
      })}
    </ul>
  )
}

export default PageTableOfContent

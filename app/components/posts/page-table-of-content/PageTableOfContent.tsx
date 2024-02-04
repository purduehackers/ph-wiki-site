import { headingNode } from '@/utils/getheadings'

interface PageTableOfContentProps {
  headings: headingNode[]
}

const PageTableOfContent = ({ headings }: PageTableOfContentProps) => {
  return (
    <div style={{ paddingLeft: 10 }}>
      {headings.map((child) => {
        return (
          <div style={{ paddingLeft: 10 }} key={child.key}>
            <div>{child.text}</div>
            <PageTableOfContent headings={child.children} />
          </div>
        )
      })}
    </div>
  )
}

export default PageTableOfContent

import { remark } from 'remark'
import strip from 'strip-markdown'
import GithubSlugger from 'github-slugger'

interface heading {
  text: string
  level: number
}

export interface headingNode {
  text: string
  key: string
  children: headingNode[]
}

const fetchHeadings = (source: string): heading[] => {
  /* remove code block to avoid comment symbols */
  const codeBlockRegex = /```[\s\S]*?```/g
  const noCodeBlocksSource = source.replace(codeBlockRegex, '')

  const headingLines = noCodeBlocksSource.split('\n').filter((line) => {
    return line.match(/^#{1,3}\s(.+)$/gm)
  })

  return headingLines.map((raw) => {
    const mdText = raw.replace(/#/g, '').trim()
    const text = remark().use(strip).processSync(mdText).toString()
    let level = 0
    if (raw.slice(0, 3) === '###') {
      level = 3
    } else if (raw.slice(0, 2) === '##') {
      level = 2
    } else if (raw.slice(0, 1) === '#') {
      level = 1
    }

    return { text, level }
  })
}

let i = 0

const constructList = (
  headings: heading[],
  slugger: GithubSlugger
): headingNode => {
  const headings_size = headings.length
  let curr = headings[i]
  let currNode: headingNode = {
    text: curr.text,
    key: slugger.slug(curr.text),
    children: [],
  }
  i += 1

  while (i < headings_size) {
    const heading = headings[i]
    if (heading.level <= curr.level) {
      i -= 1
      break
    }
    const child = constructList(headings, slugger)
    currNode.children.push(child)
    i += 1
  }

  return currNode
}

/* For debugging purposes, printTree recursively print out the headings tree */
const printTree = (node: headingNode, spaces: number) => {
  if (!node) {
    return
  }
  for (let i = 0; i < spaces; ++i) {
    process.stdout.write(' ')
  }
  process.stdout.write(node.text + '\n')
  for (let i = 0; i < node.children.length; ++i) {
    printTree(node.children[i], spaces + 1)
  }
}

export const getHeadings = (source: string) => {
  const slugger = new GithubSlugger()

  i = 0
  const headings = fetchHeadings(source)

  /* Insert a root node in the front of headings */
  headings.unshift({
    text: 'root',
    level: 0,
  })
  const root = constructList(headings, slugger)
  // printTree(root, 0);

  return root
}

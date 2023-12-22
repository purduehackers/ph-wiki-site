'use client'
import { Noto_Sans_Mono } from 'next/font/google'
import { useEffect, useState } from 'react'

const noto_sans_mono = Noto_Sans_Mono({ subsets: ['latin'] })

const getAscii = () => {
  const content =
    ' _____               _              _    _            _                  \n' +
    '|  __ \\             | |            | |  | |          | |                 \n' +
    '| |__) |   _ _ __ __| |_   _  ___  | |__| | __ _  ___| | _____ _ __ ___  \n' +
    "|  ___/ | | | '__/ _` | | | |/ _ \\ |  __  |/ _` |/ __| |/ / _ \\ '__/ __| \n" +
    '| |   | |_| | | | (_| | |_| |  __/ | |  | | (_| | (__|   <  __/ |  \\__ \\ \n' +
    '|_|    \\__,_|_| _\\__,_|\\__,_|\\___| |_|  |_|\\__,_|\\___|_|\\_\\___|_|  |___/\n' +
    '\n \\ \\        / (_) |  (_)                                                  \n' +
    '  \\ \\  /\\  / / _| | ___                                                   \n' +
    '   \\ \\/  \\/ / | | |/ / |                                                  \n' +
    '    \\  /\\  /  | |   <| |                                                  \n' +
    '     \\/  \\/   |_|_|\\_\\_|                                                  \n' +
    '                                                                          \n'
  return content.replace(/\n/g, '<br>')
}

const progress = new Map()
progress.set(40, '===============>')
progress.set(60, '=============================>'),
  progress.set(80, '============================================>'),
  progress.set(100, '=====================================================>')

// This is a fake loader but it looks cool
const PostLoading = () => {
  const [currProgress, setCurrProgress] = useState(40)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId)
          return 100
        } else {
          return prevProgress + 20
        }
      })
    }, 100)
    return () => clearInterval(intervalId)
  }, [])

  const ph = getAscii()
  return (
    <div className={noto_sans_mono.className} style={{ whiteSpace: 'pre' }}>
      <p dangerouslySetInnerHTML={{ __html: ph }} />
      <p>Downloading post...</p>
      <p>
        Download [{progress.get(currProgress)}] {currProgress}%
      </p>
      {currProgress == 100 && <div>Done.</div>}
    </div>
  )
}

export default PostLoading

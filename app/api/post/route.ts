import { NextRequest, NextResponse } from 'next/server'

import { postRepo } from '@/db/repo/post'

export const GET = async (req: NextRequest) => {
  console.log(__dirname)
  const posts = await postRepo.getAll()
  return NextResponse.json(posts, { status: 200 })
}

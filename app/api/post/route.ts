import { NextRequest, NextResponse } from 'next/server'

import { postRepo } from '@/db/repo/post'

export const GET = async (req: NextRequest) => {
  const posts = await postRepo.getAllMenuItems()
  return NextResponse.json(posts, { status: 200 })
}

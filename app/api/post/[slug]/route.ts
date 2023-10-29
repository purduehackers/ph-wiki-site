import { NextRequest, NextResponse } from 'next/server'

import { postRepo } from '@/db/repo/post'

interface paramsI {
  slug: string
}

export const GET = async (
  req: NextRequest,
  { params }: { params: paramsI }
) => {
  const posts = await postRepo.findById(params.slug)
  return NextResponse.json(posts, { status: 200 })
}

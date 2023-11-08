import { NextRequest, NextResponse } from 'next/server'

import { PostRepo } from '@/db/repo/PostRepo'

interface paramsI {
  slug: string
}

export const GET = async (
  req: NextRequest,
  { params }: { params: paramsI }
) => {
  const post = await PostRepo.findBySlug(params.slug)
  return NextResponse.json(post, { status: 200 })
}

import { NextRequest, NextResponse } from 'next/server'

import { PathRepo } from '@/db/repo/PathRepo'

export const GET = async (req: NextRequest) => {
  const posts = await PathRepo.getRootMenuItem()
  return NextResponse.json(posts, { status: 200 })
}

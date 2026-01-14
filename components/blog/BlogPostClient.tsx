'use client'

import { BlogContent } from '@/components/blog/BlogContent'
import PageNavigation from '@/components/Navigation'
import DiagonalPattern from '@/components/DiagonalPattern'
import { FAQ } from '@/types/blog'

interface BlogPostClientProps {
  blog: FAQ
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl min-h-screen">
        <DiagonalPattern side="left" topOffset="0" />
        <DiagonalPattern side="right" topOffset="0" />

        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">

              <div className="sm:px-12 py-2">
                <div className="px-4 mb-4 sm:mb-6 pt-4 sm:pt-6">
                  <div className="mb-4 sm:mb-6">
                    <PageNavigation />
                  </div>
                </div>
              </div>


              <div className="sm:px-12 py-2">
                <div className="px-4">
                  <BlogContent blog={blog} />
                </div>
              </div>

              <div className="pb-16 sm:pb-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
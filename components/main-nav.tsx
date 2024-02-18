'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface MainNavProps {}

export function MainNav(props: MainNavProps) {
  const pathname = usePathname()

  return (
    <header className="container mt-10 flex h-12 shrink-0 items-center justify-end">
      <div className="flex gap-5">
        <Link
          className={cn(
            'text-sm text-stone-400 no-underline transition-colors hover:text-white',
            pathname === '/' && 'text-white'
          )}
          href="/"
        >
          Home
        </Link>
        <Link
          className={cn(
            'text-sm text-stone-400 no-underline transition-colors hover:text-white',
            pathname === '/posts' && 'text-white'
          )}
          href="/posts"
        >
          Thoughts
        </Link>
        <Link
          className={cn(
            'text-sm text-stone-400 no-underline transition-colors hover:text-white',
            pathname === '/about' && 'text-white'
          )}
          href="/about"
        >
          About
        </Link>
      </div>
    </header>
  )
}

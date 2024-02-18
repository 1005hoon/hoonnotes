import Link from 'next/link'

interface MainFooterProps {}

export function MainFooter(props: MainFooterProps) {
  return (
    <footer className="shrink-0 pt-24">
      <hr className="my-3" />
      <div className="social-links container flex items-center gap-2 py-5">
        <Link
          className="text-sm underline decoration-stone-100/40 underline-offset-2 transition-colors hover:text-stone-100/80"
          href="https://github.com/1005hoon"
          target="_blank"
        >
          GitHub
        </Link>
        ·
        <Link
          className="text-sm underline decoration-stone-400 underline-offset-2 transition-colors hover:text-stone-400"
          href="https://www.linkedin.com/in/1005hoon/"
          target="_blank"
        >
          LinkedIn
        </Link>
        ·
        <Link
          className="text-sm underline decoration-stone-100/40 underline-offset-2 transition-colors hover:text-stone-100/80"
          href="https://www.youtube.com/@hoonnotes"
          target="_blank"
        >
          YouTube
        </Link>
        ·
        <Link
          className="text-sm underline decoration-stone-100/40 underline-offset-2 transition-colors hover:text-stone-100/80"
          href="mailto:shoh@softly.ai"
          target="_blank"
        >
          shoh@softly.ai
        </Link>
      </div>
    </footer>
  )
}

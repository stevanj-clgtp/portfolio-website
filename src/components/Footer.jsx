import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-mono text-cyan-400/60 font-semibold">SJ.</span>
          <span>Stevan Jovanović · Belgrade, Serbia</span>
        </div>
        <div className="flex items-center gap-1">
          Building{' '}
          <a
            href="https://cloudlines.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400/70 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 ml-1"
          >
            Cloudlines <ExternalLink size={11} />
          </a>
          <span className="ml-2">· {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

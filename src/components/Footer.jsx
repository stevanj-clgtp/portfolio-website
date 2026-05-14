export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-700 text-base">SJ.</span>
          <span>Stevan Jovanović · Belgrade, Serbia</span>
        </div>
        <div>{new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-8">
      <div className="container-width flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm">
          <span className="text-white font-bold">junaid<span className="text-sky-500">builds</span></span>
          <span className="ml-3">© 2026 Mohammed Junaid Khan — Berlin, DE</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="mailto:junaidreal4@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="https://wa.me/4915774873835" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          <a href="https://linkedin.com/in/junaid412" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/junaidreal4-hub" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

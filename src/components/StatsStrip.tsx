const STATS = '4+ Years of Experience  /  15+ Projects Delivered  /  100% Client Satisfaction  /  Berlin Based, Remote Ready  /  React & Next.js Specialist  /  Full-Stack Capable  /  '

export default function StatsStrip() {
  return (
    <div className="overflow-hidden bg-heading py-4 border-y border-heading">
      <div className="flex whitespace-nowrap" style={{ width: 'max-content' }}>
        <span className="animate-marquee inline-block label text-white/60 pr-0">
          {STATS}{STATS}{STATS}{STATS}
        </span>
      </div>
    </div>
  )
}

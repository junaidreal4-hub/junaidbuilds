export default function AboutStrip() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="container-width">

        {/* 2-col top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="label mb-6">/ About mdjk.dev</p>
            <h2 className="font-sans font-black text-[clamp(2rem,4.5vw,3.8rem)] text-heading leading-tight tracking-tight">
              Based in Berlin.<br />
              Building since 2022.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-body text-sm leading-relaxed">
              I&apos;m Junaid — a full-stack web developer and designer based in Berlin, Germany.
              I work directly with founders, startups, and businesses to build fast, custom websites
              and web applications that actually move the needle. No templates. No agency overhead.
              Just clean code, sharp design, and results you can measure.
            </p>
            <p className="text-body text-sm leading-relaxed">
              Currently pursuing a Master&apos;s in Data Analytics while freelancing full-time.
              Every project I take on gets my full attention from brief to launch.
            </p>
          </div>
        </div>

        {/* 3-step philosophy — like sirnik.co */}
        <div className="divider pt-16">
          <p className="label mb-12">/ My Process</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: '01', title: 'Understand',  desc: 'I start with your goal, your audience, and your constraints. No assumptions — just a clear brief that drives every decision.' },
              { num: '02', title: 'Build',       desc: 'Clean, maintainable code. Every component is purpose-built. I move fast without cutting corners.' },
              { num: '03', title: 'Ship',        desc: 'Tested, deployed, and live. I hand over clean documentation and stay on call for 30 days post-launch.' },
            ].map((s) => (
              <div key={s.num} className="flex flex-col gap-4">
                <span className="label text-orange">{s.num}</span>
                <h3 className="font-sans font-bold text-heading text-2xl tracking-tight">{s.title}</h3>
                <p className="text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

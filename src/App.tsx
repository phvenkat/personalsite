import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Brain,
  Layers,
  Database,
  Network,
  TrendingUp,
  Target,
  Users,
  Zap,
  ChevronDown,
  Linkedin,
  Mail,
  CheckCircle2,
  Star,
  Building2,
  Lightbulb,
  Globe,
  Menu,
  X,
  MessageSquare,
  Video,
  FileText,
  Compass,
  Award,
  CalendarCheck,
  FlaskConical,
  HeartPulse,
} from 'lucide-react';

function useIntersectionObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Mentorship', href: '#mentorship' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Connect', href: '#connect' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-obsidian-950/96 backdrop-blur-md border-b border-mercury-500/10 py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display font-semibold text-lg tracking-wide text-gradient-gold">PGV</span>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-silver-400 hover:text-silver-200 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://topmate.io/phanindra_venkata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm bg-gradient-to-r from-mercury-500 to-mercury-400 text-obsidian-950 font-semibold px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Session
          </a>
        </div>
        <button className="md:hidden text-silver-400" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-obsidian-900/98 border-t border-mercury-500/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-silver-400 hover:text-silver-200 text-sm transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://topmate.io/phanindra_venkata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gradient-to-r from-mercury-500 to-mercury-400 text-obsidian-950 font-semibold px-4 py-2 rounded-full text-center"
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gemini dual ambient - two light poles */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      {/* Capricorn grid */}
      <div className="absolute inset-0 cap-grid opacity-100 pointer-events-none" />
      {/* Saturn ring vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(90,107,80,0.06) 0%, transparent 60%)',
      }} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Gemini duality tag */}
            <div className="inline-flex items-center gap-2 border border-mercury-500/30 bg-mercury-500/5 text-mercury-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase gemini-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-mercury-400 animate-pulse" />
              AI-First Product Leader
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
              <span className="text-silver-200">I don't build</span>
              <br />
              <span className="text-gradient-gold">products.</span>
              <br />
              <span className="text-silver-200">I build systems</span>
              <br />
              <span className="text-gradient-silver">that think.</span>
            </h1>

            <p className="text-silver-400 text-lg leading-relaxed mb-4 max-w-lg">
              AI-first product leader with <strong className="text-silver-200">18+ years</strong> across
              Microsoft, Amazon, and Salesforce. Now <strong className="text-mercury-400">enabling pharma business through technology</strong> with
              Data & AI at Seosaph.
            </p>
            <p className="text-silver-500 text-sm mb-8 max-w-lg">
              Strategist · Builder · Transformer · Mentor · Father
            </p>

            {/* Topmate badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: 'Top 5% Mentor', cls: 'text-mercury-300 border-mercury-500/30' },
                { label: 'Community Care', cls: 'text-silver-300 border-silver-500/30' },
                { label: "People's Choice", cls: 'text-sage-400 border-sage-500/30' },
              ].map((b) => (
                <span key={b.label} className={`text-xs border px-3 py-1 rounded-full font-medium ${b.cls}`}>
                  {b.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://topmate.io/phanindra_venkata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-mercury-500 to-mercury-400 text-obsidian-950 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                Book a Session <ArrowRight size={16} />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 border border-silver-600/20 text-silver-400 hover:text-silver-200 hover:border-silver-500/30 px-6 py-3 rounded-full transition-all text-sm"
              >
                View Impact <ChevronDown size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-mercury-500/10">
              {[
                { value: '18+', label: 'Years Experience' },
                { value: '350M+', label: 'Users Reached' },
                { value: '$20M+', label: 'ACV Pipeline' },
                { value: 'Top 5%', label: 'on Topmate' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-gradient-gold font-display">{s.value}</div>
                  <div className="text-xs text-silver-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative" style={{ width: 400, maxWidth: '100%' }}>
              {/* Outer glow ring - Gemini dual-tone */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-mercury-500/20 via-transparent to-sage-600/12 blur-2xl pointer-events-none" />

              {/* Decorative corner accents - Capricorn structure */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-mercury-500/50 rounded-tl-xl pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-mercury-500/30 rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-sage-500/35 rounded-bl-xl pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-sage-500/25 rounded-br-xl pointer-events-none" />

              {/* Main photo */}
              <div
                className="relative rounded-2xl overflow-hidden border border-mercury-500/20"
                style={{ boxShadow: '0 0 32px rgba(212,160,23,0.18), 0 24px 64px rgba(0,0,0,0.6)' }}
              >
                <img
                  src="/Phani_Photo.jpeg"
                  alt="Phanindra G. Venkata"
                  className="w-full object-cover object-center block"
                  style={{ aspectRatio: '3/4', minHeight: 420 }}
                />
                {/* Subtle gradient overlay - name at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian-950/95 via-obsidian-950/40 to-transparent px-6 py-6">
                  <div className="font-display font-bold text-xl text-silver-100 tracking-wide">Phanindra G. Venkata</div>
                  <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mt-1">
                    Strategist · Builder · Transformer
                  </div>
                </div>
              </div>

              {/* Floating chip: education */}
              <div
                className="absolute -left-5 bottom-24 card-dark rounded-xl px-4 py-3 text-xs border border-sage-600/22"
                style={{ boxShadow: '0 4px 20px rgba(90,107,80,0.10)' }}
              >
                <div className="text-mercury-400 font-semibold">MBA · M.Sc. · B.Tech</div>
                <div className="text-silver-400 mt-0.5">IIM-C · BITS · JNTUH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOCUS_AREAS = [
  { icon: Brain, title: 'Agentic AI & Automation', desc: 'Building autonomous workflows and AI agents that replace manual processes.' },
  { icon: Layers, title: 'Platform & Ecosystem Strategy', desc: 'Designing reusable platforms that reduce marginal cost and accelerate ecosystem growth.' },
  { icon: Database, title: 'Data & Decision Intelligence', desc: 'Turning raw data into structured decision layers that power autonomous execution.' },
  { icon: Network, title: 'Integration-First Architecture', desc: 'Unified platforms that connect disparate systems into seamless, scalable ecosystems.' },
  { icon: TrendingUp, title: 'Go-to-Market & Monetization', desc: 'Translating platform investments into revenue-ACV, expansion, and compounding value.' },
  { icon: Users, title: 'Cross-functional Leadership', desc: 'Aligning engineering, product, and business to execute at enterprise scale.' },
];

function WhatIDo() {
  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">Capabilities</div>
          <h2 className="font-display text-4xl font-bold text-silver-100 mb-4">
            What I <span className="text-gradient-dual">Build & Drive</span>
          </h2>
          <p className="text-silver-400 max-w-xl mx-auto leading-relaxed">
            I help organizations move from manual workflows to intelligent systems,
            disconnected tools to unified platforms, and data to autonomous decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOCUS_AREAS.map((area, i) => (
            <div
              key={i}
              className="section-reveal card-dark rounded-2xl p-6 hover:border-mercury-500/25 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-mercury-500/8 border border-mercury-500/18 flex items-center justify-center mb-4 group-hover:bg-mercury-500/14 transition-colors">
                <area.icon size={20} className="text-mercury-400" />
              </div>
              <h3 className="font-semibold text-silver-200 mb-2 text-sm">{area.title}</h3>
              <p className="text-silver-500 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Current role section
function CurrentRole() {
  return (
    <section className="py-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal rounded-2xl overflow-hidden border border-mercury-500/20" style={{
          background: 'linear-gradient(135deg, rgba(11,19,38,0.95) 0%, rgba(42,53,37,0.25) 50%, rgba(6,12,26,0.98) 100%)',
        }}>
          {/* Capricorn earthy top stripe */}
          <div className="h-0.5 w-full bg-gradient-to-r from-mercury-500/60 via-sage-500/40 to-mercury-500/20" />
          <div className="px-8 py-7 grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-mercury-400 animate-pulse" />
                <span className="text-mercury-400 text-xs font-medium tracking-widest uppercase">Current Role</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-silver-100 mb-1">
                Business Head
              </h3>
              <div className="text-mercury-300 font-medium text-sm mb-4">
                Seosaph Infotech · Bengaluru, India
              </div>
              <p className="text-silver-400 text-sm leading-relaxed max-w-xl">
                Enabling pharma business through technology. Leading product strategy that puts Data & AI
                to work across drug development, clinical operations, and pharma project management.
                Responsible for customer success, organizational growth, and building intelligent systems
                that move the business forward.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Business Enablement', 'Product Strategy', 'Data & AI', 'Customer Success', 'Org Growth'].map((tag) => (
                  <span key={tag} className="text-xs border border-sage-600/30 text-sage-400 px-3 py-1 rounded-full bg-sage-800/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: FlaskConical, label: 'Pharma Business Enablement', sub: 'Drug development & clinical ops' },
                { icon: HeartPulse, label: 'Customer Success', sub: 'Growth & retention focus' },
                { icon: Database, label: 'Data & AI Strategy', sub: 'Decision intelligence layer' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-mercury-500/8 border border-mercury-500/15 flex items-center justify-center shrink-0">
                    <item.icon size={15} className="text-mercury-400" />
                  </div>
                  <div>
                    <div className="text-silver-200 text-xs font-semibold">{item.label}</div>
                    <div className="text-silver-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
              <a
                href="https://seosaph.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-mercury-400 hover:text-mercury-300 border border-mercury-500/20 hover:border-mercury-500/35 px-4 py-2 rounded-full transition-all mt-1 w-fit"
              >
                Visit Seosaph <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const COMPANIES = [
  {
    name: 'Salesforce',
    role: 'Senior Director of Product Management',
    color: 'from-blue-900/25 to-obsidian-800/40',
    border: 'border-blue-700/20',
    metrics: [
      { value: '250+', label: 'Agent Actions Built' },
      { value: '$20M+', label: 'ACV Pipeline' },
      { value: 'Weeks → Hours', label: 'Workflow Creation' },
    ],
    highlights: [
      'Built AI AppDev platform enabling 250+ agentic workflow actions',
      'Reduced workflow creation from weeks to near real-time',
      'Contributed directly to $20M+ ACV pipeline generation',
      'Led integration ecosystem strategy across MuleSoft & Salesforce',
    ],
  },
  {
    name: 'Amazon',
    role: 'Principal Product Manager',
    color: 'from-amber-900/20 to-obsidian-800/40',
    border: 'border-amber-700/18',
    metrics: [
      { value: '350M+', label: 'Monthly Queries' },
      { value: '3rd Party', label: 'Ecosystem Growth' },
      { value: 'Conversion ↑', label: 'Search & Discovery' },
    ],
    highlights: [
      'Scaled search and discovery systems to 350M+ monthly queries',
      'Improved conversion through data-driven discovery optimization',
      'Reduced 3rd party developer friction to accelerate app supply',
      'Built scalable ecosystem strategy for Amazon marketplace',
    ],
  },
  {
    name: 'Microsoft',
    role: 'Senior Product Manager',
    color: 'from-teal-900/20 to-obsidian-800/40',
    border: 'border-teal-700/18',
    metrics: [
      { value: '6wk → 8hr', label: 'Onboarding Reduction' },
      { value: '2.4PB', label: 'Data Platform Scale' },
      { value: 'Enterprise', label: 'Grade Integrations' },
    ],
    highlights: [
      'Reduced partner onboarding from 6 weeks to 8 hours',
      'Built petabyte-scale (2.4PB) data platforms and pipelines',
      'Delivered enterprise-grade integrations at Microsoft scale',
      'Led cross-functional teams across engineering and business',
    ],
  },
];

function Impact() {
  return (
    <section id="impact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse 70% 40% at 50% 50%, rgba(212,160,23,0.04) 0%, transparent 70%)`,
      }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">Proof of Impact</div>
          <h2 className="font-display text-4xl font-bold text-silver-100 mb-4">
            Where I've <span className="text-gradient-gold">Delivered</span>
          </h2>
          <p className="text-silver-400 max-w-lg mx-auto">
            18+ years of building at the intersection of AI, platform strategy, and enterprise scale.
          </p>
        </div>

        <div className="space-y-5">
          {COMPANIES.map((co, i) => (
            <div
              key={co.name}
              className={`section-reveal card-dark rounded-2xl overflow-hidden ${co.border} metric-card`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${co.color} px-8 py-6 border-b ${co.border}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-silver-100">{co.name}</h3>
                    <p className="text-silver-400 text-sm mt-0.5">{co.role}</p>
                  </div>
                  <div className="flex gap-6">
                    {co.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-bold text-lg text-mercury-300">{m.value}</div>
                        <div className="text-xs text-silver-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-8 py-6 grid sm:grid-cols-2 gap-3">
                {co.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-mercury-500 mt-0.5 shrink-0" />
                    <span className="text-silver-400 text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="section-reveal mt-8 card-dark rounded-2xl p-6 border border-sage-600/15">
          <div className="text-xs text-sage-400 font-medium tracking-widest uppercase mb-6">Academic Foundation</div>
          <div className="grid sm:grid-cols-3 gap-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="h-16 flex items-center">
                  {/* Light chip: these crests carry colour and fine detail, so they are shown
                      as-issued rather than flattened to a white silhouette. */}
                  <div className="inline-flex items-center justify-center rounded-lg bg-white/95 border border-white/15 px-3 py-2">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={edu.logoW}
                      height={edu.logoH}
                      loading="lazy"
                      decoding="async"
                      className="max-h-9 w-auto max-w-[130px] object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-silver-200 font-semibold text-sm">{edu.degree}</div>
                  <div className="text-silver-400 text-xs mt-0.5">{edu.school}</div>
                  <div className="text-silver-600 text-xs mt-0.5">{edu.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Logos are served locally (public/) rather than hotlinked from each university -
// third-party URLs can move or block referrers, and these are load-bearing credentials.
// Intrinsic width/height are the files' real pixel dimensions; they reserve layout space.
const EDUCATION = [
  {
    logo: '/main-logo.webp',
    logoW: 343,
    logoH: 110,
    degree: 'MBA',
    school: 'Indian Institute of Management Calcutta',
    focus: 'Strategy & Leadership',
  },
  {
    logo: '/bits-pillani-2-1.webp',
    logoW: 290,
    logoH: 96,
    degree: 'M.Sc. Business Analytics',
    school: 'BITS Pilani',
    focus: 'Analytics & Data Science',
  },
  {
    logo: '/jntuhlogo.png',
    logoW: 101,
    logoH: 109,
    degree: 'B.Tech Computer Science',
    school: 'JNTU Hyderabad',
    focus: 'Software & Systems',
  },
];

const PHILOSOPHY_POINTS = [
  { icon: Target, title: 'Design for scale from day one', desc: 'Every decision is made with the compound effect in mind.' },
  { icon: Lightbulb, title: 'Structure decisions → enable AI', desc: 'Intelligent systems require structured data and decision frameworks.' },
  { icon: Layers, title: 'Build reusable platforms', desc: 'Reduce marginal cost with every new product built on the platform.' },
  { icon: Users, title: 'Combine empathy + data rigor', desc: 'Customer insight without data is a guess. Data without empathy is noise.' },
  { icon: Zap, title: 'Think long-term, act with clarity', desc: 'Visionary roadmaps grounded in actionable, measurable milestones.' },
  { icon: Star, title: 'Empower teams, build leaders', desc: 'The best systems are built by teams that feel ownership and purpose.' },
];

function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative">
      {/* Capricorn earth ambient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(90,107,80,0.05) 0%, transparent 60%)',
      }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="section-reveal">
            <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">Thinking</div>
            <h2 className="font-display text-4xl font-bold text-silver-100 mb-6">
              How I <span className="text-gradient-gold">Think</span>
            </h2>
            <p className="text-silver-400 leading-relaxed mb-6">
              Most teams build features. I build <strong className="text-silver-200">systems that compound</strong>.
            </p>
            <p className="text-silver-400 leading-relaxed mb-8">
              The difference: a feature solves today's problem. A system anticipates tomorrow's,
              reduces future cost, and creates leverage that grows with every use.
            </p>

            {/* North star quote - Capricorn gravitas + Gemini eloquence */}
            <div className="border-l-2 pl-6 py-2" style={{ borderColor: '#d4a017' }}>
              <p className="text-silver-100 font-display text-xl italic leading-relaxed">
                "Build intelligent systems that amplify human potential, create compounding value, and leave a meaningful legacy."
              </p>
              <p className="text-mercury-400 text-sm mt-3 font-medium">- My North Star</p>
            </div>

            {/* Personal grounding card with profile photo inset */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-sage-600/18 relative" style={{
              background: 'linear-gradient(145deg, rgba(11,19,38,0.90) 0%, rgba(6,12,26,0.97) 100%)',
            }}>
              {/* Subtle bg image - city backdrop from the profile photo context */}
              <div className="absolute inset-0 opacity-[0.07]" style={{
                backgroundImage: `url('/Phani_Photo.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                filter: 'blur(4px) saturate(0.3)',
              }} />
              <div className="relative flex gap-5 p-6">
                {/* Small profile photo inset */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-mercury-500/25" style={{
                    boxShadow: '0 4px 16px rgba(212,160,23,0.15)',
                  }}>
                    <img
                      src="/Phani_Photo.jpeg"
                      alt="Phanindra G. Venkata"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-sage-400 font-medium tracking-widest uppercase mb-2">Personal Grounding</div>
                  <p className="text-silver-300 leading-relaxed text-sm">
                    A builder. A systems thinker. A mentor. A father.
                  </p>
                  <p className="text-silver-400 text-sm mt-2 leading-relaxed">
                    Grounded in the belief that technology should not just optimize work-
                    it should <strong className="text-silver-200">create meaningful impact</strong> and build
                    a legacy worth passing on.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Family', 'Purpose', 'Legacy', 'Growth'].map((v) => (
                      <span key={v} className="text-xs border border-mercury-500/25 text-mercury-300 px-3 py-1 rounded-full">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PHILOSOPHY_POINTS.map((p, i) => (
              <div
                key={i}
                className="section-reveal card-dark rounded-xl p-5 hover:border-mercury-500/22 transition-all group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p.icon size={18} className="text-mercury-400 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-silver-200 text-sm font-semibold mb-1">{p.title}</h4>
                <p className="text-silver-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MENTORSHIP_SERVICES = [
  { icon: Video, title: 'Mock Interview', desc: 'Realistic PM interview simulation with structured feedback on your answers, frameworks, and delivery.', tag: 'Most Popular' },
  { icon: MessageSquare, title: '1:1 Mentorship', desc: 'Deep-dive sessions tailored to your career stage-from breaking into PM to reaching senior leadership.', tag: null },
  { icon: Compass, title: 'Career Guidance', desc: 'Navigate career transitions into product management. From BA, engineer, or program manager to PM.', tag: null },
  { icon: Award, title: 'PM Interview Prep', desc: 'End-to-end preparation for PM roles at top tech companies-frameworks, case studies, and behaviorals.', tag: null },
  { icon: FileText, title: 'Resume Review', desc: 'Targeted feedback to make your PM resume land interviews at FAANG and growth-stage companies.', tag: null },
  { icon: CalendarCheck, title: 'Discovery Call', desc: 'A focused 30-minute session to align on your goals and chart the right mentorship path forward.', tag: 'Start Here' },
];

const MENTOR_FOCUS = [
  'Career transitions into product management from BA, PM, or engineering roles',
  'Building competencies in product development and user experience',
  'Generative AI and data analytics for modern PMs',
  'Growth mindset-embracing challenges in dynamic environments',
  'Practical roadmap definition and cross-functional execution',
  'Breaking into PM at top-tier tech companies',
];

function Mentorship() {
  return (
    <section id="mentorship" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse 65% 45% at 70% 50%, rgba(212,160,23,0.05) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 20% 70%, rgba(90,107,80,0.04) 0%, transparent 55%)`,
      }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">Mentorship & Advisory</div>
          <h2 className="font-display text-4xl font-bold text-silver-100 mb-4">
            Learn From Someone <span className="text-gradient-silver">Who's Been There</span>
          </h2>
          <p className="text-silver-400 max-w-2xl mx-auto leading-relaxed">
            With 18+ years building products at Microsoft, Amazon, and Salesforce, I help aspiring and
            transitioning PMs navigate the path to impactful product careers-with real-world insight, not theory.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: 'Top 5% Mentor', cls: 'bg-mercury-500/8 border-mercury-500/25 text-mercury-300' },
              { label: 'Community Care', cls: 'bg-silver-600/8 border-silver-500/25 text-silver-300' },
              { label: "People's Choice", cls: 'bg-sage-700/10 border-sage-600/25 text-sage-400' },
            ].map((b) => (
              <span key={b.label} className={`text-xs border px-4 py-1.5 rounded-full font-medium ${b.cls}`}>
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {MENTORSHIP_SERVICES.map((svc, i) => (
            <div
              key={i}
              className="section-reveal card-dark rounded-2xl p-6 hover:border-mercury-500/22 transition-all duration-300 group relative"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {svc.tag && (
                <span className="absolute top-4 right-4 text-xs bg-mercury-500/12 border border-mercury-500/28 text-mercury-300 px-2.5 py-0.5 rounded-full">
                  {svc.tag}
                </span>
              )}
              <div className="w-10 h-10 rounded-xl bg-mercury-500/8 border border-mercury-500/18 flex items-center justify-center mb-4 group-hover:bg-mercury-500/14 transition-colors">
                <svc.icon size={20} className="text-mercury-400" />
              </div>
              <h3 className="font-semibold text-silver-200 mb-2 text-sm">{svc.title}</h3>
              <p className="text-silver-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="section-reveal card-dark rounded-2xl p-7 border border-sage-600/15">
            <div className="text-xs text-sage-400 font-medium tracking-widest uppercase mb-5">Mentorship Focus Areas</div>
            <ul className="space-y-3">
              {MENTOR_FOCUS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-mercury-500 mt-0.5 shrink-0" />
                  <span className="text-silver-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section-reveal flex flex-col gap-5">
            <div className="rounded-2xl overflow-hidden border border-mercury-500/10 flex-1 relative" style={{
              background: 'linear-gradient(145deg, rgba(11,19,38,0.92) 0%, rgba(6,12,26,0.98) 100%)',
            }}>
              {/* Photo strip at top */}
              <div className="h-24 overflow-hidden relative">
                <img
                  src="/Phani_Photo.jpeg"
                  alt="Phanindra G. Venkata"
                  className="w-full object-cover object-top"
                  style={{ marginTop: '-5%', filter: 'saturate(0.7) brightness(0.55)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-950/40 to-obsidian-950/95" />
                <div className="absolute bottom-3 left-5 text-xs text-mercury-400 font-medium tracking-widest uppercase">Why I Mentor</div>
              </div>
              <div className="p-6 pt-4">
                <p className="text-silver-300 text-sm leading-relaxed">
                  I've had the privilege of building at scale-but I remember what it felt like to not know the path.
                  Mentorship is my way of paying it forward: giving people the clarity, frameworks, and confidence
                  I wish I'd had earlier.
                </p>
                <p className="text-silver-400 text-sm leading-relaxed mt-3">
                  My goal isn't to give you answers-it's to help you build the judgment to find them yourself.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-6 border border-mercury-500/22" style={{
              background: 'linear-gradient(135deg, rgba(212,160,23,0.07) 0%, rgba(90,107,80,0.04) 100%)',
            }}>
              <div className="text-silver-200 font-semibold mb-1">Ready to accelerate your PM career?</div>
              <p className="text-silver-400 text-sm mb-4">Book a session directly on Topmate. Discovery calls start at 30 minutes.</p>
              <a
                href="https://topmate.io/phanindra_venkata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-mercury-500 to-mercury-400 text-obsidian-950 font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                Book on Topmate <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUE_SEGMENTS = [
  {
    icon: Building2,
    title: 'Enterprises',
    tagline: 'Transform workflow to autonomy',
    items: [
      'AI transformation strategy (workflow → autonomy)',
      'Platform unification across business units',
      'Integration & ecosystem architecture',
      'Data platform → decision layer roadmap',
    ],
  },
  {
    icon: Zap,
    title: 'Startups',
    tagline: 'Build real AI, not demo AI',
    items: [
      'AI product strategy (0 → 1)',
      'Avoid "demo AI"-build real, scalable systems',
      'GTM + monetization clarity',
      'Platform architecture from day one',
    ],
  },
  {
    icon: Globe,
    title: 'Investors & Boards',
    tagline: 'Evaluate and de-risk AI bets',
    items: [
      'Evaluate AI product viability and moat',
      'Identify scalable platform opportunities',
      'De-risk enterprise AI strategy',
      'Advisory on product-market alignment',
    ],
  },
];

const TESTIMONIALS = [
  {
    name: 'Abhisesh Makkapati',
    date: '9th May, 2025',
    rating: 5,
    text: 'I had a great conversation with Phanindra about product management, and it was incredibly insightful. He helped me explore different paths, broke down complex concepts clearly, and provided clarity on every aspect I was unsure about. His guidance was practical and easy to understand. I highly recommend speaking with him if you\'re having any queries on career guidance, it\'s truly helpful.',
  },
  {
    name: 'Haridhakshini SA',
    date: '28th Jan, 2025',
    rating: 5,
    text: 'I had the privilege of attending a product management guidance session with Phanindra, and it was nothing short of transformative. His deep understanding of the field and practical insights made it easy for me to grasp the nuances of transitioning into a product management role. He patiently broke down complex concepts, shared actionable strategies, and tailored his advice to my unique background. Phanindra\'s guidance gave me the confidence and clarity I needed to take the next steps in my career journey. If you\'re looking for someone who genuinely cares about your growth and has the expertise to back it up, Phanindra is the mentor you need!',
  },
  {
    name: 'Arindam Ghosh',
    date: '15th Feb, 2025',
    rating: 5,
    text: 'Too good...such structure and so well explained..has been amazing to talk and discuss stuff about my resume, interview prep, literally everything',
  },
  {
    name: 'Arindam Ghosh',
    date: '7th Feb, 2025',
    rating: 5,
    text: 'Amazing connect..will connect for future guidance for sure',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,160,23,0.04) 0%, transparent 65%)`,
      }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-14">
          <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">What Mentees Say</div>
          <h2 className="font-display text-4xl font-bold text-silver-100 mb-4">
            Real Feedback, <span className="text-gradient-gold">Real Impact</span>
          </h2>
          <p className="text-silver-400 max-w-lg mx-auto">
            All reviews are 5/5 - pinned on Topmate. Straight from the people who've sat across from Phanindra.
          </p>
          <div className="inline-flex items-center gap-2 mt-5 border border-mercury-500/25 bg-mercury-500/6 text-mercury-300 text-xs px-4 py-2 rounded-full font-medium">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#d4a017"><path d="M6 1l1.35 2.73L10.5 4.2l-2.25 2.19.53 3.11L6 7.96l-2.78 1.54.53-3.11L1.5 4.2l3.15-.47L6 1z"/></svg>
            ))}
            <span className="ml-1">All reviews 5.0 · Topmate Pinned</span>
          </div>
        </div>

        {/* Featured large review */}
        <div className="section-reveal mb-6">
          <div className="card-dark rounded-2xl p-8 border border-mercury-500/18 relative overflow-hidden group hover:border-mercury-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-mercury-400 to-mercury-600/30 rounded-l-2xl" />
            <div className="absolute top-6 right-8 opacity-10">
              <svg width="48" height="36" viewBox="0 0 48 36" fill="#d4a017"><path d="M0 36V22.5C0 14.5 5.5 7.5 16.5 2L19.5 7C14 9.5 11 13 11 16.5h7V36H0zm26 0V22.5C26 14.5 31.5 7.5 42.5 2L45.5 7C40 9.5 37 13 37 16.5h7V36H26z"/></svg>
            </div>
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#d4a017"><path d="M6 1l1.35 2.73L10.5 4.2l-2.25 2.19.53 3.11L6 7.96l-2.78 1.54.53-3.11L1.5 4.2l3.15-.47L6 1z"/></svg>
              ))}
            </div>
            <p className="text-silver-200 text-base leading-relaxed mb-6 max-w-3xl font-display italic">
              "{TESTIMONIALS[1].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-mercury-500/30 to-sage-600/20 border border-mercury-500/25 flex items-center justify-center text-mercury-300 font-bold text-sm">
                {TESTIMONIALS[1].name.charAt(0)}
              </div>
              <div>
                <div className="text-silver-200 font-semibold text-sm">{TESTIMONIALS[1].name}</div>
                <div className="text-silver-500 text-xs mt-0.5">{TESTIMONIALS[1].date} · Topmate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Three-column grid for remaining reviews */}
        <div className="grid md:grid-cols-3 gap-5">
          {[TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[3]].map((t, i) => (
            <div
              key={i}
              className="section-reveal card-dark rounded-2xl p-6 border border-mercury-500/12 hover:border-mercury-500/25 transition-all duration-300 group flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="11" height="11" viewBox="0 0 12 12" fill="#d4a017"><path d="M6 1l1.35 2.73L10.5 4.2l-2.25 2.19.53 3.11L6 7.96l-2.78 1.54.53-3.11L1.5 4.2l3.15-.47L6 1z"/></svg>
                  ))}
                </div>
                <span className="text-xs border border-mercury-500/22 text-mercury-400 px-2 py-0.5 rounded-full">Pinned</span>
              </div>
              <p className="text-silver-300 text-sm leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-mercury-500/25 to-sage-600/15 border border-mercury-500/20 flex items-center justify-center text-mercury-300 font-bold text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-silver-200 font-semibold text-xs">{t.name}</div>
                  <div className="text-silver-500 text-xs mt-0.5">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="section-reveal mt-10 text-center">
          <a
            href="https://topmate.io/phanindra_venkata"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-mercury-400 hover:text-mercury-300 border border-mercury-500/22 hover:border-mercury-500/35 px-5 py-2.5 rounded-full transition-all"
          >
            See all reviews on Topmate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhereIAddValue() {
  return (
    <section id="value" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse 55% 40% at 85% 50%, rgba(212,160,23,0.05) 0%, transparent 55%)`,
      }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">Advisory & Leadership</div>
          <h2 className="font-display text-4xl font-bold text-silver-100 mb-4">
            Where I <span className="text-gradient-dual">Add Value</span>
          </h2>
          <p className="text-silver-400 max-w-lg mx-auto">
            Whether you're scaling an enterprise, building a startup, or evaluating an AI investment-I bring pattern-matched clarity from 18+ years at the frontier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUE_SEGMENTS.map((seg, i) => (
            <div
              key={i}
              className="section-reveal card-dark rounded-2xl p-7 hover:border-mercury-500/25 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-mercury-500/8 border border-mercury-500/18 flex items-center justify-center mb-5 group-hover:bg-mercury-500/14 transition-colors">
                <seg.icon size={22} className="text-mercury-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-silver-100 mb-1">{seg.title}</h3>
              <p className="text-mercury-400 text-xs font-medium mb-5">{seg.tagline}</p>
              <ul className="space-y-3">
                {seg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-mercury-500 mt-2 shrink-0" />
                    <span className="text-silver-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse 65% 50% at 50% 50%, rgba(212,160,23,0.06) 0%, transparent 65%)`,
      }} />
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="section-reveal">
          <div className="text-mercury-400 text-xs font-medium tracking-widest uppercase mb-3">Let's Build</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-silver-100 mb-6">
            Ready to build something<br />
            <span className="text-gradient-gold">that scales beyond products?</span>
          </h2>
          <p className="text-silver-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Open to strategic advisory roles, leadership opportunities, mentorship, and collaborations
            on AI-native platforms. Let's create something meaningful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://topmate.io/phanindra_venkata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-mercury-500 to-mercury-400 text-obsidian-950 font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <CalendarCheck size={18} /> Book on Topmate
            </a>
            <a
              href="https://www.linkedin.com/in/phanindragvenkata/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-silver-600/20 text-silver-300 hover:text-silver-100 hover:border-silver-500/30 px-8 py-4 rounded-full transition-all"
            >
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
            <a
              href="mailto:venkatagphanindra@gmail.com"
              className="inline-flex items-center gap-3 border border-sage-600/25 text-sage-400 hover:text-sage-300 hover:border-sage-500/35 px-8 py-4 rounded-full transition-all"
            >
              <Mail size={18} /> Send a Message
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-mercury-500/10">
            {[
              { label: 'Mentorship', desc: 'PM career guidance' },
              { label: 'Advisory', desc: 'AI Strategy & Platform' },
              { label: 'Leadership', desc: 'CPO / VP Product roles' },
              { label: 'Collaboration', desc: 'AI-native platform builds' },
            ].map((p) => (
              <div key={p.label}>
                <div className="text-silver-200 font-semibold text-sm mb-1">{p.label}</div>
                <div className="text-silver-500 text-xs">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mercury-500/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-semibold text-gradient-gold">Phanindra G. Venkata</span>
        <p className="text-silver-600 text-xs">AI-First Product Leader · Mentor · Strategist</p>
        <div className="flex items-center gap-4">
          <a
            href="https://topmate.io/phanindra_venkata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-500 hover:text-mercury-400 transition-colors text-xs font-medium"
          >
            Topmate
          </a>
          <a
            href="mailto:venkatagphanindra@gmail.com"
            className="text-silver-500 hover:text-silver-300 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/phanindragvenkata/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-500 hover:text-silver-300 transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-obsidian-950 text-silver-300">
      <Navbar />
      <Hero />
      <CurrentRole />
      <WhatIDo />
      <Impact />
      <Philosophy />
      <Mentorship />
      <Testimonials />
      <WhereIAddValue />
      <Connect />
      <Footer />
    </div>
  );
}

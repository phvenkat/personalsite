import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Sun, Moon, Menu, X } from 'lucide-react';

/* --------------------------------------------------------------------------
   Phanindra Venkata Gottipati - CEO, VirtuNx
   Executive identity. Editorial, restrained, typographic. Light + dark.
   -------------------------------------------------------------------------- */

const NAV = [
  { label: 'Point of View', href: '#pov' },
  { label: 'The Path', href: '#path' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'VirtuNx', href: '#virtunx' },
];

type Stage = {
  n: string;
  company: string;
  dates: string;
  role?: string;
  roles?: { title: string; org: string; dates: string }[];
  lesson: string;
  body: string;
  current?: boolean;
};

const PATH: Stage[] = [
  {
    n: '01',
    company: 'Microsoft',
    role: 'Product',
    dates: '2013–2021',
    lesson: 'Scale is a discipline, not an accident.',
    body: 'Built petabyte-scale data platforms and cut partner onboarding from six weeks to eight hours. The lesson that stayed: at enterprise scale, the constraint is never the technology. It is the clarity of the interface between systems and the people who depend on them.',
  },
  {
    n: '02',
    company: 'Amazon',
    role: 'Product',
    dates: '2021–2023',
    lesson: 'Customers do not want features. They want a decision made easier.',
    body: 'Scaled search and discovery past 350 million monthly queries and built the ecosystem strategy around them. Customer obsession stopped being a slogan and became a method: start from the choice the customer is trying to make, and work backward to the product.',
  },
  {
    n: '03',
    company: 'Salesforce',
    role: 'Product',
    dates: '2023–2025',
    lesson: 'Leverage is the whole game.',
    body: 'Built an AI application-development platform for Employee Service / HR Service, compressed workflow creation from weeks to hours, and contributed to a $20M+ pipeline. Platforms compound: the right foundation makes every future product cheaper to build and every future decision easier to make.',
  },
  {
    n: '04',
    company: 'VirtuNx & Seosaph',
    dates: '2026–Present',
    roles: [
      { title: 'Chief Executive Officer', org: 'VirtuNx', dates: 'Aug 2026–Present' },
      { title: 'Business Head', org: 'Seosaph', dates: 'Apr 2026–Present' },
    ],
    lesson: 'Ownership changes what you are willing to build.',
    body: 'The culmination of the path, across one family of companies. At VirtuNx, building enterprise AI, data, and automation products for regulated, high-stakes industries. At Seosaph, driving customers and the organizational growth that carries it. Everything learned about how great software gets made, aimed at one outcome: turning complexity into clear, confident action.',
    current: true,
  },
];

const PILLARS = [
  { n: '01', title: 'Start from the decision', body: 'Build backward from the choice someone has to make, not forward from the technology you happen to have.' },
  { n: '02', title: 'Simplicity is earned', body: 'Anyone can add. The work is in what you remove. Simple is the finished state, never the starting one.' },
  { n: '03', title: 'Build what compounds', body: 'Favor the system over the feature. The right platform makes every decision that follows it cheaper.' },
  { n: '04', title: 'Own the outcome', body: 'Judge the work by the decisions it improved, not the output it produced. Ownership ends at the result.' },
  { n: '05', title: 'Intelligence serves the outcome', body: 'AI, data, and product are means. The end is a better decision, made with confidence, by a human accountable for it. Technology that adds complexity has failed, however advanced.' },
];

const PRINCIPLES = [
  'Start from the decision the customer is trying to make, then work backward to the product.',
  'Complexity is a cost. Account for it like one.',
  'The best feature is often the one you remove.',
  'Build the platform, not the one-off. Leverage is what compounds.',
  'Numbers earn trust; specificity earns belief.',
  'Ship the decision, not the dashboard.',
  'Own the outcome, not just the output.',
  'Make the model explain itself. Unaccountable intelligence is a liability.',
  'Hire people who want the responsibility, then give it to them fully.',
  'Play for the decade. Most advantages are only visible in hindsight.',
];

const PRODUCTS = [
  { name: 'PortiVix', tag: 'Pharma Portfolio & Project Management', desc: 'Plan, prioritise, and track drug pipelines end to end.', href: 'https://virtunx.com/products/pharma-ppm' },
  { name: 'Morviac', tag: 'Molecule Intelligence Platform', desc: 'Public and internal research, aggregated into sourced, explainable intelligence.', href: 'https://virtunx.com/products/molecule-intelligence' },
  { name: 'OplanIQ', tag: 'Portfolio & Project Management', desc: 'Brings disciplined portfolio and project management to non-software teams.', href: 'https://virtunx.com/products/portfolio-project-management' },
  { name: 'ORVIAC', tag: 'Self-Serve Data Intelligence', desc: 'No-code data intelligence: from raw data to your first insight, fast.', href: 'https://virtunx.com/products/data-intelligence' },
];

const WRITING = [
  { title: 'Why enterprises have more data and less clarity than ever', cat: 'Decision Intelligence' },
  { title: 'The product-led organization, past the buzzword', cat: 'Product Strategy' },
  { title: 'AI you can be accountable for: sourced, explainable, owned', cat: 'Enterprise AI' },
];

type Theme = 'light' | 'dark';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow-rule font-mono text-[12px] tracking-eyebrow uppercase text-brass mb-5 flex items-center">
      {children}
    </p>
  );
}

function Navbar({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 border-b ${
        scrolled ? 'border-line bg-paper/85' : 'border-transparent bg-paper/70'
      }`}
    >
      <div className="max-w-page mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-[18px] font-semibold tracking-tight flex items-center gap-2.5 no-underline text-ink">
          <span className="w-[7px] h-[7px] rounded-full bg-brass inline-block" />
          Phanindra Venkata Gottipati
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-[14px] text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={onToggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="text-muted hover:text-brass transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="text-[14px] text-ink border border-line hover:border-brass hover:text-brass px-4 py-2 rounded-[2px] transition-colors">
            Connect
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={onToggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="text-muted"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="text-ink">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-[15px] text-ink border border-line px-4 py-2 rounded-[2px] text-center">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="max-w-page mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <Eyebrow>CEO, VirtuNx</Eyebrow>
          <h1 className="font-serif font-semibold text-[clamp(38px,6vw,68px)] leading-[1.04] tracking-tight text-balance mb-7">
            Technology should make the hard decisions <span className="text-brass">clear</span>.
          </h1>
          <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.55] max-w-[42ch] mb-9">
            I&apos;m Phanindra Venkata Gottipati, CEO of <strong className="text-ink font-semibold">VirtuNx</strong>,
            where we build enterprise AI products that help organizations decide with confidence. Eighteen years in
            software, from engineer to product leader at Microsoft, Amazon, and Salesforce, taught me the work is
            not adding capability. It is <strong className="text-ink font-semibold">removing doubt</strong>.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#virtunx" className="group inline-flex items-center gap-2 bg-ink text-paper hover:bg-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
              What we&apos;re building <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#path" className="inline-flex items-center gap-2 border border-line text-ink hover:border-brass hover:text-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
              The path here
            </a>
          </div>
        </div>

        <div>
          <img
            src="/Phani_Photo.jpeg"
            alt="Phanindra Venkata Gottipati"
            width={864}
            height={1184}
            className="portrait-treat w-full aspect-[4/5] object-cover object-top rounded-[2px] block"
          />
          <div className="font-mono text-[11px] tracking-wider uppercase text-muted mt-3.5 pt-3 border-t border-line flex justify-between">
            <span>Phanindra Venkata Gottipati</span>
            <span>Hyderabad</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Strip() {
  return (
    <div className="border-y border-line">
      <div className="max-w-page mx-auto px-6 sm:px-8 py-8 flex items-center justify-between gap-10 flex-wrap">
        <div className="font-mono text-[12px] tracking-wider uppercase text-muted max-w-[26ch] leading-relaxed">
          Eighteen years in software. From engineer, to Microsoft, Amazon, and Salesforce, to building my own.
        </div>
        <div className="flex items-center gap-8 flex-wrap font-serif text-[21px]">
          <span className="text-ink/85">Microsoft</span>
          <span className="text-ink/85">Amazon</span>
          <span className="text-ink/85">Salesforce</span>
          <span className="text-brass">VirtuNx</span>
        </div>
      </div>
    </div>
  );
}

function PointOfView() {
  return (
    <section id="pov" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal">
        <Eyebrow>A point of view</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(22px,3.2vw,34px)] leading-[1.4] tracking-tight max-w-[24ch] text-ink">
          Every enterprise is drowning in tools and starving for clarity.
        </h2>
        <p className="text-[18px] leading-[1.7] text-muted max-w-[58ch] mt-9">
          More dashboards, more data, more features. And still, the person who has to decide is left guessing.
          I have spent my career on the other side of that problem: not shipping more, but making the decision obvious.
          <strong className="text-ink font-semibold"> Good systems compound.</strong> Each one built well makes the next
          decision cheaper, faster, and clearer. That is the whole discipline, and it is what VirtuNx exists to do.
        </p>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section id="path" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal max-w-[62ch] mb-14">
        <Eyebrow>The path</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-tight mb-5">
          One question, asked in harder rooms.
        </h2>
        <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
          It began in 2005, writing Java and J2EE, learning how software is actually built. An MBA at the Indian
          Institute of Management Calcutta reframed it from how to build to what to build. Eighteen years on, the
          question has never changed, only the room: how do you help people make better decisions at scale?
        </p>
      </div>

      <div>
        {PATH.map((s) => (
          <div key={s.n} className="reveal grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 py-10 border-t border-line last:border-b">
            <div className="sm:pt-1.5">
              <div className="font-mono text-[13px] text-brass tracking-wider">{s.n}</div>
              <div className="font-mono text-[11px] text-muted tracking-wider mt-2 hidden sm:block tabular-nums">{s.dates}</div>
            </div>
            <div>
              <h3 className={`font-serif text-[26px] font-semibold mb-1 ${s.current ? 'text-brass' : 'text-ink'}`}>{s.company}</h3>
              {s.roles ? (
                <div className="mb-4 space-y-1">
                  {s.roles.map((r) => (
                    <div key={r.org} className="font-mono text-[12px] tracking-wider uppercase text-muted">
                      {r.title}, {r.org} <span className="text-muted">&middot; {r.dates}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="font-mono text-[12px] tracking-wider uppercase text-muted mb-4">{s.role} <span className="sm:hidden">&middot; {s.dates}</span></div>
              )}
              <p className="font-serif italic text-[clamp(19px,2.4vw,24px)] text-ink leading-[1.35] mb-3.5">{s.lesson}</p>
              <p className="text-muted leading-[1.65] max-w-[60ch]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="bg-surface border-y border-line">
      <div className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <div className="reveal">
          <Eyebrow>Operating philosophy</Eyebrow>
          <h2 className="font-serif font-semibold text-[clamp(40px,7vw,84px)] leading-none tracking-tight mt-2 mb-6">
            Clarity <span className="italic text-brass">Compounds</span>.
          </h2>
          <p className="text-[clamp(18px,2.3vw,22px)] text-muted max-w-[54ch] leading-[1.6] mb-16">
            Clarity, like capital, compounds. Every decision made cleanly and every system built simply lowers the
            cost of the next one. <strong className="text-ink font-semibold">Complexity is the tax you pay for
            yesterday&apos;s shortcuts. Clarity is the asset that pays forward.</strong>
          </p>
        </div>

        {/* Five pillars */}
        <div className="reveal grid sm:grid-cols-2 gap-px bg-line border border-line mb-20">
          {PILLARS.map((p, i) => (
            <div key={p.n} className={`bg-surface p-8 ${i === 4 ? 'sm:col-span-2' : ''}`}>
              <div className="font-mono text-[12px] text-brass tracking-wider">{p.n}</div>
              <h3 className="font-serif text-[22px] font-semibold mt-3.5 mb-2.5">{p.title}</h3>
              <p className="text-muted text-[15.5px] leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Ten principles */}
        <div className="reveal">
          <Eyebrow>The principles</Eyebrow>
          <ol className="grid sm:grid-cols-2 gap-x-12 gap-y-0 mt-4">
            {PRINCIPLES.map((p, i) => (
              <li key={i} className="flex gap-5 py-5 border-t border-line">
                <span className="font-mono text-[13px] text-brass tabular-nums pt-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-[19px] leading-[1.4] text-ink">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function VirtuNx() {
  return (
    <section id="virtunx" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal flex justify-between items-end gap-6 flex-wrap mb-12">
        <div className="max-w-[62ch]">
          <Eyebrow>The current chapter</Eyebrow>
          <h2 className="font-serif font-semibold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-tight mb-5">VirtuNx</h2>
          <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
            Enterprise AI, data, and automation products for regulated, high-stakes industries. We do not build
            software to sell. We build products that help people make better decisions.
          </p>
        </div>
        <a href="https://virtunx.com/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 border border-line text-ink hover:border-brass hover:text-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors whitespace-nowrap">
          Visit VirtuNx <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="reveal grid sm:grid-cols-2 gap-px bg-line border border-line">
        {PRODUCTS.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group bg-paper hover:bg-surface p-8 block transition-colors">
            <div className="font-serif text-[22px] font-semibold flex items-center gap-2 mb-1.5">
              {p.name}
              <ArrowUpRight size={15} className="text-brass opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
            <div className="font-mono text-[11px] tracking-wider uppercase text-brass mb-3">{p.tag}</div>
            <p className="text-muted text-[15px] leading-[1.6]">{p.desc}</p>
          </a>
        ))}
      </div>
      <p className="reveal font-mono text-[11px] tracking-wider uppercase text-muted mt-6">
        VirtuNx and Seosaph are part of the same family of companies.
      </p>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal max-w-[62ch] mb-12">
        <Eyebrow>Writing</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(28px,4vw,42px)] leading-[1.12] tracking-tight mb-5">Notes on building.</h2>
        <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
          Essays on enterprise AI, product-led organizations, and decision intelligence, written for operators, not
          the hype cycle. The first pieces publish this quarter.
        </p>
      </div>
      <div className="reveal">
        {WRITING.map((w, i) => (
          <div key={i} className="grid sm:grid-cols-[130px_1fr_auto] gap-2 sm:gap-6 items-baseline py-6 border-t border-line last:border-b">
            <div className="font-mono text-[11px] tracking-wider uppercase text-muted">Coming soon</div>
            <div className="font-serif text-[21px] text-ink">{w.title}</div>
            <div className="font-mono text-[11px] tracking-wider uppercase text-brass">{w.cat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal">
        <Eyebrow>Connect</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(32px,5vw,56px)] leading-[1.08] tracking-tight max-w-[18ch] mb-7">
          Building something that has to be right? Let&apos;s talk.
        </h2>
        <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6] max-w-[52ch] mb-8">
          Open to conversations on enterprise AI, product leadership, advisory work, and the occasional stage.
          The best ones start simply.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="https://www.linkedin.com/in/phanindragvenkata/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-ink text-paper hover:bg-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
            LinkedIn <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="mailto:venkatagphanindra@gmail.com" className="inline-flex items-center gap-2 border border-line text-ink hover:border-brass hover:text-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
            Email
          </a>
          <a href="https://virtunx.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-line text-ink hover:border-brass hover:text-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
            VirtuNx
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-page mx-auto px-6 sm:px-8 py-10 flex justify-between items-center gap-5 flex-wrap text-[13px] text-muted">
        <span>Phanindra Venkata Gottipati &middot; CEO, VirtuNx</span>
        <span className="font-serif italic">Clarity compounds.</span>
        <span>
          <a href="https://www.linkedin.com/in/phanindragvenkata/" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">LinkedIn</a>
          <span className="mx-2">&middot;</span>
          <a href="https://virtunx.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">VirtuNx</a>
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem('pvg-theme');
    const initial: Theme = saved === 'dark' || saved === 'light'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(initial);
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('pvg-theme', next);
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
      <Navbar theme={theme} onToggle={toggle} />
      <Hero />
      <Strip />
      <PointOfView />
      <Path />
      <Philosophy />
      <VirtuNx />
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
}

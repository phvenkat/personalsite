import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Sun, Moon, Menu, X, Linkedin } from 'lucide-react';

/* --------------------------------------------------------------------------
   Phanindra Venkata Gottipati - CEO, VirtuNx
   Central idea: building technology that turns complexity into better decisions.
   Editorial, restrained, typographic. Light + dark.
   -------------------------------------------------------------------------- */

const NAV = [
  { label: 'About', href: '#top' },
  { label: 'Journey', href: '#journey' },
  { label: 'Ideas', href: '#ideas' },
  { label: 'VirtuNx', href: '#building' },
];

const LINKEDIN = 'https://www.linkedin.com/in/phanindragvenkata/';

const PRODUCTS = ['PortiVix', 'Morviac', 'OplanIQ', 'ORVIAC'];

type Stage = {
  n: string;
  company: string;
  dates: string;
  roles?: { title: string; org: string; dates: string }[];
  lesson: string;
  body: string;
  current?: boolean;
};

const JOURNEY: Stage[] = [
  {
    n: '01',
    company: 'Microsoft',
    dates: '2013–2021',
    lesson: 'Learning how enterprise platforms scale.',
    body: 'Built data platforms and partner systems at global scale, and learned how enterprise software actually earns trust: through reliability, clean interfaces between systems and people, and ecosystems that let others build.',
  },
  {
    n: '02',
    company: 'Amazon',
    dates: '2021–2023',
    lesson: 'Learning customer obsession, experimentation and discovery.',
    body: 'Worked on search and discovery at consumer scale. Customer obsession stopped being a slogan and became a method: study real behaviour, run the experiment, let the metric and the customer decide.',
  },
  {
    n: '03',
    company: 'Salesforce',
    dates: '2023–2025',
    lesson: 'Learning how enterprise experiences, workflows and AI come together.',
    body: 'Led product for AI-enabled enterprise experiences across Employee Service and HR Service, where the work is making workflows, platforms and AI meet in something an employee can actually use.',
  },
  {
    n: '04',
    company: 'VirtuNx & Seosaph',
    dates: '2026–Present',
    roles: [
      { title: 'Chief Executive Officer', org: 'VirtuNx', dates: 'Aug 2026–Present' },
      { title: 'Business Head', org: 'Seosaph', dates: 'Apr 2026–Present' },
    ],
    lesson: 'Applying those lessons to building a product company.',
    body: 'The next logical chapter, not a change of direction: turning two decades of building enterprise products into a company that builds focused, vertical enterprise products, and the teams and customers around them.',
    current: true,
  },
];

const PRINCIPLES = [
  { title: 'Customer before technology', body: 'Start with the problem worth solving, not the technology available.' },
  { title: 'Decisions before dashboards', body: 'Information creates value when it improves an action.' },
  { title: 'Clarity before complexity', body: 'Enterprise problems can be complex. Enterprise experiences should not be.' },
  { title: 'Ownership before hierarchy', body: 'Give people context, accountability and room to act.' },
  { title: 'Systems before heroes', body: 'Strong organizations succeed because of good systems, not extraordinary individual effort.' },
  { title: 'Long-term value before short-term activity', body: 'Measure outcomes, not motion.' },
];

const IMPACT = [
  {
    at: 'Microsoft',
    title: 'Turning weeks of onboarding into hours',
    context: 'Enterprise partners waited weeks to integrate, held up by manual steps and disconnected systems.',
    contribution: 'Built petabyte-scale data platforms and streamlined the onboarding path end to end.',
    outcome: 'Partner onboarding dropped from six weeks to eight hours, on platforms operating at 2.4PB scale.',
  },
  {
    at: 'Amazon',
    title: 'Search and discovery at consumer scale',
    context: 'Customers could only buy what they could find; discovery quality moved the whole business.',
    contribution: 'Scaled search and discovery systems and made them data-driven, reducing friction for third-party developers.',
    outcome: 'Served 350M+ monthly queries with measurable gains in how customers found and chose products.',
  },
  {
    at: 'Salesforce',
    title: 'AI where the enterprise actually works',
    context: 'Building enterprise apps for Employee Service and HR Service was slow and specialist-bound.',
    contribution: 'Built an AI application-development platform that compressed how these workflows are created.',
    outcome: 'Workflow creation moved from weeks to hours, contributing to a $20M+ pipeline.',
  },
];

const IDEAS = [
  { topic: 'Enterprise AI', note: 'Moving past demonstrations toward measurable business outcomes.' },
  { topic: 'Product Leadership', note: 'Strategy, prioritization, operating models and product organizations.' },
  { topic: 'Decision Intelligence', note: 'From data, to insight, to decision, to action.' },
  { topic: 'Building VirtuNx', note: 'Lessons from moving out of product leadership into company building.' },
  { topic: 'Pharma Technology', note: 'Why vertical enterprise software needs real domain intelligence.' },
];

// Titles being written. Not yet published; shown as intent, not as links.
const FORTHCOMING = [
  "AI Isn't the Strategy. The Business Decision Is.",
  'Why Enterprise Products Fail When They Optimize Features Instead of Workflows',
  'From Product Leader to CEO: What Changed in How I Make Decisions',
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
          <a href="#connect" className="text-[14px] text-ink border border-line hover:border-brass hover:text-brass px-4 py-2 rounded-[2px] transition-colors">
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
          <a href="#connect" onClick={() => setOpen(false)} className="text-[15px] text-ink border border-line px-4 py-2 rounded-[2px] text-center">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="max-w-page mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-14 sm:pb-20">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="font-mono text-[12px] tracking-eyebrow uppercase text-muted mb-6">Phanindra Venkata Gottipati</p>
          <h1 className="font-serif font-semibold text-[clamp(34px,5.4vw,60px)] leading-[1.06] tracking-tight text-balance mb-6">
            Building technology that turns complexity into <span className="text-brass">better decisions</span>.
          </h1>
          <p className="font-serif text-[clamp(18px,2.1vw,22px)] text-ink mb-6">
            CEO, VirtuNx <span className="text-muted px-1.5">/</span> Enterprise Product &amp; AI Leader
          </p>
          <p className="text-[clamp(16px,1.9vw,19px)] text-muted leading-[1.6] max-w-[46ch] mb-9">
            I build enterprise products, teams and businesses at the intersection of technology, data, AI and
            human decision-making.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#journey" className="group inline-flex items-center gap-2 bg-ink text-paper hover:bg-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
              Explore my journey <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#building" className="inline-flex items-center gap-2 border border-line text-ink hover:border-brass hover:text-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
              What we&apos;re building at VirtuNx <ArrowRight size={15} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-brass transition-colors p-1">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <div>
          <img
            src="/Phani_Photo.jpeg"
            alt="Phanindra Venkata Gottipati, CEO of VirtuNx"
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
      <div className="max-w-page mx-auto px-6 sm:px-8 py-6 flex items-center gap-x-8 gap-y-3 flex-wrap font-mono text-[12px] tracking-wider uppercase text-muted">
        <span className="text-ink">18+ years in enterprise technology</span>
        <span aria-hidden="true" className="text-line">/</span>
        <span>Microsoft</span>
        <span>Amazon</span>
        <span>Salesforce</span>
        <span className="text-brass">now building VirtuNx</span>
      </div>
    </div>
  );
}

function Building() {
  return (
    <section id="building" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
        <div>
          <Eyebrow>What I&apos;m building now</Eyebrow>
          <h2 className="font-serif font-semibold text-[clamp(30px,4.4vw,46px)] leading-[1.08] tracking-tight">VirtuNx</h2>
        </div>
        <div>
          <p className="text-[clamp(17px,2vw,20px)] text-ink leading-[1.6] mb-5">
            After years of building enterprise products inside global technology organizations, I wanted to apply
            those lessons closer to specific industry and business problems.
          </p>
          <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6] mb-8">
            VirtuNx is that next chapter: focused enterprise products where AI, data, domain knowledge and
            thoughtful product engineering come together to improve important business decisions. My personal
            site explains why I am building the company; the company site is where the products speak for themselves.
          </p>
          <a href="https://virtunx.com/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-[15px] text-ink border border-line hover:border-brass hover:text-brass px-6 py-3 rounded-[2px] transition-colors">
            Explore VirtuNx <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] tracking-wider uppercase text-muted">
            <span className="text-muted/80">The products</span>
            {PRODUCTS.map((p) => (
              <span key={p} className="text-ink">{p}</span>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-wider uppercase text-muted">
            VirtuNx and Seosaph are part of the same family of companies.
          </p>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal max-w-[64ch] mb-14">
        <Eyebrow>My journey</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight mb-5">
          From platforms, to products, to building a company.
        </h2>
        <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
          It began in 2005, writing Java and J2EE, and later an MBA at the Indian Institute of Management Calcutta
          reframed the work from how to build to what to build. Each chapter since has answered the same question
          in a harder room: how do you help people make better decisions at scale?
        </p>
      </div>

      <div>
        {JOURNEY.map((s) => (
          <div key={s.n} className="reveal grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 py-9 border-t border-line last:border-b">
            <div className="sm:pt-1.5">
              <div className="font-mono text-[13px] text-brass tracking-wider">{s.n}</div>
              <div className="font-mono text-[11px] text-muted tracking-wider mt-2 hidden sm:block tabular-nums">{s.dates}</div>
            </div>
            <div>
              <h3 className={`font-serif text-[24px] font-semibold mb-1 ${s.current ? 'text-brass' : 'text-ink'}`}>{s.company}</h3>
              {s.roles ? (
                <div className="mb-3 space-y-1">
                  {s.roles.map((r) => (
                    <div key={r.org} className="font-mono text-[12px] tracking-wider uppercase text-muted">
                      {r.title}, {r.org} <span className="text-muted">&middot; {r.dates}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="font-mono text-[12px] tracking-wider uppercase text-muted mb-3 sm:hidden">{s.dates}</div>
              )}
              <p className="font-serif italic text-[clamp(18px,2.2vw,22px)] text-ink leading-[1.35] mb-3">{s.lesson}</p>
              <p className="text-muted leading-[1.65] max-w-[62ch]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowIThink() {
  return (
    <section id="think" className="bg-surface border-y border-line">
      <div className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <div className="reveal max-w-[64ch] mb-14">
          <Eyebrow>How I think</Eyebrow>
          <h2 className="font-serif font-semibold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight mb-5">
            Business outcomes first. Technology second.
          </h2>
          <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
            Enterprises are rich in tools and short on clarity. AI matters when it improves a decision, not when it
            simply automates activity. A few principles guide how I build.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-x-14 gap-y-0">
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="flex gap-5 py-7 border-t border-line">
              <span className="font-mono text-[13px] text-brass tabular-nums pt-1.5">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-[clamp(20px,2.3vw,24px)] font-semibold text-ink mb-1.5">{p.title}</h3>
                <p className="text-muted text-[15.5px] leading-[1.6]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal max-w-[64ch] mb-14">
        <Eyebrow>Selected impact</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight mb-5">
          A few things worth pointing to.
        </h2>
        <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
          Not everything I have worked on, only work that shows the shape of it: enterprise scale, customer impact,
          and AI put to a real business use.
        </p>
      </div>

      <div className="reveal grid md:grid-cols-3 gap-px bg-line border border-line">
        {IMPACT.map((s) => (
          <div key={s.at} className="bg-paper p-7 sm:p-8 flex flex-col">
            <div className="font-mono text-[11px] tracking-wider uppercase text-brass mb-3">{s.at}</div>
            <h3 className="font-serif text-[21px] font-semibold text-ink leading-snug mb-4">{s.title}</h3>
            <dl className="space-y-3 text-[14.5px] leading-[1.55]">
              <div>
                <dt className="font-mono text-[10.5px] tracking-wider uppercase text-muted mb-0.5">Context</dt>
                <dd className="text-muted">{s.context}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10.5px] tracking-wider uppercase text-muted mb-0.5">Contribution</dt>
                <dd className="text-muted">{s.contribution}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10.5px] tracking-wider uppercase text-muted mb-0.5">Outcome</dt>
                <dd className="text-ink">{s.outcome}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ideas() {
  return (
    <section id="ideas" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal max-w-[64ch] mb-14">
        <Eyebrow>Ideas</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight mb-5">
          What I am thinking and writing about.
        </h2>
        <p className="text-[clamp(17px,2vw,20px)] text-muted leading-[1.6]">
          Written for operators, not the hype cycle. The first essays are in progress; the territories below are
          where my attention sits.
        </p>
      </div>

      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 mb-14">
        {IDEAS.map((t) => (
          <div key={t.topic} className="py-6 border-t border-line">
            <h3 className="font-serif text-[20px] font-semibold text-ink mb-1.5">{t.topic}</h3>
            <p className="text-muted text-[14.5px] leading-[1.55]">{t.note}</p>
          </div>
        ))}
      </div>

      <div className="reveal">
        <div className="font-mono text-[11px] tracking-wider uppercase text-muted mb-5">In progress</div>
        <ul className="space-y-0">
          {FORTHCOMING.map((title, i) => (
            <li key={i} className="flex items-baseline gap-4 py-4 border-t border-line last:border-b">
              <span className="font-mono text-[11px] tracking-wider uppercase text-brass shrink-0">Writing</span>
              <span className="font-serif text-[clamp(18px,2.1vw,21px)] text-ink leading-snug">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NextChapter() {
  return (
    <section className="max-w-page mx-auto px-6 sm:px-8 py-16 sm:py-20">
      <div className="reveal max-w-[62ch]">
        <Eyebrow>The next chapter</Eyebrow>
        <p className="font-serif text-[clamp(21px,3vw,30px)] leading-[1.4] tracking-tight text-ink">
          I keep returning to one question: how can enterprise technology help people make difficult decisions
          with greater clarity? That is shaping what we build at VirtuNx, the problems I choose to spend time on,
          and much of what I intend to write about in the years ahead.
        </p>
      </div>
    </section>
  );
}

function GivingBack() {
  return (
    <section className="max-w-page mx-auto px-6 sm:px-8 pb-20 sm:pb-24">
      <div className="reveal max-w-[62ch] border-t border-line pt-10">
        <Eyebrow>Learning &amp; giving back</Eyebrow>
        <p className="text-[clamp(16px,1.9vw,18px)] text-muted leading-[1.65]">
          Some of the most valuable lessons in my career came from people who invested time in helping me think
          differently. I try to carry that forward through mentoring, teaching, and conversations with product
          professionals, students and emerging leaders.
        </p>
        <a href="https://topmate.io/phanindra_venkata" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-[14px] text-muted hover:text-brass transition-colors">
          Mentoring <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="max-w-page mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="reveal">
        <Eyebrow>Connect</Eyebrow>
        <h2 className="font-serif font-semibold text-[clamp(30px,5vw,52px)] leading-[1.08] tracking-tight max-w-[18ch] mb-7">
          Building something that has to be right? Let&apos;s talk.
        </h2>
        <p className="text-[clamp(16px,1.9vw,19px)] text-muted leading-[1.6] max-w-[52ch] mb-8">
          Open to conversations on enterprise AI, product leadership, and the businesses being built on top of them.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-ink text-paper hover:bg-brass px-6 py-3 rounded-[2px] text-[15px] transition-colors">
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
        <span className="font-serif italic">Better decisions, by design.</span>
        <span>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">LinkedIn</a>
          <span className="mx-2">&middot;</span>
          <a href="https://virtunx.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brass transition-colors">VirtuNx</a>
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Dark is the default; light only when the visitor has toggled to it.
    const saved = localStorage.getItem('pvg-theme');
    const initial: Theme = saved === 'light' ? 'light' : 'dark';
    setTheme(initial);
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  // Keep the mobile browser chrome colour in sync with the active theme.
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#121319' : '#f1efe9');
  }, [theme]);

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
      <Building />
      <Journey />
      <HowIThink />
      <Impact />
      <Ideas />
      <NextChapter />
      <GivingBack />
      <Connect />
      <Footer />
    </div>
  );
}

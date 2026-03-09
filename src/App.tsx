import { FormEvent, useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookText,
  ChevronRight,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import {
  capabilityGroups,
  focusAreas,
  metrics,
  posts,
  profile,
  projects,
  quickWins,
  socialLinks,
  spotlights,
  timeline,
} from "./content";

const STORAGE_KEY = "aniruddha-portfolio-favorites";
const roleIntervalMs = 2400;
const spotlightIntervalMs = 4800;
const clockIntervalMs = 60000;

const navItems = [
  { id: "home", label: "Home" },
  { id: "signals", label: "Signals" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "capabilities", label: "Capabilities" },
  { id: "network", label: "Network" },
  { id: "contact", label: "Contact" },
];

const capabilityIcons = [Code2, Layers3, Rocket, BookText];

function formatDate(input: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(input));
}

function formatLocalTime() {
  return new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="section-tag">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [projectQuery, setProjectQuery] = useState("");
  const [projectCategory, setProjectCategory] = useState("All");
  const [articleQuery, setArticleQuery] = useState("");
  const [articleTag, setArticleTag] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState("");
  const [localTime, setLocalTime] = useState(formatLocalTime());
  const [brief, setBrief] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved) as string[];
      setFavorites(parsed);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, roleIntervalMs);

    return () => window.clearInterval(roleTimer);
  }, []);

  useEffect(() => {
    const spotlightTimer = window.setInterval(() => {
      setSpotlightIndex((current) => (current + 1) % spotlights.length);
    }, spotlightIntervalMs);

    return () => window.clearInterval(spotlightTimer);
  }, []);

  useEffect(() => {
    const clockTimer = window.setInterval(() => {
      setLocalTime(formatLocalTime());
    }, clockIntervalMs);

    return () => window.clearInterval(clockTimer);
  }, []);

  useEffect(() => {
    if (!copiedLabel) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopiedLabel("");
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [copiedLabel]);

  const projectCategories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  const articleTags = useMemo(
    () => ["All", ...new Set(posts.flatMap((post) => post.tags))],
    []
  );

  const filteredProjects = useMemo(() => {
    const query = projectQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        projectCategory === "All" || project.category === projectCategory;
      const haystack = [project.title, project.blurb, ...project.stack, ...project.badges]
        .join(" ")
        .toLowerCase();
      const matchesQuery = query.length === 0 || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [projectCategory, projectQuery]);

  const filteredPosts = useMemo(() => {
    const query = articleQuery.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = articleTag === "All" || post.tags.includes(articleTag);
      const haystack = [post.title, post.summary, ...post.tags].join(" ").toLowerCase();
      const matchesQuery = query.length === 0 || haystack.includes(query);
      return matchesTag && matchesQuery;
    });
  }, [articleQuery, articleTag]);

  const favoriteProjects = useMemo(
    () => projects.filter((project) => favorites.includes(project.id)),
    [favorites]
  );

  const publicSignals = metrics.reduce((sum, metric) => sum + metric.value, 0);
  const activeSpotlight = spotlights[spotlightIndex];

  const toggleFavorite = (projectId: string) => {
    setFavorites((current) =>
      current.includes(projectId)
        ? current.filter((value) => value !== projectId)
        : [...current, projectId]
    );
  };

  const celebrate = () => {
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#ff6b4a", "#0ea5a4", "#9ccf31", "#11212d", "#ffbf69"],
    });
  };

  const copyToClipboard = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
    } catch {
      setCopiedLabel(`Copy ${label} manually`);
    }
  };

  const submitBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `${brief.name || "Portfolio"} collaboration brief`;
    const body = [
      `Name: ${brief.name}`,
      `Email: ${brief.email}`,
      "",
      brief.message,
    ].join("\n");

    celebrate();
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="app-shell text-slate-950">
      <div className="mesh" />
      <div className="orb orb-coral" />
      <div className="orb orb-teal" />
      <div className="orb orb-lime" />

      <header className="sticky top-0 z-50 border-b border-white/40 bg-[rgba(244,239,230,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-900">
            <span className="brand-mark">A</span>
            <span>Aniruddha Adak</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={profile.resume} className="ghost-button" target="_blank" rel="noreferrer">
              <Download size={16} />
              Resume
            </a>
            <a href={profile.devto} className="action-button" target="_blank" rel="noreferrer">
              Read DEV
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/50 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={profile.resume} className="ghost-button justify-center" target="_blank" rel="noreferrer">
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Sparkles size={16} className="text-[var(--accent-coral)]" />
              AI agent engineering, product design, and technical writing in one system
            </div>

            <div className="space-y-5">
              <p className="section-tag">Live portfolio, updated for March 2026</p>
              <h1 className="hero-title">
                Building products, experiments, and public proof around
                <span className="hero-accent"> AI agents, rich interfaces, and fast execution.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                {profile.subheadline}
              </p>
              <div className="inline-flex flex-wrap items-center gap-3 rounded-3xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm">
                <span className="font-semibold text-slate-900">Now rotating through:</span>
                <span className="rounded-full bg-[rgba(17,33,45,0.06)] px-3 py-1 font-medium">
                  {profile.roles[roleIndex]}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="action-button">
                Explore Projects
                <ArrowUpRight size={16} />
              </a>
              <a href={profile.devto} className="ghost-button" target="_blank" rel="noreferrer">
                <BookText size={16} />
                Latest writing
              </a>
              <button type="button" className="ghost-button" onClick={celebrate}>
                <Sparkles size={16} />
                Celebrate the journey
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="panel compact-panel">
                <p className="metric-kicker">Public signals</p>
                <p className="metric-number">{publicSignals}+</p>
                <p className="metric-note">Combined visible footprint across repos, posts, badges, contributions, and audiences.</p>
              </div>
              <div className="panel compact-panel">
                <p className="metric-kicker">Location</p>
                <p className="metric-number text-2xl">Kolkata</p>
                <p className="metric-note">Operating on IST and working across design, code, AI, and content layers.</p>
              </div>
              <div className="panel compact-panel">
                <p className="metric-kicker">Local time</p>
                <p className="metric-number text-2xl">{localTime}</p>
                <p className="metric-note">Useful if you want to time outreach, reviews, or collaboration windows.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="profile-card panel overflow-hidden">
              <div className="profile-card-top">
                <div>
                  <p className="section-tag">Identity panel</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">{profile.headline}</h2>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-slate-900"
                  onClick={() => copyToClipboard("email", profile.email)}
                  aria-label="Copy email"
                >
                  <Copy size={16} />
                </button>
              </div>

              <div className="profile-frame">
                <img src={profile.image} alt="Aniruddha Adak" className="h-full w-full object-cover" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="spotlight-card" style={{ borderColor: activeSpotlight.accent }}>
                  <p className="metric-kicker">{activeSpotlight.eyebrow}</p>
                  <h3 className="text-lg font-semibold text-slate-950">{activeSpotlight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{activeSpotlight.description}</p>
                </div>
                <div className="spotlight-stack">
                  <p className="metric-kicker">Core channels</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.languages.map((language) => (
                      <span key={language} className="chip">
                        {language}
                      </span>
                    ))}
                    <span className="chip">Open to collaborations</span>
                    <span className="chip">AI x Product x Frontend</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <a href={profile.primaryGithub} className="icon-link" target="_blank" rel="noreferrer">
                      <Github size={16} />
                      GitHub
                    </a>
                    <a href={profile.linkedin} className="icon-link" target="_blank" rel="noreferrer">
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                    <a href={profile.twitter} className="icon-link" target="_blank" rel="noreferrer">
                      <Globe size={16} />
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="signals" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Signal board"
            title="A stronger read on the work, not just a prettier hero."
            copy="This portfolio now surfaces public evidence of what you ship, what you write, where you show up, and which technical themes repeat often enough to count as real direction."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="panel metric-panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <p className="metric-kicker">{metric.label}</p>
                <p className="metric-number">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="metric-note">{metric.note}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="panel space-y-5">
              <p className="section-tag">Current focus areas</p>
              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="rounded-3xl border border-slate-900/8 bg-white/70 p-4">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="mt-1 text-[var(--accent-coral)]" size={18} />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{area.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-700">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel space-y-5">
              <p className="section-tag">Timeline and proof</p>
              <div className="timeline-track">
                {timeline.map((item) => (
                  <div key={item.period} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-body">
                      <p className="metric-kicker">{item.period}</p>
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.outcomes.map((outcome) => (
                          <span key={outcome} className="chip">
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Project atlas"
            title="Recent products, public experiments, and directionally important builds."
            copy="The filtering and save controls below are new. You can scan by area, search across stack and themes, and pin the projects that best represent the version of your work you want to lead with."
          />

          <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <div className="panel flex flex-col gap-4">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    value={projectQuery}
                    onChange={(event) => setProjectQuery(event.target.value)}
                    className="search-input pl-11"
                    placeholder="Search projects by title, stack, or angle"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectCategories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={category === projectCategory ? "filter-pill active" : "filter-pill"}
                      onClick={() => setProjectCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {filteredProjects.map((project, index) => {
                  const isFavorite = favorites.includes(project.id);
                  return (
                    <motion.article
                      key={project.id}
                      className="panel project-card"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                    >
                      <div className="project-hero">
                        <div>
                          <p className="metric-kicker">{project.category}</p>
                          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{project.title}</h3>
                        </div>
                        <button
                          type="button"
                          className={isFavorite ? "favorite-button active" : "favorite-button"}
                          onClick={() => toggleFavorite(project.id)}
                          aria-label={`Save ${project.title}`}
                        >
                          <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
                        </button>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-slate-700">{project.blurb}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.badges.map((badge) => (
                          <span key={badge} className="soft-chip">
                            {badge}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.repoUrl ? (
                          <a href={project.repoUrl} className="ghost-button" target="_blank" rel="noreferrer">
                            <Github size={16} />
                            Repository
                          </a>
                        ) : null}
                        {project.liveUrl ? (
                          <a href={project.liveUrl} className="ghost-button" target="_blank" rel="noreferrer">
                            <ExternalLink size={16} />
                            Live
                          </a>
                        ) : null}
                        {project.readUrl ? (
                          <a href={project.readUrl} className="ghost-button" target="_blank" rel="noreferrer">
                            <BookText size={16} />
                            Case study
                          </a>
                        ) : null}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <aside className="space-y-4 xl:sticky xl:top-28 xl:self-start">
              <div className="panel space-y-4">
                <p className="section-tag">Saved shortlist</p>
                <h3 className="text-xl font-semibold text-slate-950">{favoriteProjects.length} pinned projects</h3>
                <p className="text-sm leading-6 text-slate-700">
                  Use the star action to keep a personal shortlist of the strongest projects for interviews, social bios, or tailored outreach.
                </p>
                <div className="space-y-3">
                  {favoriteProjects.length > 0 ? (
                    favoriteProjects.map((project) => (
                      <div key={project.id} className="rounded-2xl border border-slate-900/8 bg-white/75 p-3">
                        <p className="text-sm font-semibold text-slate-950">{project.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{project.category}</p>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-900/15 bg-white/55 p-4 text-sm leading-6 text-slate-600">
                      No saved projects yet. Star the work that best represents the current version of your portfolio story.
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="writing" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Writing engine"
            title="Recent posts now sit inside the portfolio instead of being hidden behind an outbound link."
            copy="This section turns your technical writing into a browsable archive. It adds search, tag filtering, and cleaner summaries so visitors can quickly understand what you think about, not just what you code."
          />

          <div className="panel flex flex-col gap-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={articleQuery}
                onChange={(event) => setArticleQuery(event.target.value)}
                className="search-input pl-11"
                placeholder="Search writing by topic, article title, or tag"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {articleTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={tag === articleTag ? "filter-pill active" : "filter-pill"}
                  onClick={() => setArticleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="panel article-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <p className="metric-kicker">{formatDate(post.publishedAt)}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{post.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={post.url} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900" target="_blank" rel="noreferrer">
                  Read article
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Capability map"
            title="Frontend polish, backend structure, AI systems, and public communication all show up together."
            copy="Instead of a flat skill wall, this groups the stack into working lanes that better reflect how you build: interface systems, platform logic, agentic workflows, and public technical credibility."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {capabilityGroups.map((group, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
                <motion.article
                  key={group.title}
                  className="panel capability-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="metric-kicker">Capability lane</p>
                      <h3 className="mt-3 text-2xl font-semibold text-slate-950">{group.title}</h3>
                    </div>
                    <div className="icon-slab">
                      <Icon size={20} />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="network" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Network map"
            title="Your online footprint is much larger than the old portfolio suggested."
            copy="The portfolio now pulls that breadth forward: core profiles, technical writing channels, coding surfaces, launch platforms, and open-source proof points. That makes the site feel current and much closer to your real digital presence."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="panel social-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="metric-kicker">{link.category}</p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">{link.title}</h3>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500" />
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{link.note}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Contact and collaboration"
            title="Fast actions, better context, and zero fragile backend requirements."
            copy="Rather than pretending to have a backend form that breaks on deploy, this contact flow is production-safe: copy actions for key channels, direct social routes, and a prefilled collaboration brief that opens your mail client with context already attached."
          />

          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="panel space-y-5">
              <p className="section-tag">Quick actions</p>
              <div className="space-y-3">
                <button type="button" className="quick-row" onClick={() => copyToClipboard("email", profile.email)}>
                  <span className="quick-row-label">
                    <Mail size={16} />
                    {profile.email}
                  </span>
                  <Copy size={16} />
                </button>
                <button type="button" className="quick-row" onClick={() => copyToClipboard("phone", profile.phone)}>
                  <span className="quick-row-label">
                    <Phone size={16} />
                    {profile.phone}
                  </span>
                  <Copy size={16} />
                </button>
                <a href={profile.website} className="quick-row" target="_blank" rel="noreferrer">
                  <span className="quick-row-label">
                    <Globe size={16} />
                    Portfolio live URL
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <a href={profile.telegram} className="quick-row" target="_blank" rel="noreferrer">
                  <span className="quick-row-label">
                    <Rocket size={16} />
                    Telegram
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-900/8 bg-white/70 p-5">
                <p className="metric-kicker">Why this version is stronger</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  {quickWins.map((win) => (
                    <div key={win} className="flex items-start gap-3">
                      <ChevronRight size={16} className="mt-1 text-[var(--accent-teal)]" />
                      <p>{win}</p>
                    </div>
                  ))}
                </div>
              </div>

              {copiedLabel ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  {copiedLabel}
                </div>
              ) : null}

              <div className="rounded-3xl border border-slate-900/8 bg-[rgba(17,33,45,0.94)] p-5 text-white">
                <p className="metric-kicker text-white/70">Base details</p>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin size={16} />
                    <span>Primary professional channel: LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github size={16} />
                    <span>Two active GitHub identities with distinct histories</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="panel space-y-5" onSubmit={submitBrief}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="section-tag">Collaboration brief</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">Send a prefilled intro</h3>
                </div>
                <a href={profile.resume} className="ghost-button" target="_blank" rel="noreferrer">
                  <Download size={16} />
                  Resume
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="search-input"
                  placeholder="Your name"
                  value={brief.name}
                  onChange={(event) => setBrief((current) => ({ ...current, name: event.target.value }))}
                  required
                />
                <input
                  className="search-input"
                  type="email"
                  placeholder="Your email"
                  value={brief.email}
                  onChange={(event) => setBrief((current) => ({ ...current, email: event.target.value }))}
                  required
                />
              </div>

              <textarea
                className="search-input min-h-40 resize-y"
                placeholder="What are you building, what do you need help with, and what timeline are you targeting?"
                value={brief.message}
                onChange={(event) => setBrief((current) => ({ ...current, message: event.target.value }))}
                required
              />

              <div className="flex flex-wrap gap-3">
                <button type="submit" className="action-button">
                  <Mail size={16} />
                  Open mail with this brief
                </button>
                <a href={profile.linktree} className="ghost-button" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} />
                  Full profile hub
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/50 bg-[rgba(17,33,45,0.95)] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Aniruddha Adak</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
              Portfolio rebuilt to better reflect your current public work across AI agents, product engineering, technical writing, and a much broader platform footprint.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.primaryGithub} className="footer-link" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.devto} className="footer-link" target="_blank" rel="noreferrer">
              DEV
            </a>
            <a href={profile.linkedin} className="footer-link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#home" className="footer-link">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import profileImage from "../myimage.png";
import resumeFile from "./aniruddha-resume.pdf";

export type Metric = {
	label: string;
	value: number;
	suffix?: string;
	note: string;
};

export type FocusArea = {
	title: string;
	description: string;
};

export type Spotlight = {
	eyebrow: string;
	title: string;
	description: string;
	accent: string;
};

export type Project = {
	id: string;
	title: string;
	category: string;
	blurb: string;
	stack: string[];
	liveUrl?: string;
	repoUrl?: string;
	readUrl?: string;
	badges: string[];
};

export type Post = {
	id: string;
	title: string;
	publishedAt: string;
	summary: string;
	tags: string[];
	url: string;
};

export type TimelineItem = {
	period: string;
	title: string;
	description: string;
	outcomes: string[];
};

export type CapabilityGroup = {
	title: string;
	description: string;
	items: string[];
};

export type SocialLink = {
	title: string;
	category: string;
	url: string;
	note: string;
};

export const profile = {
	name: "Aniruddha Adak",
	headline: "AI Agent Engineer, full-stack developer, technical writer, and fast-moving product builder.",
	subheadline:
		"I build interface-heavy products, autonomous AI workflows, and developer-facing experiments that ship quickly and still feel polished.",
	location: "Kolkata, West Bengal, India",
	email: "aniruddhaadak80@gmail.com",
	phone: "+91 7029155691",
	website: "https://aniruddha-adak.vercel.app/",
	primaryGithub: "https://github.com/aniruddhaadak80",
	secondaryGithub: "https://github.com/AniruddhaAdak",
	linkedin: "https://www.linkedin.com/in/aniruddha-adak",
	twitter: "https://x.com/aniruddhadak",
	devto: "https://dev.to/aniruddhaadak",
	codepen: "https://codepen.io/aniruddhaadak",
	telegram: "https://t.me/aniruddhaadak",
	linktree: "https://linktr.ee/aniruddha.adak",
	image: profileImage,
	resume: resumeFile,
	roles: [
		"Autonomous AI agent builder",
		"Full-stack product engineer",
		"Prompt engineering explorer",
		"Technical writing machine",
		"Design-forward frontend developer",
	],
	languages: ["Bengali", "Hindi", "English"],
};

export const metrics: Metric[] = [
	{
		label: "DEV posts published",
		value: 302,
		suffix: "+",
		note: "Public writing footprint spanning AI, web engineering, agents, and portfolio experiments.",
	},
	{
		label: "GitHub repos",
		value: 118,
		suffix: "+",
		note: "Public repositories across apps, experiments, templates, and AI prototypes.",
	},
	{
		label: "Contributions last year",
		value: 411,
		suffix: "+",
		note: "Recent public GitHub activity on shipped repos, issues, and open-source work.",
	},
	{
		label: "DEV badges",
		value: 36,
		suffix: "+",
		note: "Challenge completions across frontend, backend, AI, auth, and open-source tracks.",
	},
	{
		label: "X followers",
		value: 371,
		suffix: "+",
		note: "Audience following your AI, agents, LLM releases, and product updates.",
	},
	{
		label: "Tags followed on DEV",
		value: 126,
		suffix: "+",
		note: "Signal of broad technical curiosity across web, AI, data, and maker ecosystems.",
	},
];

export const focusAreas: FocusArea[] = [
	{
		title: "Autonomous AI systems",
		description: "Focused on self-directed AI systems that can plan, execute, and adapt across multi-step workflows.",
	},
	{
		title: "Frontend that feels alive",
		description: "Interactive motion, bold visual language, and UI systems that make technical work feel cinematic.",
	},
	{
		title: "Technical storytelling",
		description: "Shipping products and immediately turning the build process into public writing, tutorials, and community updates.",
	},
	{
		title: "Fast iteration with depth",
		description: "Building quickly without stopping at MVP aesthetics, especially for AI, productivity, and dev-tool products.",
	},
];

export const spotlights: Spotlight[] = [
	{
		eyebrow: "Current obsession",
		title: "AI agents that can actually do work",
		description:
			"The strongest recent throughline is agentic software: orchestration, runtime visibility, productized prompts, and practical automation.",
		accent: "#ff6b4a",
	},
	{
		eyebrow: "Writing momentum",
		title: "A high-output technical writing engine",
		description:
			"Recent DEV publishing covers portfolio systems, AI launches, technical reflections, project case studies, and ecosystem commentary.",
		accent: "#0ea5a4",
	},
	{
		eyebrow: "Product direction",
		title: "Tools for learning, creators, and developers",
		description:
			"Projects repeatedly cluster around productivity, education, media transcription, creator workflows, and AI-assisted developer tooling.",
		accent: "#9ccf31",
	},
];

export const projects: Project[] = [
	{
		id: "smart-resume-analyzer",
		title: "Smart Resume Analyzer",
		category: "AI Tools",
		blurb:
			"An AI-powered resume analyzer and interview coach for ATS scoring, tailored feedback, and profile-specific practice questions.",
		stack: ["TypeScript", "React", "AI", "Productivity"],
		repoUrl: "https://github.com/aniruddhaadak80/smart-resume-analyzer",
		badges: ["Recent activity", "Career tech", "AI workflow"],
	},
	{
		id: "agentforge",
		title: "agentforge",
		category: "Agents",
		blurb:
			"An autonomous marketplace where AI agents discover, hire, and pay each other for specialized tasks via x402 micropayments.",
		stack: ["TypeScript", "Agents", "Automation", "Payments"],
		repoUrl: "https://github.com/aniruddhaadak80/agentforge",
		badges: ["Multi-agent", "Marketplace", "Experimental systems"],
	},
	{
		id: "exception-os",
		title: "exception-os",
		category: "Developer Experience",
		blurb:
			"A recent command-center style project oriented around publishing workflows, dashboards, sync, and Notion-connected tooling.",
		stack: ["Next.js", "TypeScript", "Notion", "Dashboard"],
		repoUrl: "https://github.com/aniruddhaadak80/exception-os",
		badges: ["Recent commits", "Ops UI", "Workflow tooling"],
	},
	{
		id: "folios-motion",
		title: "Folio-Motion",
		category: "Frontend",
		blurb:
			"An interactive portfolio template with animation-rich presentation for showcasing skills, projects, and proof of craft.",
		stack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
		repoUrl: "https://github.com/aniruddhaadak80/Folio-Motion",
		liveUrl: "https://folio-motion.vercel.app/",
		badges: ["Open source", "Portfolio systems", "Motion-first"],
	},
	{
		id: "skillsphere",
		title: "SkillSphere",
		category: "Productivity",
		blurb:
			"A unified platform with ten apps built to enhance well-being, self-management, and daily productivity.",
		stack: ["TypeScript", "React", "Tailwind CSS", "Well-being"],
		repoUrl: "https://github.com/aniruddhaadak80/SkillSphere",
		liveUrl: "https://skilsphere.vercel.app/",
		badges: ["Multi-tool suite", "Shipping focus", "User utility"],
	},
	{
		id: "lingolens",
		title: "LingoLens",
		category: "AI Tools",
		blurb:
			"A transcription platform that turns audio and video into structured, actionable insight with AI assistance.",
		stack: ["TypeScript", "AI", "Transcription", "Media"],
		repoUrl: "https://github.com/aniruddhaadak80/LingoLens",
		badges: ["Media intelligence", "AI product", "Creator workflow"],
	},
	{
		id: "mercatolive",
		title: "MercatoLive",
		category: "Commerce",
		blurb:
			"A full-stack e-commerce product with real-time inventory thinking and a modern full-stack delivery style.",
		stack: ["Next.js", "TypeScript", "Commerce", "Realtime"],
		repoUrl: "https://github.com/aniruddhaadak80/MercatoLive",
		liveUrl: "https://mercato-live.vercel.app/",
		badges: ["Full-stack", "Realtime ideas", "Commerce"],
	},
	{
		id: "hyperknow",
		title: "HyperKnow",
		category: "Learning Systems",
		blurb:
			"A study-planning concept where AI transforms user learning material into a structured schedule instead of just chatting back.",
		stack: ["AI", "Learning", "Productivity", "Planning"],
		readUrl:
			"https://dev.to/aniruddhaadak/i-gave-an-ai-my-study-materials-and-it-planned-my-entire-learning-schedule-hyperknow-is-not-just-53g",
		badges: ["Case study", "Education tech", "AI workflow"],
	},
	{
		id: "marketpulse",
		title: "MarketPulse",
		category: "AI Tools",
		blurb:
			"A project narrative centered on turning market signals into an AI-assisted product workflow with clear business usefulness.",
		stack: ["Gemini", "Insights", "Market intelligence", "Product"],
		readUrl:
			"https://dev.to/aniruddhaadak/from-code-dreams-to-ai-reality-building-marketpulse-with-google-gemini-2hmf",
		badges: ["Challenge build", "AI insights", "Story-driven launch"],
	},
	{
		id: "codeshare-hub",
		title: "CodeShare Hub",
		category: "Developer Experience",
		blurb:
			"A community-first snippet-sharing concept built around collaboration, discovery, and developer-friendly publishing.",
		stack: ["Community", "Developer tools", "Content", "Web platform"],
		readUrl:
			"https://dev.to/aniruddhaadak/codeshare-hub-building-a-community-first-code-snippet-platform-25il",
		badges: ["Community product", "DX", "Knowledge sharing"],
	},
	{
		id: "vision-possible",
		title: "Vision Possible",
		category: "Agents",
		blurb:
			"A real-time AI-agent concept focused on interpreting live visual input and turning it into useful action.",
		stack: ["Agents", "Computer vision", "Realtime", "AI"],
		readUrl:
			"https://dev.to/aniruddhaadak/vision-possible-decoding-the-future-with-real-time-ai-agents-3069",
		badges: ["Realtime", "Vision systems", "Experimentation"],
	},
];

export const posts: Post[] = [
	{
		id: "notion-sidekick",
		title: "my little notion-powered sidekick",
		publishedAt: "2026-03-06",
		summary:
			"A build story around a Notion-powered helper and a signal of growing interest in practical MCP-style workflows.",
		tags: ["Notion", "MCP", "AI", "Workflow"],
		url: "https://dev.to/aniruddhaadak/my-little-notion-powered-sidekick-imj",
	},
	{
		id: "hyperknow-post",
		title: "I Gave an AI My Study Materials, and It Planned My Entire Learning Schedule. HyperKnow Is Not Just Another Chatbot",
		publishedAt: "2026-03-04",
		summary:
			"Frames AI as a planning partner for structured learning rather than a passive answer engine.",
		tags: ["AI", "Learning", "Productivity", "Deep Learning"],
		url:
			"https://dev.to/aniruddhaadak/i-gave-an-ai-my-study-materials-and-it-planned-my-entire-learning-schedule-hyperknow-is-not-just-53g",
	},
	{
		id: "marketpulse-post",
		title: "From Code Dreams to AI Reality: Building MarketPulse with Google Gemini",
		publishedAt: "2026-02-27",
		summary:
			"A concise build log about moving from idea to AI-enhanced product narrative using Gemini.",
		tags: ["Gemini", "AI", "Build in public", "Product"],
		url: "https://dev.to/aniruddhaadak/from-code-dreams-to-ai-reality-building-marketpulse-with-google-gemini-2hmf",
	},
	{
		id: "codeshare-post",
		title: "CodeShare Hub: Building a Community-First Code Snippet Platform",
		publishedAt: "2026-02-27",
		summary:
			"A platform idea centered on community, snippet discoverability, and practical collaboration.",
		tags: ["Community", "ShowDev", "Developer tools", "Platform"],
		url: "https://dev.to/aniruddhaadak/codeshare-hub-building-a-community-first-code-snippet-platform-25il",
	},
	{
		id: "vision-possible-post",
		title: "Vision Possible: Decoding the Future with Real-Time AI Agents",
		publishedAt: "2026-02-23",
		summary:
			"Explores the direction of visual, agentic, real-time systems and the sort of interfaces they can unlock.",
		tags: ["AI", "Agents", "Realtime", "Webdev"],
		url: "https://dev.to/aniruddhaadak/vision-possible-decoding-the-future-with-real-time-ai-agents-3069",
	},
	{
		id: "kruti-profile",
		title: "Discover me through Kruti and explore insights into my AI-powered projects",
		publishedAt: "2026-02-22",
		summary:
			"A profile-style post that directly packages your AI project identity and public technical presence.",
		tags: ["Bio", "AI", "Projects", "Profile"],
		url:
			"https://dev.to/aniruddhaadak/discover-me-through-kruti-formerly-india-krutrim-ai-and-explore-insights-into-my-ai-powered-3njp",
	},
	{
		id: "readme-movie",
		title: "Turn Your README into a Movie: Building a 3D Site Generator with Copilot CLI",
		publishedAt: "2026-02-22",
		summary:
			"A particularly strong bridge between developer tooling, creativity, and presentational web experiences.",
		tags: ["Copilot", "CLI", "3D", "Developer Experience"],
		url:
			"https://dev.to/aniruddhaadak/turn-your-readme-into-a-movie-building-a-3d-site-generator-with-copilot-cli-170j",
	},
	{
		id: "portfolio-2026",
		title: "Building My 2026 AI Portfolio for the New Year, New You Challenge",
		publishedAt: "2026-02-02",
		summary:
			"Documents the portfolio-building process itself and reinforces the design-and-iteration theme in your work.",
		tags: ["Portfolio", "Gemini", "Challenge", "Design"],
		url:
			"https://dev.to/aniruddhaadak/building-my-2026-ai-portfolio-for-the-new-year-new-you-challenge-46o4",
	},
	{
		id: "runtime-visibility",
		title: "Production Intelligence: Why AI-Generated Code Needs Runtime Visibility",
		publishedAt: "2026-01-30",
		summary:
			"A more systems-oriented take that shows interest beyond UI into observability and operational correctness.",
		tags: ["Webdev", "Programming", "AI", "Observability"],
		url:
			"https://dev.to/aniruddhaadak/production-intelligence-why-ai-generated-code-needs-runtime-visibility-4d",
	},
	{
		id: "algolia-agent-studio",
		title: "Building Smarter Search with Algolia Agent Studio",
		publishedAt: "2026-01-23",
		summary:
			"Shows continued interest in search, agents, and productized intelligence systems.",
		tags: ["Algolia", "AI", "Agents", "Search"],
		url: "https://dev.to/aniruddhaadak/building-smarter-search-with-algolia-agent-studio-3l0d",
	},
];

export const timeline: TimelineItem[] = [
	{
		period: "Mar 2026",
		title: "Recent shipping sprint",
		description:
			"Public activity shows fast iteration across smart-resume-analyzer, exception-os, portfolio experiments, and issue-driven open-source engagement.",
		outcomes: ["31 commits in early March", "New issue activity in microsoft/vscode-docs", "Fresh portfolio and workflow experiments"],
	},
	{
		period: "Q1 2026",
		title: "AI-heavy product storytelling",
		description:
			"Published and shipped around HyperKnow, MarketPulse, CodeShare Hub, vision agents, portfolio systems, and Notion-driven helpers.",
		outcomes: ["Strong DEV cadence", "Clear AI product narrative", "More polished public demos and case studies"],
	},
	{
		period: "2025",
		title: "Challenge season and open-source proof",
		description:
			"Collected challenge completions across frontend, Auth0 for AI agents, Xano backend, Agentic Postgres, Hacktoberfest, and AI writing tracks.",
		outcomes: ["36+ DEV badges", "Hacktoberfest participation", "Broader backend and auth experimentation"],
	},
	{
		period: "2024 onward",
		title: "Foundation to acceleration",
		description:
			"Shifted from learning foundations into sustained public building, showcasing both product ambition and community-facing technical writing.",
		outcomes: ["Growing multi-platform identity", "Expanding stack depth", "Consistent build-in-public momentum"],
	},
];

export const capabilityGroups: CapabilityGroup[] = [
	{
		title: "Frontend systems",
		description: "Modern interface engineering with motion, responsiveness, component architecture, and narrative-driven presentation.",
		items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Animation-rich UI"],
	},
	{
		title: "Backend and platform thinking",
		description: "API design, data-backed product flows, auth, workflow coordination, and platform-level application structure.",
		items: ["Node.js", "MongoDB", "REST APIs", "Auth flows", "Dashboard products", "Realtime concepts"],
	},
	{
		title: "AI, agents, and automation",
		description: "Agentic systems, prompt engineering, learning tools, content workflows, and AI-enhanced product design.",
		items: ["AI agents", "Prompt engineering", "LLM workflows", "Gemini experiments", "Transcription tools", "Automation"],
	},
	{
		title: "Public technical presence",
		description: "Technical blogging, challenge submissions, open-source visibility, and portfolio-led developer branding.",
		items: ["DEV.to writing", "CodePen demos", "Open-source profiles", "Portfolio design", "Challenge storytelling", "Community proof"],
	},
];

export const socialLinks: SocialLink[] = [
	{
		title: "LinkedIn",
		category: "Core",
		url: "https://www.linkedin.com/in/aniruddha-adak",
		note: "Primary professional profile and collaboration touchpoint.",
	},
	{
		title: "GitHub main",
		category: "Core",
		url: "https://github.com/aniruddhaadak80",
		note: "Higher-activity profile with current repos, achievements, and contribution graph.",
	},
	{
		title: "GitHub alt",
		category: "Core",
		url: "https://github.com/AniruddhaAdak",
		note: "Secondary profile with additional projects, contributions, and profile README.",
	},
	{
		title: "X / Twitter",
		category: "Core",
		url: "https://x.com/aniruddhadak",
		note: "Used for AI release commentary, agent updates, and collaboration outreach.",
	},
	{
		title: "DEV Community",
		category: "Writing",
		url: "https://dev.to/aniruddhaadak",
		note: "Main technical writing archive with hundreds of posts and badges.",
	},
	{
		title: "CodePen",
		category: "Frontend",
		url: "https://codepen.io/aniruddhaadak",
		note: "Public experiments and visual frontend work, including motion-heavy demos.",
	},
	{
		title: "Telegram",
		category: "Contact",
		url: "https://t.me/aniruddhaadak",
		note: "Fast direct messaging channel.",
	},
	{
		title: "Linktree",
		category: "Hub",
		url: "https://linktr.ee/aniruddha.adak",
		note: "The broadest directory of profiles, launch platforms, and coding identities.",
	},
	{
		title: "Hugging Face",
		category: "AI",
		url: "https://huggingface.co/aniruddhaadak",
		note: "Part of the AI and model ecosystem footprint surfaced from Linktree.",
	},
	{
		title: "Medium",
		category: "Writing",
		url: "https://medium.com/@aniruddhaadak",
		note: "Additional writing channel beyond DEV.",
	},
	{
		title: "Substack",
		category: "Writing",
		url: "https://aniruddhaadak.substack.com/",
		note: "Newsletter-style distribution channel.",
	},
	{
		title: "Daily.dev",
		category: "Writing",
		url: "https://app.daily.dev/aniruddhaadak",
		note: "Developer community presence around reading and sharing.",
	},
	{
		title: "Peerlist",
		category: "Product",
		url: "https://peerlist.io/aniruddhaadak",
		note: "Launch and product credibility surface.",
	},
	{
		title: "Product Hunt",
		category: "Product",
		url: "https://www.producthunt.com/@aniruddhaadak",
		note: "Relevant launch ecosystem profile for shipped products.",
	},
	{
		title: "Holopin",
		category: "Open source",
		url: "https://holopin.io/@aniruddhaadak80",
		note: "Badge history and community participation proof.",
	},
	{
		title: "GitRoll",
		category: "Open source",
		url: "https://gitroll.io/profile/uTAxlT2IWgfMF9z8He6UYi0M7uwz1",
		note: "Profile credibility card for open-source participation.",
	},
	{
		title: "WakaTime",
		category: "Open source",
		url: "https://wakatime.com/@aniruddhaadak",
		note: "Time and activity trace surfaced from the profile hub.",
	},
	{
		title: "GitLab",
		category: "Coding",
		url: "https://gitlab.com/aniruddha-adak",
		note: "Additional code profile beyond GitHub.",
	},
	{
		title: "LeetCode",
		category: "Coding",
		url: "https://leetcode.com/u/aniruddhaadak",
		note: "Problem-solving profile included on Linktree.",
	},
	{
		title: "Roadmap.sh",
		category: "Coding",
		url: "https://roadmap.sh/u/aniruddhaadak",
		note: "Public learning roadmap and developer-growth trace.",
	},
	{
		title: "Replit",
		category: "Coding",
		url: "https://replit.com/@aniruddhaadak",
		note: "Another public building surface for fast experiments.",
	},
	{
		title: "Instagram",
		category: "Social",
		url: "https://www.instagram.com/aniruddhadak",
		note: "Broader creator presence beyond engineering channels.",
	},
	{
		title: "Facebook",
		category: "Social",
		url: "https://www.facebook.com/aniruddhadak",
		note: "General public social profile.",
	},
	{
		title: "Bluesky",
		category: "Social",
		url: "https://bsky.app/profile/aniruddhaadak.bsky.social",
		note: "Included from the Linktree profile map.",
	},
];

export const quickWins = [
	"Open to collaborations on AI products, developer tools, portfolio systems, and creator workflows.",
	"Comfortable across frontend polish, full-stack delivery, and AI-enhanced user experiences.",
	"Build-in-public rhythm is already strong, which makes the portfolio itself a living product channel.",
	"Strongest visible themes right now are agents, AI launch analysis, technical writing, and interactive product design.",
];

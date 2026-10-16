export type Locale = 'en' | 'zh';

export interface LinkItem {
  label: string;
  href: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  imageAlt?: string;
  demo?: string;
  repo?: string;
  figure?: 'layers' | 'views';
  wide?: boolean;
}

export interface ListedProject {
  title: string;
  description: string;
  links: LinkItem[];
}

export interface Post {
  title: string;
  href: string;
  summary: string;
}

export interface Role {
  when: string;
  title: string;
  detail: string;
}

export interface Copy {
  locale: Locale;
  htmlLang: 'en' | 'zh-Hans';
  ogLocale: 'en_US' | 'zh_CN';
  title: string;
  description: string;
  home: string;
  otherLocale: { label: string; href: string; lang: string };
  skip: string;
  themeToDark: string;
  themeToLight: string;
  newTab: string;
  nav: LinkItem[];
  mark: string;
  roman: string;
  kicker: string;
  lede: string;
  facts: Fact[];
  profiles: LinkItem[];
  workKicker: string;
  workTitle: string;
  workIntro: string;
  demo: string;
  source: string;
  featured: FeaturedProject[];
  layers: { id: string; text: string }[];
  layersNote: string;
  views: { id: string; name: string; ref: string }[];
  viewsNote: string;
  moreKicker: string;
  moreTitle: string;
  more: ListedProject[];
  writingKicker: string;
  writingTitle: string;
  seriesTitle: string;
  seriesHref: string;
  seriesIntro: string;
  posts: Post[];
  essayKicker: string;
  essay: Post;
  resumeKicker: string;
  resumeTitle: string;
  roles: Role[];
  education: Role;
  skillsLabel: string;
  skills: string;
  contactKicker: string;
  contactTitle: string;
  contactIntro: string;
  contacts: LinkItem[];
  footerNote: string;
  footerRights: string;
}

const profiles = {
  github: 'https://github.com/IllegalCreed',
  devto: 'https://dev.to/illegal',
  notes: 'https://illegalscreed.cn/',
  cv: 'https://illegalscreed.cn/zh/CV',
  email: 'mailto:illegals0001@gmail.com',
};

const repos = {
  typePal: 'https://github.com/IllegalCreed/type-pal',
  algorithms: 'https://github.com/IllegalCreed/algorithms-visualization',
  sanguo: 'https://github.com/IllegalCreed/llm-sanguo',
  docs: 'https://github.com/IllegalCreed/agent-doc-architecture',
  skyfire: 'https://github.com/IllegalCreed/skyfire-1943',
  lumideck: 'https://github.com/IllegalCreed/big-ppt',
  quiz: 'https://github.com/IllegalCreed/Quiz-monorepo',
  guard: 'https://github.com/IllegalCreed/ai-network-guard',
  studio: 'https://github.com/IllegalCreed/content-studio',
  marketing: 'https://github.com/IllegalCreed/marketing-ops',
  roadmap: 'https://github.com/IllegalCreed/IllegalCreed.github.io',
};

const demos = {
  typePal: 'https://pal.illegalscreed.cn/',
  algorithms: 'https://algo.illegalscreed.cn/',
  sanguo: 'https://illegalcreed.github.io/llm-sanguo/',
  lumideck: 'https://lumideck.illegalscreed.cn/',
  quiz: 'https://quiz.illegalscreed.cn/',
};

const series = 'https://dev.to/illegal/series/45274';

const posts = {
  one: 'https://dev.to/illegal/agents-arent-amnesiac-they-cant-find-the-entry-point-documentation-layers-for-large-projects-53pk',
  two: 'https://dev.to/illegal/make-the-agent-read-only-what-it-should-documentation-routing-2-450d',
  three: 'https://dev.to/illegal/give-every-document-exactly-one-place-documentation-addressing-3-1oih',
  four: 'https://dev.to/illegal/keep-documents-from-rotting-the-document-lifecycle-in-the-agent-era-4-14m8',
  quicksort: 'https://dev.to/illegal/see-quick-sort-partitioning-one-step-at-a-time-f9i',
};

export const en: Copy = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  title: 'Xu Zhang — Front-end engineer',
  description:
    'Xu Zhang (IllegalCreed) is a front-end engineer building open-source side projects. Writing software since March 2011, .NET at first and the web since 2016.',
  home: '/',
  otherLocale: { label: '中文', href: '/zh/', lang: 'zh-Hans' },
  skip: 'Skip to content',
  themeToDark: 'Switch to dark theme',
  themeToLight: 'Switch to light theme',
  newTab: 'opens in a new tab',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Writing', href: '#writing' },
    { label: 'Résumé', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
  mark: 'Xu Zhang',
  roman: '张旭',
  kicker: 'IllegalCreed · Beijing',
  lede: 'Front-end engineer building open-source side projects.',
  facts: [
    { label: 'Since', value: 'March 2011' },
    { label: 'At first', value: '.NET' },
    { label: 'Front-end', value: 'Since 2016' },
  ],
  profiles: [
    { label: 'GitHub', href: profiles.github },
    { label: 'dev.to', href: profiles.devto },
    { label: 'Notes', href: profiles.notes },
  ],
  workKicker: '01',
  workTitle: 'Work',
  workIntro: 'Public projects. The short descriptions come from each repository, not from a press kit.',
  demo: 'Demo',
  source: 'Repository',
  featured: [
    {
      id: 'type-pal',
      title: 'type-pal',
      wide: true,
      description:
        'A from-scratch TypeScript remake of the 1995 RPG Chinese Paladin (仙剑奇侠传). The main story can be finished in the browser, and a visual editor is underway. Unofficial fan project, made for learning.',
      imageAlt: 'Visual editor and in-editor play preview, from the type-pal README.',
      demo: demos.typePal,
      repo: repos.typePal,
    },
    {
      id: 'algorithms',
      title: 'algorithms-visualization',
      description:
        'Step-through animations for 92 data structures and algorithms. Seventy-seven algorithm pages replay one step at a time, with TypeScript, Python, Go, and Rust highlighted on the same line.',
      imageAlt: 'Home page of the algorithm visualizer, from the repository README.',
      demo: demos.algorithms,
      repo: repos.algorithms,
    },
    {
      id: 'llm-sanguo',
      title: 'llm-sanguo',
      description:
        'A static page that seats large language models as Romance of the Three Kingdoms XIV officers, using an Artificial Analysis snapshot and a published weighting method.',
      imageAlt: 'LLM Sanguo overview, with the title and officer cards, from the repository README.',
      demo: demos.sanguo,
      repo: repos.sanguo,
    },
    {
      id: 'agent-doc',
      title: 'agent-doc-architecture',
      description:
        'Documentation treated as a routing system for large projects whose first reader is an AI agent. The repository includes the L0–L3 model and an agent-first-docs skill you can copy into another project.',
      figure: 'layers',
      repo: repos.docs,
    },
    {
      id: 'skyfire',
      title: 'skyfire-1943',
      description:
        'An original air-combat prototype in three views: side-scrolling, top-down, and a pseudo-3D chase. The name nods to 1943, Salamander, and Sky Destroyer. It does not use their ROMs, artwork, or music. Playable research build; gameplay screenshots are not in the public repository.',
      figure: 'views',
      repo: repos.skyfire,
    },
  ],
  layers: [
    { id: 'L0', text: 'Resident rules and the routing table. Loaded every session, and kept short.' },
    { id: 'L1', text: 'One spec for the kind of work, read before starting.' },
    { id: 'L2', text: 'The module or change: a plan with status and a replacement link.' },
    { id: 'L3', text: 'Evidence. Reports and audits, never the entry point.' },
  ],
  layersNote: 'The model, from the repository README.',
  views: [
    { id: '01', name: 'Side-scrolling', ref: 'Salamander' },
    { id: '02', name: 'Top-down', ref: '1943' },
    { id: '03', name: 'Chase', ref: 'Sky Destroyer' },
  ],
  viewsNote: 'Three views in one original prototype.',
  moreKicker: 'Also',
  moreTitle: 'Smaller projects',
  more: [
    {
      title: 'LumiDeck',
      description:
        'An AI slide studio: start a deck and edit it in conversation. The public repository is named big-ppt. The live workspace asks you to sign in.',
      links: [
        { label: 'Live', href: demos.lumideck },
        { label: 'Repository', href: repos.lumideck },
      ],
    },
    {
      title: 'IllegalCreed Quiz',
      description:
        'A Vue, NestJS, and MySQL quiz application for practicing developer questions by topic. Public repository: Quiz-monorepo.',
      links: [
        { label: 'Live', href: demos.quiz },
        { label: 'Repository', href: repos.quiz },
      ],
    },
    {
      title: 'ai-network-guard',
      description:
        'A macOS menu-bar tool that checks the network exit seen by Claude Code, ChatGPT, and other overseas AI agents, and notifies you when that exit looks inconsistent.',
      links: [{ label: 'Repository', href: repos.guard }],
    },
    {
      title: 'content-studio',
      description:
        'A local-first toolkit for producing articles, images, and video across projects, with an agent plugin and a Vue workbench. Channel credentials stay outside this repository.',
      links: [{ label: 'Repository', href: repos.studio }],
    },
    {
      title: 'marketing-ops',
      description:
        'Local, credential-isolated campaign publishing and feedback collection. Platform secrets stay in the macOS Keychain; the agent sees project policy, not credentials.',
      links: [{ label: 'Repository', href: repos.marketing }],
    },
    {
      title: 'Programmer roadmap',
      description:
        'A maintained knowledge base, separate from this site: notes from web foundations through frontend, backend, databases, systems, security, DevOps, and architecture.',
      links: [
        { label: 'Notes', href: profiles.notes },
        { label: 'Repository', href: repos.roadmap },
      ],
    },
  ],
  writingKicker: '02',
  writingTitle: 'Writing',
  seriesTitle: 'Agent-first Docs',
  seriesHref: series,
  seriesIntro: 'A four-part series on dev.to about documentation for large projects in the agent era.',
  posts: [
    {
      title: 'Agents Aren’t Amnesiac — They Can’t Find the Entry Point',
      href: posts.one,
      summary: 'Why an agent seems to forget: it cannot find the entry. A four-layer (L0–L3) model.',
    },
    {
      title: 'Make the Agent Read Only What It Should',
      href: posts.two,
      summary: 'Routing, so a task loads the one document it needs.',
    },
    {
      title: 'Give Every Document Exactly One Place',
      href: posts.three,
      summary: 'Addressing rules, so each document has a single authoritative home.',
    },
    {
      title: 'Keep Documents from Rotting',
      href: posts.four,
      summary: 'A lifecycle for creation, health checks, and archiving.',
    },
  ],
  essayKicker: 'Essay',
  essay: {
    title: 'See Quick Sort partitioning, one step at a time',
    href: posts.quicksort,
    summary:
      'Quick Sort is easy to summarize: choose a pivot, partition, and repeat. Following one partition is harder. A short walk through the visualizer.',
  },
  resumeKicker: '03',
  resumeTitle: 'Résumé',
  roles: [
    {
      when: 'Apr 2024 — now',
      title: 'Front-end engineer',
      detail: 'Vue.js interfaces, early wireframes, and internal front-end standards.',
    },
    {
      when: 'Nov 2022 — Mar 2023',
      title: 'Development engineer, Huawei Beijing Research Center',
      detail: 'Intelligent-operations features, from story through regression testing.',
    },
    {
      when: 'Apr 2018 — Jun 2022',
      title: 'Technical partner, 文世科技',
      detail: 'Requirements, architecture, front-end implementation, testing, and deployment across industries.',
    },
    {
      when: 'Oct 2017 — Apr 2018',
      title: 'Front-end engineer, 学格科技',
      detail: 'Front-end for an online video learning product.',
    },
    {
      when: 'Sep 2016 — Sep 2017',
      title: 'Front-end engineer, 迪殊科技',
      detail: 'The move into web front-end: Vue, React Native, and WeChat mini programs.',
    },
    {
      when: 'Mar 2011 — Sep 2016',
      title: 'Project department manager, 数字冰雹',
      detail: 'Development and project management with .NET, including WPF, WCF, and ASP.NET MVC.',
    },
    {
      when: 'Oct 2010 — Mar 2011',
      title: 'Intern, 方正电子',
      detail: 'Delphi.',
    },
  ],
  education: {
    when: '2007 — 2011',
    title: 'Bachelor’s degree, Computer Science and Technology',
    detail: 'Beijing University of Technology (北京工业大学).',
  },
  skillsLabel: 'In use',
  skills: 'HTML, CSS, JavaScript, Vue, TypeScript, React, Node.js. Earlier: C# and WPF.',
  contactKicker: '04',
  contactTitle: 'Contact',
  contactIntro: 'GitHub is the best place to start. The email below is the one already published on the CV.',
  contacts: [
    { label: 'GitHub', href: profiles.github },
    { label: 'dev.to', href: profiles.devto },
    { label: 'illegals0001@gmail.com', href: profiles.email },
    { label: 'CV', href: profiles.cv },
  ],
  footerNote: 'Long-form notes stay at illegalscreed.cn. This page is the personal site.',
  footerRights: 'Xu Zhang',
};

export const zh: Copy = {
  locale: 'zh',
  htmlLang: 'zh-Hans',
  ogLocale: 'zh_CN',
  title: '张旭 — 前端工程师',
  description:
    '张旭（IllegalCreed），前端工程师，业余做开源项目。2011 年 3 月开始写程序，起初是 .NET，2016 年起做前端。',
  home: '/zh/',
  otherLocale: { label: 'EN', href: '/', lang: 'en' },
  skip: '跳到正文',
  themeToDark: '切换到深色',
  themeToLight: '切换到浅色',
  newTab: '在新标签页打开',
  nav: [
    { label: '作品', href: '#work' },
    { label: '文章', href: '#writing' },
    { label: '简历', href: '#resume' },
    { label: '联系', href: '#contact' },
  ],
  mark: '张旭',
  roman: 'Xu Zhang',
  kicker: 'IllegalCreed · 北京',
  lede: '前端工程师，业余做开源项目。',
  facts: [
    { label: '开始', value: '2011 年 3 月' },
    { label: '起初', value: '.NET' },
    { label: '前端', value: '2016 年起' },
  ],
  profiles: [
    { label: 'GitHub', href: profiles.github },
    { label: 'dev.to', href: profiles.devto },
    { label: '笔记', href: profiles.notes },
  ],
  workKicker: '01',
  workTitle: '作品',
  workIntro: '公开项目。下面的短介绍来自各仓库的 README，没有另编数字。',
  demo: '演示',
  source: '仓库',
  featured: [
    {
      id: 'type-pal',
      title: 'type-pal',
      wide: true,
      description:
        '用 TypeScript 从零重写 1995 年的《仙剑奇侠传》。主线可以在浏览器里通关，可视化编辑器还在做。非官方粉丝作品，用来学习。',
      imageAlt: 'type-pal README 中的可视化编辑器与编辑器内试玩画面。',
      demo: demos.typePal,
      repo: repos.typePal,
    },
    {
      id: 'algorithms',
      title: 'algorithms-visualization',
      description:
        '92 个数据结构与算法的逐步动画。其中 77 个算法页可以单步回放，并与 TypeScript、Python、Go、Rust 代码逐行同步高亮。',
      imageAlt: '算法可视化站首页，取自仓库 README。',
      demo: demos.algorithms,
      repo: repos.algorithms,
    },
    {
      id: 'llm-sanguo',
      title: 'llm-sanguo',
      description:
        '静态页面。把 Artificial Analysis 的模型评测快照和《三国志14》的武将数值放在一起，按公开的加权方法给大模型排座位。',
      imageAlt: '大模型三国志总览，标题和武将卡，取自仓库 README。',
      demo: demos.sanguo,
      repo: repos.sanguo,
    },
    {
      id: 'agent-doc',
      title: 'agent-doc-architecture',
      description:
        '把大型项目的文档当成给 AI agent 用的路由系统。仓库里有 L0–L3 模型和一份可以拷到其他项目的 agent-first-docs skill。',
      figure: 'layers',
      repo: repos.docs,
    },
    {
      id: 'skyfire',
      title: 'skyfire-1943',
      description:
        '原创的三视角空战原型：横版、俯视，以及伪 3D 追尾。名字致敬《1943》《沙罗曼蛇》和《Sky Destroyer》，不使用这些作品的 ROM、图像或音乐。可玩的研究版本；公开仓库里没有对局截图。',
      figure: 'views',
      repo: repos.skyfire,
    },
  ],
  layers: [
    { id: 'L0', text: '常驻规则和路由表。每次会话都加载，必须短。' },
    { id: 'L1', text: '按工作类型只读一份规范，动手之前读。' },
    { id: 'L2', text: '模块或变更：带状态和替代链接的计划。' },
    { id: 'L3', text: '证据。测试报告和审计，从不作为入口。' },
  ],
  layersNote: '模型来自仓库 README。',
  views: [
    { id: '01', name: '横版', ref: '沙罗曼蛇' },
    { id: '02', name: '俯视', ref: '1943' },
    { id: '03', name: '追尾', ref: 'Sky Destroyer' },
  ],
  viewsNote: '一个原创原型里的三种视角。',
  moreKicker: '其他',
  moreTitle: '较小的项目',
  more: [
    {
      title: 'LumiDeck',
      description: '用对话生成和修改演示文稿。公开仓库的名字是 big-ppt。在线工作台需要登录。',
      links: [
        { label: '在线', href: demos.lumideck },
        { label: '仓库', href: repos.lumideck },
      ],
    },
    {
      title: 'IllegalCreed Quiz',
      description: '用 Vue、NestJS 和 MySQL 做的问答应用，按主题练习开发者题目。公开仓库是 Quiz-monorepo。',
      links: [
        { label: '在线', href: demos.quiz },
        { label: '仓库', href: repos.quiz },
      ],
    },
    {
      title: 'ai-network-guard',
      description: 'macOS 菜单栏工具，检查 Claude Code、ChatGPT 和其他境外 AI agent 看到的网络出口是否一致，不一致时通知你。',
      links: [{ label: '仓库', href: repos.guard }],
    },
    {
      title: 'content-studio',
      description: '本地优先的跨项目内容与视频生产工具，包含 agent plugin 和 Vue 工作台。渠道凭证不在这个仓库里。',
      links: [{ label: '仓库', href: repos.studio }],
    },
    {
      title: 'marketing-ops',
      description: '本地的多渠道发布和反馈收集。平台密钥留在 macOS 钥匙串里，agent 只能看到项目策略，看不到凭证。',
      links: [{ label: '仓库', href: repos.marketing }],
    },
    {
      title: '程序员路线图',
      description: '和本站分开的知识库：从 Web 基础、前端、后端、数据库、系统、安全、DevOps 到架构的长期笔记。',
      links: [
        { label: '笔记', href: profiles.notes },
        { label: '仓库', href: repos.roadmap },
      ],
    },
  ],
  writingKicker: '02',
  writingTitle: '文章',
  seriesTitle: 'Agent-first Docs',
  seriesHref: series,
  seriesIntro: '在 dev.to 上的四篇系列，写大型项目在 agent 时代怎么组织文档。',
  posts: [
    {
      title: 'Agent 不是健忘，而是找不到入口',
      href: posts.one,
      summary: 'agent 看起来会忘事，是因为找不到入口。一个四层（L0–L3）模型。',
    },
    {
      title: '让 agent 只读它该读的',
      href: posts.two,
      summary: '路由：一个任务只加载它需要的那一份文档。',
    },
    {
      title: '每份文档只有一个位置',
      href: posts.three,
      summary: '寻址规则，让每份文档有唯一的权威副本。',
    },
    {
      title: '别让文档腐烂',
      href: posts.four,
      summary: '创建、体检和归档的生命周期。',
    },
  ],
  essayKicker: '短文',
  essay: {
    title: '一步一步看快速排序的划分',
    href: posts.quicksort,
    summary: '快速排序概括起来很短：选基准、划分、重复。看清一次划分难得多。一篇配合可视化站的短文。',
  },
  resumeKicker: '03',
  resumeTitle: '简历',
  roles: [
    {
      when: '2024.04 — 今',
      title: '前端工程师',
      detail: '用 Vue.js 做界面，参与前期框图，并编写内部前端规范。',
    },
    {
      when: '2022.11 — 2023.03',
      title: '开发工程师，华为北研所',
      detail: '智能运维功能，从 story 做到回归测试。',
    },
    {
      when: '2018.04 — 2022.06',
      title: '技术合伙人，文世科技',
      detail: '需求、架构、前端实现、测试和部署，项目跨多个行业。',
    },
    {
      when: '2017.10 — 2018.04',
      title: '前端工程师，学格科技',
      detail: '在线视频学习产品的前端。',
    },
    {
      when: '2016.09 — 2017.09',
      title: '前端工程师，迪殊科技',
      detail: '从这里转向 Web 前端，涉及 Vue、React Native 和微信小程序。',
    },
    {
      when: '2011.03 — 2016.09',
      title: '项目部经理，数字冰雹',
      detail: '用 .NET 做开发和项目管理，包括 WPF、WCF、ASP.NET MVC。',
    },
    {
      when: '2010.10 — 2011.03',
      title: '实习生，方正电子',
      detail: 'Delphi。',
    },
  ],
  education: {
    when: '2007 — 2011',
    title: '学士，计算机科学与技术',
    detail: '北京工业大学。',
  },
  skillsLabel: '在用',
  skills: 'HTML、CSS、JavaScript、Vue、TypeScript、React、Node.js。更早是 C# 和 WPF。',
  contactKicker: '04',
  contactTitle: '联系',
  contactIntro: '优先从 GitHub 开始。下面的邮箱是简历页上已经公开的那个。',
  contacts: [
    { label: 'GitHub', href: profiles.github },
    { label: 'dev.to', href: profiles.devto },
    { label: 'illegals0001@gmail.com', href: profiles.email },
    { label: '简历', href: profiles.cv },
  ],
  footerNote: '长笔记仍在 illegalscreed.cn。这里是个人站。',
  footerRights: '张旭',
};

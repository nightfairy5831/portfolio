'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'cn'

const en = {
  nav: { about: 'About', skills: 'Skills', services: 'Services', work: 'Work', experience: 'Experience', contact: 'Contact' },
  hero: {
    available: 'Available for Projects',
    subtitle: 'Senior Web & Mobile Developer | DevOps & SaaS Expert',
    desc1: '8 years of shipping production systems across e-commerce, SaaS, and real-time platforms. ',
    descBold: '40+ projects delivered',
    desc2: ' for startups and enterprises worldwide.',
    cta1: 'Get in Touch', cta2: 'View Work',
    years: 'Years', projects: 'Projects', users: 'Users Served', uptime: 'Uptime', scroll: 'Scroll',
  },
  about: {
    sub: 'About', title: 'About Me',
    p1: 'Senior Full-Stack Engineer with ', p1b: '8+ years', p1e: ' of hands-on experience shipping production systems for startups and mid-sized companies. I cover the full development lifecycle, from architecture and implementation to deployment and optimization.',
    p2: 'Core stack: React, Laravel, Node.js, React Native, Python, AWS. Comfortable taking over partially-built systems and delivering improvements, performance tuning, and payment workflows.',
    name: 'Name', exp: 'Experience', email: 'Email', loc: 'Location', spec: 'Specialty', proj: 'Projects',
    contact: 'Contact', viewProj: 'View Projects',
    badge1: '40+ Projects', badge2: '0 Security Issues',
  },
  skills: { sub: 'Expertise', title: 'Technical Skills', additional: 'Additional Technologies' },
  services: {
    sub: 'Services', title: 'What I Build',
    s1: 'Web Applications', s1d: 'Scalable web systems with Laravel and React.',
    s2: 'Mobile Apps', s2d: 'Cross-platform apps with React Native & Flutter.',
    s3: 'E-commerce', s3d: 'End-to-end stores with payment integration.',
    s4: 'AI & Automation', s4d: 'Intelligent automation with N8n and AI agents.',
    platforms: 'E-commerce Platform Experience',
    items: {
      s1: ['Laravel & React Full Stack', 'RESTful API Development', 'Database Design & Optimization', 'Real-time Features & WebSocket'],
      s2: ['React Native / Flutter', 'Offline Sync Capability', 'Push Notifications', 'Maps & Location Services'],
      s3: ['Full Website Creation', 'Payment Gateways', 'Custom Checkout Flow', 'Backup & Migration'],
      s4: ['AI Chatbots & Agents', 'N8n Workflows', 'WhatsApp API Bots', 'ML Integration'],
    },
  },
  portfolio: { sub: 'Portfolio', title: 'Featured Projects', all: 'All', fullStack: 'Full Stack', ecommerce: 'E-commerce', mobile: 'Mobile', ai: 'AI', showAll: 'Show All', showing: 'Showing', of: 'of', viewDetails: 'View Details', keyFeatures: 'Key Features', source: 'Source: Private' },
  projects: {
    p1: { title: 'Accessory Shop', sub: 'E-commerce Web App', desc: 'Production-ready e-commerce platform for an accessories brand with fast shopping experience, clean UI, and a backend designed for stability.', f: ['Product browsing & cart/checkout', 'Secure payment integration', 'Order management & admin panel', 'AWS deployment with NGINX'] },
    p2: { title: 'Real Estate Website', sub: 'Property Listing Platform', desc: 'Real estate web platform allowing users to browse, search, and inquire about residential and commercial properties with agent management.', f: ['Property search & filter system', 'Agent/admin management', 'Inquiry & contact system', 'API-driven architecture'] },
    p3: { title: 'PEGASUS CLINIC', sub: 'Medical Official Website', desc: 'Official website for a cosmetic surgery and dermatology clinic in Japan. Focus on clarity, reliability, and accessibility for patients.', f: ['Patient-facing service pages', 'Inquiry submission system', 'Responsive medical UI', 'SEO-optimized content'] },
    p4: { title: 'Booking System', sub: 'Pet Care Management App', desc: 'Web-based booking system for a pet care service. Customers schedule grooming, boarding, and daycare with conflict-free appointment management.', f: ['Appointment scheduling', 'Staff management dashboard', 'Conflict-free booking logic', 'CI/CD deployment pipeline'] },
    p5: { title: 'Fashion Store', sub: 'Apparel E-commerce Platform', desc: 'E-commerce platform for a fashion brand with clean shopping experience, fast navigation, and scalable backend for seasonal campaigns.', f: ['Product catalog & categories', 'Cart & checkout flow', 'Order management backend', 'Campaign-ready architecture'] },
    p6: { title: 'TuruLav', sub: 'Social & Dating Application', desc: 'Social dating application designed to help users discover, connect, and communicate with focus on meaningful interactions and privacy.', f: ['User matching algorithm', 'Real-time messaging', 'Privacy & moderation controls', 'Simple onboarding flow'] },
    p7: { title: 'AI Developer Tool', sub: 'Code Generation Platform', desc: 'AI-powered code generation platform helping developers generate, refine, and understand code based on natural language input.', f: ['Natural language to code', 'Code refactoring assistant', 'Code explanation engine', 'Multi-language support'] },
    p8: { title: 'Axiona AI/ML', sub: 'Technology Showcase Website', desc: 'Modern AI and Machine Learning website template for innovation-driven technology brands with clean layout and flexible content structures.', f: ['AI service showcase pages', 'Interactive data visualizations', 'Responsive tech-focused UI', 'Content management system'] },
    p9: { title: 'AI Chat App', sub: 'Mobile Conversational AI', desc: 'AI-powered chat application for real-time interaction with an intelligent conversational assistant on iOS and Android.', f: ['Real-time AI conversations', 'Content generation', 'Cross-platform (iOS & Android)', 'Task assistance workflows'] },
    p10: { title: 'Island Game', sub: 'Cross-platform Mobile Game', desc: 'Mobile game application for iOS and Android with cross-platform development using React Native and Express.js backend.', f: ['Cross-platform gameplay', 'Real-time game state sync', 'Backend game logic', 'In-app progression system'] },
    p11: { title: 'Real Estate App', sub: 'Property App + WhatsApp', desc: 'Real estate mobile application with WhatsApp integration for property inquiries and direct agent communication.', f: ['Property browsing & search', 'WhatsApp API integration', 'Agent communication system', 'iOS & Android support'] },
    p12: { title: 'SeaGames Platform', sub: 'Real-time Multiplayer', desc: 'Multiplayer gaming platform with real-time communication using Socket.IO for live interactions and competitive gameplay.', f: ['Real-time game state sync', 'Live player interactions', 'Competitive ranking system', 'AWS scalable infrastructure'] },
  },
  exp: { sub: 'Journey', title: 'Work Experience', present: 'Present' },
  edu: { sub: 'Education', title: 'Academic Background', degree: "Bachelor's in Computer Science", uni: 'Tokyo University of Technology', date: 'April 2014 - March 2018', coursework: 'Key Coursework', achievements: 'Achievements', honors: 'Graduated with honors', award: 'Excellence award for web application development' },
  contact: { sub: 'Contact', title: "Let's Work Together", desc: "Have a project in mind? I help startups and businesses turn ideas into production-ready systems. Let's talk.", loc: 'Remote Worldwide', cta: 'Get in Touch' },
  footer: { title: 'Full Stack & AI Automation Engineer', email: 'Email', rights: 'All rights reserved.' },
}

const cn: typeof en = {
  nav: { about: '关于', skills: '技能', services: '服务', work: '作品', experience: '经历', contact: '联系' },
  hero: {
    available: '可接项目',
    subtitle: '高级全栈工程师 | DevOps & SaaS 专家',
    desc1: '8年生产系统开发经验，涵盖电商、SaaS和实时平台。',
    descBold: '已交付40+项目',
    desc2: '，服务全球初创企业和中型公司。',
    cta1: '联系我', cta2: '查看作品',
    years: '年经验', projects: '项目', users: '服务用户', uptime: '可用率', scroll: '向下',
  },
  about: {
    sub: '关于', title: '关于我',
    p1: '资深全栈工程师，拥有', p1b: '8年以上', p1e: '实战经验，为初创企业和中型公司交付生产系统。涵盖完整开发周期：从架构设计、开发实现到部署优化。',
    p2: '核心技术栈：React、Laravel、Node.js、React Native、Python、AWS。擅长接手半成品系统并进行改进、性能调优和支付流程开发。',
    name: '姓名', exp: '经验', email: '邮箱', loc: '地点', spec: '专长', proj: '项目',
    contact: '联系', viewProj: '查看项目',
    badge1: '40+ 项目', badge2: '0 安全事故',
  },
  skills: { sub: '专业技能', title: '技术栈', additional: '其他技术' },
  services: {
    sub: '服务', title: '我的服务',
    s1: 'Web应用开发', s1d: '基于Laravel和React构建可扩展Web系统。',
    s2: '移动应用开发', s2d: '使用React Native和Flutter开发跨平台应用。',
    s3: '电商解决方案', s3d: '完整电商平台，集成支付系统。',
    s4: 'AI与自动化', s4d: '基于N8n和AI代理的智能自动化。',
    platforms: '电商平台经验',
    items: {
      s1: ['Laravel & React 全栈', 'RESTful API 开发', '数据库设计与优化', '实时功能 & WebSocket'],
      s2: ['React Native / Flutter', '离线同步', '推送通知', '地图与定位服务'],
      s3: ['完整网站搭建', '支付网关集成', '自定义结账流程', '备份与迁移'],
      s4: ['AI 聊天机器人', 'N8n 工作流', 'WhatsApp API 机器人', 'ML 模型集成'],
    },
  },
  portfolio: { sub: '作品集', title: '精选项目', all: '全部', fullStack: '全栈', ecommerce: '电商', mobile: '移动端', ai: 'AI', showAll: '显示全部', showing: '显示', of: '/', viewDetails: '查看详情', keyFeatures: '核心功能', source: '源码：私有' },
  projects: {
    p1: { title: '饰品商城', sub: '电商Web应用', desc: '为饰品品牌打造的生产级电商平台，快速购物体验、简洁UI和稳定后端架构。', f: ['商品浏览与购物车/结账', '安全支付集成', '订单管理与后台面板', 'AWS + NGINX部署'] },
    p2: { title: '房产网站', sub: '房产信息平台', desc: '房产Web平台，用户可浏览、搜索和咨询住宅及商业房产，支持经纪人管理。', f: ['房产搜索与筛选', '经纪人/管理员管理', '在线咨询系统', 'API驱动架构'] },
    p3: { title: 'PEGASUS诊所', sub: '医疗官网', desc: '日本整形外科与皮肤科诊所官方网站，注重清晰度、可靠性和患者无障碍访问。', f: ['患者服务页面', '在线咨询提交', '响应式医疗UI', 'SEO优化内容'] },
    p4: { title: '预约系统', sub: '宠物护理管理应用', desc: '宠物护理服务的Web预约系统，客户可预约美容、寄养和日托，无冲突排程。', f: ['预约排程管理', '员工管理面板', '无冲突预约逻辑', 'CI/CD部署流水线'] },
    p5: { title: '时装商城', sub: '服装电商平台', desc: '时装品牌电商平台，简洁购物体验、快速导航，可扩展后端支持季节性活动。', f: ['商品目录与分类', '购物车与结账流程', '订单管理后端', '活动就绪架构'] },
    p6: { title: 'TuruLav', sub: '社交约会应用', desc: '社交约会应用，帮助用户发现、连接和交流，注重有意义的互动和隐私保护。', f: ['用户匹配算法', '实时消息通信', '隐私与审核控制', '简洁注册流程'] },
    p7: { title: 'AI开发工具', sub: '代码生成平台', desc: 'AI驱动的代码生成平台，帮助开发者基于自然语言输入生成、优化和理解代码。', f: ['自然语言转代码', '代码重构助手', '代码解释引擎', '多语言支持'] },
    p8: { title: 'Axiona AI/ML', sub: '科技展示网站', desc: '面向创新型科技品牌的现代AI和机器学习网站模板，简洁布局和灵活内容结构。', f: ['AI服务展示页面', '交互式数据可视化', '响应式科技UI', '内容管理系统'] },
    p9: { title: 'AI聊天应用', sub: '移动端对话AI', desc: 'AI驱动的聊天应用，在iOS和Android上与智能对话助手进行实时交互。', f: ['实时AI对话', '内容生成', '跨平台(iOS & Android)', '任务辅助工作流'] },
    p10: { title: '岛屿游戏', sub: '跨平台移动游戏', desc: '面向iOS和Android的移动游戏，使用React Native和Express.js后端进行跨平台开发。', f: ['跨平台游戏体验', '实时游戏状态同步', '后端游戏逻辑', '应用内进度系统'] },
    p11: { title: '房产App', sub: '房产 + WhatsApp', desc: '集成WhatsApp的房产移动应用，用于房产咨询和经纪人直接沟通。', f: ['房产浏览与搜索', 'WhatsApp API集成', '经纪人通信系统', 'iOS & Android支持'] },
    p12: { title: 'SeaGames平台', sub: '实时多人游戏', desc: '使用Socket.IO实时通信的多人游戏平台，支持实时交互和竞技对战。', f: ['实时游戏状态同步', '实时玩家交互', '竞技排名系统', 'AWS可扩展架构'] },
  },
  exp: { sub: '历程', title: '工作经历', present: '至今' },
  edu: { sub: '教育', title: '教育背景', degree: '计算机科学学士', uni: '东京工科大学', date: '2014年4月 - 2018年3月', coursework: '核心课程', achievements: '荣誉成就', honors: '以优异成绩毕业', award: 'Web应用开发优秀奖' },
  contact: { sub: '联系', title: '一起合作', desc: '有项目想法？我帮助初创企业和公司将创意转化为生产级系统。', loc: '远程 / 全球', cta: '联系我' },
  footer: { title: '全栈 & AI自动化工程师', email: '邮箱', rights: '保留所有权利。' },
}

const translations = { en, cn }

const LangContext = createContext<{ lang: Lang; t: typeof en; toggle: () => void }>({
  lang: 'en', t: en, toggle: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang(prev => prev === 'en' ? 'cn' : 'en')
  return <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>{children}</LangContext.Provider>
}

export function useLang() { return useContext(LangContext) }

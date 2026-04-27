'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'cn'

const en = {
  name: 'Max Li',
  nameFirst: 'Max',
  nameLast: 'Li',
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
    p1: { title: 'Accessory Shop', sub: 'E-commerce Web App', desc: 'Production-ready e-commerce platform for an accessories brand, focused on a fast shopping experience, clean UI, and a backend designed for stability and future growth. Comfortable taking over partially-built systems and delivering improvements, bug fixes, performance tuning, and payment/invoice workflows.', f: ['Product browsing, cart & checkout', 'Secure payments & order management', 'Admin panel for daily operations', 'Laravel + React with AWS, MySQL, Redis'] },
    p2: { title: 'Real Estate Website', sub: 'Web Application', desc: 'Real estate web platform that allows users to browse, search, and inquire about residential and commercial properties. Supports agents and administrators in managing listings, images, pricing, and inquiries. Focus on maintainability, performance, and clear frontend/backend separation for future expansion.', f: ['Property browsing, search & inquiries', 'Agent/admin listing management', 'Clear frontend-backend separation', 'React, Laravel, PostgreSQL, DigitalOcean'] },
    p3: { title: 'PEGASUS CLINIC', sub: 'Official Website', desc: 'Official website for a cosmetic surgery and dermatology clinic near Hamamatsu Station, Japan. Designed to be trustworthy and easy-to-use, clearly communicating medical services while making it simple for patients to find information and submit inquiries. Focus on clarity, reliability, and accessibility over heavy visual effects.', f: ['Clear medical service presentation', 'Patient inquiry submission system', 'Accessible & reliable design', 'React, Node.js, Express, HTML, JS'] },
    p4: { title: 'Booking & Management', sub: 'Web Application', desc: 'Web-based booking system for a pet care service allowing customers to schedule grooming, boarding, and daycare. Designed to simplify appointment management for staff while providing pet owners with an easy and reliable booking experience. Focus on usability, data accuracy, and a stable backend handling multiple bookings without conflicts.', f: ['Service scheduling (grooming, boarding, daycare)', 'Staff appointment management', 'Conflict-free multi-booking backend', 'Laravel, React, MySQL, Linux, Nginx, CI/CD'] },
    p5: { title: 'Fashion Store', sub: 'E-commerce Platform', desc: "E-commerce platform for a fashion brand selling women's and men's apparel. Clean shopping experience with fast navigation, clear product presentation, and an efficient backend for product and order management. Designed with scalability and maintainability for seasonal campaigns and future growth.", f: ['Clean shopping & fast navigation', 'Clear product presentation', 'Product & order management backend', 'React, JavaScript, Responsive Design, PHP'] },
    p6: { title: 'TuruLav', sub: 'Social & Dating Mobile/Web App', desc: 'Social dating application for users to discover, connect, and communicate in a safe environment. Focuses on meaningful interactions, simple onboarding, and reliable real-time communication with strong privacy and moderation controls. Designed to scale gradually while maintaining smooth UX, suitable for subscriptions, in-app purchases, and mobile expansion.', f: ['Meaningful interactions & safe environment', 'Real-time communication & simple onboarding', 'Privacy & moderation controls', 'React, JavaScript, WordPress, Android'] },
    p7: { title: 'AI-Powered Developer Tool', sub: 'Code Generation Platform', desc: 'AI-powered code generation platform to help developers quickly generate, refine, and understand code based on natural language input. Focuses on improving productivity by reducing repetitive tasks while keeping output readable, maintainable, and easy to modify. Emphasizes practical use cases: scaffolding, refactoring assistance, and code explanation.', f: ['Natural language code generation', 'Scaffolding & refactoring assistance', 'Code explanation & understanding', 'React, Django, Python, ML, AI'] },
    p8: { title: 'Axiona AI/ML', sub: 'Technology Website', desc: 'Modern AI and Machine Learning website template built for innovation-driven technology brands. Designed to help AI startups, ML platforms, and data-focused companies present their services, products, and technical capabilities with clarity and confidence. Clean layout, strong visual hierarchy, and flexible content structures for a wide range of AI-related use cases.', f: ['AI startup & ML platform showcase', 'Clean layout & strong visual hierarchy', 'Flexible content structures', 'Machine Learning, React, Python, Chatbot'] },
    p9: { title: 'AI-Powered Chat App', sub: 'Conversational AI Application', desc: 'AI-powered chat application allowing users to interact with an intelligent conversational assistant in real time. Designed for practical use cases: answering questions, generating content, assisting with tasks, and supporting customer or internal workflows. Focus on simplicity, responsiveness, and reliable AI interaction.', f: ['Real-time AI conversational assistant', 'Content generation & task assistance', 'Cross-platform (Android & iOS)', 'React Native, JavaScript, Chatbot'] },
  },
  exp: { sub: 'Journey', title: 'Work Experience', present: 'Present' },
  contact: { sub: 'Contact', title: "Let's Work Together", desc: "Have a project in mind? I help startups and businesses turn ideas into production-ready systems. Let's talk.", loc: 'Remote Worldwide', cta: 'Get in Touch' },
  footer: { title: 'Full Stack & AI Automation Engineer', email: 'Email', rights: 'All rights reserved.' },
}

const cn: typeof en = {
  name: 'Li Max',
  nameFirst: 'Li',
  nameLast: 'Max',
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
    p1: { title: '饰品商城', sub: '电商Web应用', desc: '为饰品品牌打造的生产级电商平台，注重快速购物体验、简洁UI和面向未来增长的稳定后端。擅长接手半成品系统并进行改进、Bug修复、性能调优和支付/发票工作流。', f: ['商品浏览、购物车与结账', '安全支付与订单管理', '日常运营管理面板', 'Laravel + React, AWS, MySQL, Redis'] },
    p2: { title: '房产网站', sub: 'Web应用', desc: '房产Web平台，用户可浏览、搜索和咨询住宅及商业房产。支持经纪人和管理员管理房源、图片、定价和咨询。注重可维护性、性能以及前后端清晰分离，便于未来扩展。', f: ['房产浏览、搜索与咨询', '经纪人/管理员房源管理', '前后端清晰分离架构', 'React, Laravel, PostgreSQL, DigitalOcean'] },
    p3: { title: 'PEGASUS诊所', sub: '官方网站', desc: '日本滨松站附近整形外科与皮肤科诊所官方网站。设计注重可信赖性和易用性，清晰展示医疗服务，方便患者查找信息和提交咨询。重点在于清晰度、可靠性和无障碍访问。', f: ['清晰的医疗服务展示', '患者咨询提交系统', '无障碍可靠设计', 'React, Node.js, Express, HTML, JS'] },
    p4: { title: '预约管理系统', sub: 'Web应用', desc: '宠物护理服务的Web预约系统，客户可预约美容、寄养和日托。简化员工预约管理，为宠物主人提供便捷可靠的预约体验。注重易用性、数据准确性和稳定后端，支持无冲突多预约处理。', f: ['服务预约（美容、寄养、日托）', '员工预约管理', '无冲突多预约后端', 'Laravel, React, MySQL, Linux, Nginx, CI/CD'] },
    p5: { title: '时装商城', sub: '电商平台', desc: '面向女装和男装的时装品牌电商平台。简洁购物体验、快速导航、清晰商品展示，高效的商品和订单管理后端。注重可扩展性和可维护性，支持季节性活动和未来增长。', f: ['简洁购物与快速导航', '清晰商品展示', '商品与订单管理后端', 'React, JavaScript, 响应式设计, PHP'] },
    p6: { title: 'TuruLav', sub: '社交约会移动/Web应用', desc: '社交约会应用，用户可在安全环境中发现、连接和交流。注重有意义的互动、简洁注册和可靠的实时通信，具备强大的隐私和审核控制。设计支持渐进扩展，适合订阅、应用内购买和移动端扩展。', f: ['有意义的互动与安全环境', '实时通信与简洁注册', '隐私与审核控制', 'React, JavaScript, WordPress, Android'] },
    p7: { title: 'AI开发工具', sub: '代码生成平台', desc: 'AI驱动的代码生成平台，帮助开发者基于自然语言输入快速生成、优化和理解代码。通过减少重复任务提升生产力，同时保持输出可读、可维护、易修改。侧重实用场景：脚手架搭建、重构辅助和代码解释。', f: ['自然语言代码生成', '脚手架搭建与重构辅助', '代码解释与理解', 'React, Django, Python, ML, AI'] },
    p8: { title: 'Axiona AI/ML', sub: '科技网站', desc: '面向创新型科技品牌的现代AI和机器学习网站模板。帮助AI初创企业、ML平台和数据公司清晰自信地展示服务、产品和技术能力。简洁布局、强视觉层次和灵活内容结构，适用于各类AI相关场景。', f: ['AI初创企业与ML平台展示', '简洁布局与强视觉层次', '灵活内容结构', 'Machine Learning, React, Python, Chatbot'] },
    p9: { title: 'AI聊天应用', sub: '对话式AI应用', desc: 'AI驱动的聊天应用，用户可与智能对话助手实时交互。适用于回答问题、生成内容、辅助任务和支持客户/内部工作流等实际场景。注重简洁性、响应速度和可靠的AI交互。', f: ['实时AI对话助手', '内容生成与任务辅助', '跨平台(Android & iOS)', 'React Native, JavaScript, Chatbot'] },
  },
  exp: { sub: '历程', title: '工作经历', present: '至今' },
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

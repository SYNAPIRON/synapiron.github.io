import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Globe, Lock, Server, ArrowRight, CheckCircle, 
  Network, Menu, X, FileJson, 
  FileCheck, Building2, Users, Radio, Activity, Key, Terminal, Code, Cpu,
  Hash, ScanLine, FileKey, Zap, AlertTriangle, Ban, Fingerprint, Map, Navigation, Filter, FileText, Brain, Sparkles, Gavel, Route, Radar, GraduationCap, BookOpen, Lightbulb, Bot, TrendingUp,
  Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, Calendar, MessageSquare, Layers
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// --- 1. Global Styles & Keyframes ---
const GlobalStyles = () => (
  <style>{`
    :root {
      --bg-dark: #020203;
      --accent: #10b981;
      --accent-glow: rgba(16, 185, 129, 0.4);
      --danger: #ef4444;
      --danger-glow: rgba(239, 68, 68, 0.4);
      --ai: #8b5cf6;
      --ai-glow: rgba(139, 92, 246, 0.4);
      --team: #3b82f6;
    }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg-dark); }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
    
    .bg-noise {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    .perspective-grid {
      transform: perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px);
      opacity: 0.3;
      mask-image: linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%);
    }

    .glass-panel {
      background: rgba(10, 10, 10, 0.7);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    }

    @keyframes shimmer {
      0% { transform: translateX(-150%) skewX(12deg); }
      100% { transform: translateX(150%) skewX(12deg); }
    }
    .animate-shimmer { animation: shimmer 8s infinite linear; }

    @keyframes scan-vertical {
      0% { top: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    .animate-scan-vertical { animation: scan-vertical 2s linear infinite; }
    
    /* Neuron Pulse */
    @keyframes pulse-neuron {
      0% { r: 2; opacity: 0.5; }
      50% { r: 4; opacity: 1; }
      100% { r: 2; opacity: 0.5; }
    }
  `}</style>
);

// --- 2. Micro Components ---
const SectionHeader = ({ badge, title, desc, color = "emerald" }) => {
  const getColorClass = (type) => {
    if (color === "emerald") {
      return type === "text" ? "text-emerald-500" : type === "dot" ? "bg-emerald-500" : "bg-emerald-400";
    } else if (color === "cyan") {
      return type === "text" ? "text-cyan-500" : type === "dot" ? "bg-cyan-500" : "bg-cyan-400";
    } else if (color === "blue") {
      return type === "text" ? "text-blue-500" : type === "dot" ? "bg-blue-500" : "bg-blue-400";
    } else if (color === "purple") {
      return type === "text" ? "text-purple-500" : type === "dot" ? "bg-purple-500" : "bg-purple-400";
    }
    return type === "text" ? "text-emerald-500" : type === "dot" ? "bg-emerald-500" : "bg-emerald-400";
  };

  return (
    <div className="mb-10 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-3 max-w-3xl"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${getColorClass("ping")} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${getColorClass("dot")}`}></span>
          </span>
          <span className={`${getColorClass("text")} font-mono text-xs uppercase tracking-[0.2em]`}>{badge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
          {title}
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-white/5 pl-4">
          {desc}
        </p>
      </motion.div>
    </div>
  );
};

// --- 3. Main Sections ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-4 px-4 ${scrolled ? 'pt-2' : 'pt-6'}`}>
      <div className={`w-full max-w-7xl flex items-center justify-between px-6 py-4 rounded-full border transition-all duration-500 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/10 shadow-2xl' : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-black rotate-45"></div>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">SYNAPIRON</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {['Protocol', 'Network', 'Policy', 'Smart', 'Use Cases', 'Team', 'Contact'].map((item) => (
            <a key={item} href={item === 'Contact' ? '#contact-form' : `#${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{item === 'Contact' ? 'Contact Us' : item}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-xs font-mono text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 rounded hover:bg-emerald-500/10 transition-colors">DOCS_v0.2</button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">Access</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020203]">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] overflow-hidden pointer-events-none">
        <div className="perspective-grid absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ opacity }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 rounded-full">
            <Activity size={12} /> L4.5 ASSURANCE LAYER
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.95] tracking-tighter">
            TRUST & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-glow">COMPLIANCE</span> <br/>
            IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-glow">TRANSIT</span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            From static encryption to <strong>dynamic sovereignty</strong>. <br/>
            Synapiron builds the verifiable, <strong className="text-emerald-400">compliant</strong> infrastructure for cross-border data circulation.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-lg font-bold flex items-center gap-2 hover:bg-slate-200 transition-all">Start Building <ArrowRight size={16} /></button>
            <button className="px-8 py-4 text-white border border-white/10 rounded-lg font-medium hover:bg-white/5 transition-all">Read Whitepaper</button>
          </div>
        </motion.div>
        <motion.div style={{ y: y1 }} className="relative hidden lg:flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* 外层旋转轨道 */}
            {[100, 85, 70, 55].map((size, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/10"
                style={{ width: `${size}%`, height: `${size}%` }}
                animate={{ 
                  rotate: i % 2 === 0 ? 360 : -360,
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  rotate: { duration: 20 + i * 8, ease: "linear", repeat: Infinity }, 
                  scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* 轨道上的节点 */}
                {[0, 120, 240].map((angle, j) => (
                  <motion.div
                    key={j}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transformOrigin: `50% ${size * 0.5}%`,
                      rotate: angle
                    }}
                    animate={{ rotate: angle + (i % 2 === 0 ? 360 : -360) }}
                    transition={{ duration: 20 + i * 8, ease: "linear", repeat: Infinity }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981] relative"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        boxShadow: [
                          "0 0 20px #10b981",
                          "0 0 40px #10b981, 0 0 60px #10b981",
                          "0 0 20px #10b981"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                    >
                      {/* 粒子尾迹 */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-emerald-500/30 rounded-full"
                        animate={{ scale: [0, 2, 0], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                      />
                    </motion.div>
              </motion.div>
            ))}
              </motion.div>
            ))}
            
            {/* 中心核心节点 - 3D 效果 */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-20"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="w-full h-full bg-[#0A0A0A] border-2 border-emerald-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_150px_rgba(16,185,129,0.4)] relative overflow-hidden"
                animate={{ 
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotateY: { duration: 20, ease: "linear", repeat: Infinity },
                  rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* 内部旋转方块 */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-90"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ 
                    rotate: [0, 360],
                    rotateX: [0, 180, 360],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{ 
                    rotate: { duration: 8, ease: "linear", repeat: Infinity },
                    rotateX: { duration: 6, ease: "linear", repeat: Infinity },
                    rotateY: { duration: 10, ease: "linear", repeat: Infinity }
                  }}
                />
                
                {/* 脉冲光效 */}
                <motion.div
                  className="absolute inset-0 bg-emerald-500/20 rounded-2xl"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* 连接线动画 */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.g
                  key={`line-${i}`}
                  style={{ transform: `rotate(${angle}deg)` }}
                  transformOrigin="50% 50%"
                >
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="75%"
                    y2="50%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity={0.3}
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.g>
              ))}
            </svg>

            {/* 浮动数据包粒子 */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981] z-10"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0
                }}
                animate={{
                  x: [
                    "50%",
                    `${50 + (Math.cos(i * 45 * Math.PI / 180) * 30)}%`,
                    `${50 + (Math.cos((i * 45 + 180) * Math.PI / 180) * 30)}%`,
                    "50%"
                  ],
                  y: [
                    "50%",
                    `${50 + (Math.sin(i * 45 * Math.PI / 180) * 30)}%`,
                    `${50 + (Math.sin((i * 45 + 180) * Math.PI / 180) * 30)}%`,
                    "50%"
                  ],
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* 信息面板 - 多个 */}
            <motion.div 
              className="absolute top-[15%] right-0 glass-panel p-3 rounded-lg font-mono text-[10px] text-emerald-400 border-l-2 border-emerald-500 z-30 backdrop-blur-md bg-black/40"
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { delay: 0.5 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div>&gt; SESSION_ID: 0x8F2A...</div>
              </div>
              <div className="text-slate-400">Path Verified: 14ms</div>
              <div className="text-cyan-400 mt-1">✓ Compliance: PASS</div>
            </motion.div>

            <motion.div 
              className="absolute bottom-[20%] left-0 glass-panel p-3 rounded-lg font-mono text-[10px] text-cyan-400 border-l-2 border-cyan-500 z-30 backdrop-blur-md bg-black/40"
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 5, 0]
              }}
              transition={{ 
                opacity: { delay: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <div>&gt; DATA_FLOW: ACTIVE</div>
          </div>
              <div className="text-slate-400">Encryption: AES-256</div>
              <div className="text-emerald-400 mt-1">✓ Policy: ENFORCED</div>
            </motion.div>

            {/* AI 神经网络节点 - 单个低调辅助元素 */}
            <motion.div
              className="absolute z-10"
              style={{
                left: "75%",
                top: "25%",
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 360],
                y: [0, -3, 0]
              }}
              transition={{
                scale: { duration: 5, repeat: Infinity },
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity }
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-7 h-7 bg-gradient-to-br from-purple-500/15 to-purple-600/15 rounded-full flex items-center justify-center border border-purple-400/10 shadow-[0_0_8px_rgba(168,85,247,0.1)]"
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(168,85,247,0.1)",
                      "0 0 12px rgba(168,85,247,0.15)",
                      "0 0 8px rgba(168,85,247,0.1)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Brain size={12} className="text-purple-300/40" />
                </motion.div>
                {/* AI节点脉冲 - 非常低调 */}
                <motion.div
                  className="absolute inset-0 bg-purple-400/5 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.15, 0, 0.15]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* AI 智能连接线 - 低调辅助连接 */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none">
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* 从AI节点到中心的连接 - 单条低调连接 */}
              <motion.line
                x1="75%"
                y1="25%"
                x2="50%"
                y2="50%"
                stroke="url(#aiGradient)"
                strokeWidth="0.5"
                strokeDasharray="4,8"
                opacity={0.12}
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0.12, 0.2, 0.12]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>

            {/* AI 分析粒子流 - 从单个节点到中心 */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`ai-particle-${i}`}
                className="absolute w-1 h-1 bg-purple-400/25 rounded-full shadow-[0_0_3px_#a855f7] z-10"
                initial={{
                  x: "75%",
                  y: "25%",
                  scale: 0
                }}
                animate={{
                  x: ["75%", "50%", "75%"],
                  y: ["25%", "50%", "25%"],
                  scale: [0, 1, 0],
                  opacity: [0, 0.4, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* AI 决策面板 - 更小更低调 */}
            <motion.div 
              className="absolute top-[65%] right-[5%] glass-panel p-2 rounded font-mono text-[9px] text-purple-400/70 border-l border-purple-500/30 z-20 backdrop-blur-md bg-black/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -3, 0]
              }}
              transition={{ 
                opacity: { delay: 1.5 },
                scale: { delay: 1.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Bot size={10} className="text-purple-400/60" />
                <div className="text-purple-400/70">&gt; AI Assist</div>
              </div>
              <div className="text-slate-500 text-[8px]">Smart Routing</div>
            </motion.div>

            {/* AI 光效背景 - 更暗更低调 */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 30, repeat: Infinity, ease: "linear" }
              }}
            />

            {/* 背景光效 */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- SECTION: LAYER 4.5 EXPLAINER ---
const LayerExplainer = () => {
  return (
    <section id="layer-4-5" className="py-24 bg-[#020202] border-t border-white/5 relative">
       <div className="max-w-7xl mx-auto px-6">
         <SectionHeader 
            badge="Architecture Concept" 
            title="The Missing Layer: What is L4.5?" 
            desc="Traditional Layer 4 (TLS) secures the data payload but leaves the path blind. Synapiron introduces Layer 4.5 to secure the corridor itself."
            color="emerald"
         />
         
         <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
            {/* Left: The Stack */}
            <div className="relative p-8">
               <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
               <div className="flex flex-col gap-4 font-mono text-sm relative z-10">
                  <div className="p-4 rounded border border-white/10 bg-[#0A0A0A] text-slate-500 flex justify-between">
                     <span>Layer 5: Application</span>
                     <span className="text-[10px] bg-white/10 px-2 rounded">HTTP / App</span>
                  </div>
                  
                  {/* The Highlighted Layer */}
                  <motion.div 
                     className="p-6 rounded-lg border border-emerald-500/50 bg-emerald-900/10 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <div className="flex justify-between items-center mb-2">
                        <span className="font-bold flex items-center gap-2"><Layers size={16}/> Layer 4.5: DCT</span>
                        <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">ASSURANCE</span>
                     </div>
                     <p className="text-xs text-emerald-500/70 leading-relaxed">
                        Responsible for Path Control, Policy Enforcement, and Transfer Evidence. The bridge between raw connectivity and business logic.
                     </p>
                  </motion.div>

                  <div className="p-4 rounded border border-white/10 bg-[#0A0A0A] text-slate-500 flex justify-between">
                     <span>Layer 4: Transport</span>
                     <span className="text-[10px] bg-white/10 px-2 rounded">TLS / QUIC</span>
                  </div>
                  <div className="p-4 rounded border border-white/10 bg-[#0A0A0A] text-slate-500 flex justify-between">
                     <span>Layer 3: Network</span>
                     <span className="text-[10px] bg-white/10 px-2 rounded">IP / SCION</span>
                  </div>
               </div>
            </div>

            {/* Right: The Metaphor */}
            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-white">TLS is the Armored Car.<br/>Layer 4.5 (DCT) is the Validated Route.</h3>
               <p className="text-slate-400 leading-relaxed">
                  Encryption (Layer 4) ensures no one can see inside the van. But who ensures the driver doesn't take a detour through a hostile jurisdiction?
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <div className="mt-1 p-1 bg-emerald-500/10 rounded border border-emerald-500/20"><CheckCircle size={14} className="text-emerald-500"/></div>
                     <div>
                        <strong className="text-white block text-sm">Constraint Enforcement</strong>
                        <span className="text-slate-500 text-xs">"Data must NEVER leave the EU." DCT enforces this at the packet level.</span>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <div className="mt-1 p-1 bg-emerald-500/10 rounded border border-emerald-500/20"><CheckCircle size={14} className="text-emerald-500"/></div>
                     <div>
                        <strong className="text-white block text-sm">Hop-by-Hop Visibility</strong>
                        <span className="text-slate-500 text-xs">Every router signs the transfer. No more black-box transmission.</span>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
       </div>
    </section>
  );
};

// --- SECTION: COMPLIANCE IMPERATIVE ---
const ComplianceImperative = () => {
  return (
    <section id="compliance" className="py-24 bg-[#020202] border-t border-white/5 relative">
       <div className="max-w-7xl mx-auto px-6">
         <SectionHeader 
            badge="The Compliance Singularity" 
            title="From 'Trust Me' to 'Here is the Proof'" 
            desc="In a world of GDPR, PDPO, and data sovereignty laws, traditional 'best-effort' routing is a liability. DCT turns compliance into a deterministic guarantee."
            color="emerald"
         />
         
         <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* The Old Way: Black Box */}
            <div className="group p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden">
               <div className="absolute top-4 right-4 text-slate-600 group-hover:text-red-500 transition-colors"><AlertTriangle size={24}/></div>
               <h4 className="text-xl font-bold text-slate-300 mb-4 group-hover:text-red-400 transition-colors">Legacy: The Black Box</h4>
               <p className="text-slate-500 text-sm mb-6">
                  You hand data to an ISP. It disappears into a cloud of 30 hops. Did it pass through a sanctioned country? Did a competitor mirror it? 
                  <br/><br/>
                  <span className="italic">Auditor: "Can you prove data residency?"</span><br/>
                  <span className="italic">You: "Um... we have a contract?"</span>
               </p>
               <div className="w-full h-1 bg-slate-800 rounded overflow-hidden">
                  <div className="w-1/3 h-full bg-red-500/50"></div>
               </div>
               <div className="mt-2 text-[10px] text-red-500 font-mono">RISK: HIGH • VISIBILITY: ZERO</div>
            </div>

            {/* The New Way: Glass Box */}
            <div className="group p-8 rounded-2xl bg-emerald-900/5 border border-emerald-500/20 relative overflow-hidden">
               <div className="absolute top-4 right-4 text-emerald-500"><FileCheck size={24}/></div>
               <h4 className="text-xl font-bold text-white mb-4">Layer 4.5 (DCT): The Glass Box</h4>
               <p className="text-slate-400 text-sm mb-6">
                  Every packet carries a passport (TAC). Every border crossing gets a visa stamp (Signature). At the end, you get a cryptographic Evidence Package.
                  <br/><br/>
                  <span className="italic">Auditor: "Can you prove data residency?"</span><br/>
                  <span className="italic text-emerald-400">You: "Here is the signed chain of custody."</span>
               </p>
               <div className="w-full h-1 bg-slate-800 rounded overflow-hidden">
                  <div className="w-full h-full bg-emerald-500"></div>
               </div>
               <div className="mt-2 text-[10px] text-emerald-500 font-mono">RISK: ZERO • VISIBILITY: 100%</div>
            </div>
         </div>
       </div>
    </section>
  );
};

const GlobalNetwork = () => {
  const nodes = [
    { id: 'ZH', x: 10, y: 25, label: 'ZURICH' }, 
    { id: 'BJ', x: 80, y: 15, label: 'BEIJING' }, 
    { id: 'GZ', x: 74, y: 35, label: 'GUANGZHOU' }, 
    { id: 'SZ', x: 78, y: 38, label: 'SHENZHEN' }, 
    { id: 'HK', x: 82, y: 42, label: 'HONG KONG' }, 
  ];

  const corridors = [
    { from: 'ZH', to: 'BJ', type: 'international', color: '#8b5cf6', paths: 3, curve: -15 }, 
    { from: 'ZH', to: 'HK', type: 'international', color: '#10b981', paths: 2, curve: 20 },
    { from: 'BJ', to: 'GZ', type: 'domestic', color: '#06b6d4', paths: 2, curve: 8 },
    { from: 'BJ', to: 'SZ', type: 'domestic', color: '#3b82f6', paths: 2, curve: -5 },
    { from: 'GZ', to: 'SZ', type: 'cross-border', color: '#f59e0b', paths: 3, curve: 5 },
    { from: 'SZ', to: 'HK', type: 'cross-border', color: '#f59e0b', paths: 4, curve: 2 },
  ];

  const generateGrid = () => {
    const dots = [];
    for(let x=0; x<=100; x+=2.5) { 
      for(let y=0; y<=50; y+=2.5) {
        const isLand = (x > 5 && x < 35 && y > 15 && y < 35) || (x > 55 && x < 95 && y > 10 && y < 48);   
        if(isLand) dots.push({ x, y, r: Math.random() > 0.8 ? 0.3 : 0.15 });
      }
    }
    return dots;
  };
  const landDots = generateGrid();

  return (
    <section id="network" className="relative py-16 bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Global Infrastructure"
          title="Sovereign Interconnect"
          desc="Multi-path verified corridors connecting fragmented data spaces. High-throughput, policy-compliant transmission lanes."
        />

        <div className="relative w-full h-[480px] bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%">
               <defs>
                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                 </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent w-[40%] h-full transform skew-x-12 translate-x-[-150%] animate-[shimmer_5s_infinite_linear] pointer-events-none z-0"></div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            <defs>
              <filter id="glow-intense">
                <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {landDots.map((dot, i) => (
              <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill="#334155" opacity="0.4" />
            ))}

            {corridors.map((c, i) => {
              const start = nodes.find(n => n.id === c.from);
              const end = nodes.find(n => n.id === c.to);
              const mx = (start.x + end.x) / 2;
              const my = (start.y + end.y) / 2 - c.curve;

              return Array.from({ length: c.paths }).map((_, pIndex) => {
                const offset = (pIndex - c.paths/2) * 1.5; 
                const pathD = `M ${start.x} ${start.y} Q ${mx} ${my + offset} ${end.x} ${end.y}`;
                return (
                  <g key={`${i}-${pIndex}`}>
                    <path d={pathD} stroke={c.color} strokeWidth="0.1" fill="none" opacity="0.2" />
                    <motion.path 
                      d={pathD}
                      stroke={c.color}
                      strokeWidth={0.3}
                      fill="none"
                      filter="url(#glow-intense)"
                      strokeDasharray="1 3"
                      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                      animate={{ pathLength: 0.3, pathOffset: 1, opacity: [0, 1, 1, 0] }}
                      transition={{ 
                        duration: (c.type === 'cross-border' ? 1.5 : 4) + Math.random(),
                        repeat: Infinity, ease: "linear", delay: Math.random() * 2 
                      }}
                    />
                  </g>
                );
              });
            })}
          </svg>

          {nodes.map((node, i) => (
            <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group" style={{ left: `${node.x}%`, top: `${node.y * 2}%` }}>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-12 h-12 bg-emerald-500/10 rounded-full animate-ping"></div>
                <div className="absolute w-6 h-6 bg-emerald-500/20 rounded-full blur-md"></div>
                <div className="relative w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"></div>
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <div className="glass-panel px-3 py-1 rounded-sm border-l-2 border-emerald-500 text-[10px] font-mono text-white whitespace-nowrap flex flex-col items-center gap-0.5">
                  <span className="font-bold tracking-widest">{node.label}</span>
                  <span className="text-[8px] text-emerald-400">NODE_ACTIVE</span>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-6 z-30">
            <div className="glass-panel p-4 rounded-lg flex flex-col gap-2 min-w-[200px] font-mono text-[10px]">
              <div className="flex justify-between items-center text-slate-400 border-b border-white/10 pb-2 mb-1">
                <span>TOPOLOGY</span>
                <span className="text-emerald-400 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div> MESH</span>
              </div>
              <div className="flex justify-between"><span className="text-slate-500">TOTAL_CAPACITY</span> <span className="text-white">40 Tbps</span></div>
              <div className="flex justify-between"><span className="text-slate-500">ACTIVE_PATHS</span> <span className="text-white">16</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- POLICY ROUTING (Programmable) ---

const PolicyRouting = () => {
  const [activeScenario, setActiveScenario] = useState(0); 

  const scenarios = [
    { title: "OPTIMIZED", cmd: "ROUTING_MODE: LATENCY_MIN", desc: "Default behavior. Data takes the shortest path through North America.", color: "cyan" },
    { title: "GEO-FENCING", cmd: "DENY REGION: NORTH_AMERICA", desc: "Policy enforcement. Path actively bends to avoid the restricted jurisdiction.", color: "red" },
    { title: "AUDIT TRAIL", cmd: "REQUIRE HOP: GBA_GATEWAY", desc: "Regulatory requirement. Data forced through specific gateway for signing.", color: "emerald" }
  ];

  useEffect(() => {
    const timer = setInterval(() => { setActiveScenario(prev => (prev + 1) % 3); }, 6000);
    return () => clearInterval(timer);
  }, []);

  const path0 = "M 50 150 Q 300 50 550 150";
  const path1 = "M 50 150 Q 300 250 550 150"; 
  const path2 = "M 50 150 Q 150 220 300 220 T 550 150";

  return (
    <section id="policy" className="pt-16 pb-24 bg-[#020202] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Policy & Compliance Engine"
          title="Programmable Sovereignty"
          desc="Define where your data can go, and where it absolutely cannot. Our routing engine enforces geopolitical and regulatory constraints at the packet level."
        />

        <div className="grid lg:grid-cols-12 gap-6 items-stretch lg:h-[400px]">
          {/* Console - Compact */}
          <div className="lg:col-span-4 h-full flex flex-col">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-1 overflow-hidden h-full flex flex-col">
              <div className="bg-black/50 p-3 border-b border-white/5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <Terminal size={12} /> POLICY_DAEMON
                </div>
                <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/20"></div><div className="w-2 h-2 rounded-full bg-yellow-500/20"></div><div className="w-2 h-2 rounded-full bg-green-500/20"></div></div>
              </div>
              <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                {scenarios.map((s, i) => (
                  <motion.button 
                    key={i}
                    onClick={() => setActiveScenario(i)}
                    className={`w-full text-left p-3 rounded border transition-all duration-300 relative overflow-hidden group ${activeScenario === i ? 'bg-white/5 border-white/20' : 'bg-transparent border-transparent text-slate-600 opacity-50'}`}
                  >
                    {activeScenario === i && <motion.div layoutId="activeGlow" className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none" />}
                    <div className="flex justify-between items-center mb-1 relative z-10">
                      <span className={`text-xs font-bold ${activeScenario === i ? 'text-white' : 'text-slate-500'}`}>{s.title}</span>
                      {activeScenario === i && <span className={`text-[9px] font-mono px-1.5 rounded bg-${s.color === 'red' ? 'red' : 'emerald'}-500/20 text-${s.color === 'red' ? 'red' : 'emerald'}-400`}>ACTIVE</span>}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 relative z-10 mb-1">{`> ${s.cmd}`}</div>
                    <div className="text-[9px] text-slate-500 leading-tight relative z-10">{s.desc}</div>
                  </motion.button>
                ))}
              </div>
              <div className="p-3 border-t border-white/5 bg-black/20 shrink-0">
                 <div className="font-mono text-[9px] space-y-1">
                    <div className="flex justify-between"><span className="text-slate-500">Check: DATA_RESIDENCY</span> <span className={activeScenario === 1 ? "text-emerald-500" : "text-slate-600"}>{activeScenario === 1 ? "PASSED" : "SKIP"}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Check: MANDATORY_HOP</span> <span className={activeScenario === 2 ? "text-emerald-500" : "text-slate-600"}>{activeScenario === 2 ? "ENFORCED" : "SKIP"}</span></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-8 min-h-[260px] lg:h-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col relative">
            <div className="absolute top-4 left-4 z-20">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Visualizer</div>
              <div className="text-lg font-bold text-white">Route Simulation</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 600 300" className="pointer-events-none">
                <defs>
                  <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.5" />

                <AnimatePresence>
                  {activeScenario === 1 && (
                    <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }}>
                      <rect x="250" y="30" width="100" height="60" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
                      <text x="300" y="65" fill="#ef4444" fontSize="8" textAnchor="middle" fontFamily="monospace" fontWeight="bold">RESTRICTED JURISDICTION</text>
                      <motion.line x1="250" y1="30" x2="350" y2="30" stroke="#ef4444" strokeWidth="2" opacity="0.5" animate={{ y1: [30, 90], y2: [30, 90], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    </motion.g>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeScenario === 2 && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <circle cx="300" cy="220" r="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                      <circle cx="300" cy="220" r="3" fill="#10b981" />
                      <text x="300" y="245" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace">MANDATORY_HOP: GBA</text>
                      <motion.circle cx="300" cy="220" r="8" stroke="#10b981" strokeWidth="1" fill="none" animate={{ r: [8, 20], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    </motion.g>
                  )}
                </AnimatePresence>

                <motion.path d={activeScenario === 0 ? path0 : (activeScenario === 1 ? path1 : path2)} stroke="#1e293b" strokeWidth="2" fill="none" strokeDasharray="4 4" animate={{ d: activeScenario === 0 ? path0 : (activeScenario === 1 ? path1 : path2) }} transition={{ duration: 1, ease: "easeInOut" }} />
                <motion.path 
                  d={activeScenario === 0 ? path0 : (activeScenario === 1 ? path1 : path2)}
                  stroke={activeScenario === 1 ? '#06b6d4' : (activeScenario === 2 ? '#10b981' : '#3b82f6')}
                  strokeWidth="3" fill="none" filter="url(#neon-glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ d: activeScenario === 0 ? path0 : (activeScenario === 1 ? path1 : path2), pathLength: 1, opacity: 1, pathOffset: [0, 1] }}
                  transition={{ d: { duration: 1, ease: "easeInOut" }, pathOffset: { duration: 1.5, repeat: Infinity, ease: "linear" } }}
                />

                <circle cx="50" cy="150" r="6" fill="#fff" />
                <text x="50" y="170" fill="white" fontSize="10" textAnchor="middle" fontFamily="monospace">SRC</text>
                <circle cx="550" cy="150" r="6" fill="#fff" />
                <text x="550" y="170" fill="white" fontSize="10" textAnchor="middle" fontFamily="monospace">DST</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW SECTION: AI TRAFFIC ENGINEERING (Smart Services) ---

const AiTrafficEngineering = () => {
  const [phase, setPhase] = useState(0); // 0: Idle/Scan, 1: Filter, 2: Optimize

  useEffect(() => {
    // 6-second loop: 2s Scan/Filter, 2s Race/Select, 2s Flow
    const timer = setInterval(() => {
      setPhase(p => (p + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="smart" className="py-16 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="AI Smart Optimization"
          title="AI-Powered Optimization within Compliance"
          desc="Smart agents first apply a hard compliance filter to block risky paths, then race the remaining verified corridors to select the lowest latency route."
          color="purple"
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:h-[420px] items-stretch">
          {/* Left: Strategy Cards (1/3 width) */}
          <div className="lg:col-span-4 h-full lg:h-full flex flex-col gap-3 order-1 min-h-0">
             {/* Service 1: Predictive */}
             <motion.div 
               className={`rounded-xl p-5 flex flex-col relative overflow-hidden transition-all duration-500 lg:flex-1 min-h-0 ${
                 phase === 2 
                   ? 'bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 border border-blue-500/40 shadow-[0_0_0_1px_rgba(59,130,246,0.1)]' 
                   : 'bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] border border-slate-700/30'
               }`}
               whileHover={{ scale: 1.01, borderColor: phase === 2 ? "rgba(59,130,246,0.5)" : "rgba(148,163,184,0.4)" }}
             >
                {/* Enhanced background pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <svg width="100%" height="100%">
                    <pattern id="card-pattern-1" width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="12" cy="12" r="0.8" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#card-pattern-1)" />
                  </svg>
                </div>
                
                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                  phase === 2 ? 'bg-blue-500' : 'bg-slate-600'
                }`} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all border-2 ${
                          phase === 2 
                            ? 'bg-slate-800/80 border-blue-500/40 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]' 
                            : 'bg-slate-800/60 border-slate-700/50'
                        }`}
                      >
                        <TrendingUp size={20} className={phase === 2 ? "text-blue-400" : "text-slate-400"} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white mb-0.5">Predictive Rerouting</div>
                        <div className="text-[10px] text-slate-400 font-mono">Anticipates Congestion</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced chart visualization */}
                  <div className="relative flex-1 min-h-0 bg-slate-950/50 rounded-lg p-2 border border-slate-800/50 backdrop-blur-[1px]">
                    <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full">
                      <defs>
                        <linearGradient id="chart-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={phase === 2 ? "#3b82f6" : "#475569"} stopOpacity="0.3" />
                          <stop offset="100%" stopColor={phase === 2 ? "#3b82f6" : "#475569"} stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      <polyline
                        points="0,30 20,25 40,20 60,15 80,18 100,12"
                        fill="none"
                        stroke={phase === 2 ? "#3b82f6" : "#475569"}
                        strokeWidth="2"
                        opacity={phase === 2 ? 0.9 : 0.5}
                      />
                      <polygon
                        points="0,30 20,25 40,20 60,15 80,18 100,12 100,40 0,40"
                        fill="url(#chart-gradient-1)"
                      />
                    </svg>
                    {phase === 2 && (
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-[8px] font-mono text-blue-400">
                        -23%
                      </div>
                    )}
                  </div>
                </div>
             </motion.div>

             {/* Service 2: SLA Enforcement */}
             <motion.div 
               className={`rounded-xl p-5 flex flex-col relative overflow-hidden transition-all duration-500 lg:flex-1 min-h-0 ${
                 phase === 2 
                   ? 'bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 border border-emerald-500/40 shadow-[0_0_0_1px_rgba(16,185,129,0.1)]' 
                   : 'bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] border border-slate-700/30'
               }`}
               whileHover={{ scale: 1.01, borderColor: phase === 2 ? "rgba(16,185,129,0.5)" : "rgba(148,163,184,0.4)" }}
             >
                {/* Enhanced background pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <svg width="100%" height="100%">
                    <pattern id="card-pattern-2" width="24" height="24" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="1" height="24" fill="white" />
                      <rect x="0" y="0" width="24" height="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#card-pattern-2)" />
                  </svg>
                </div>
                
                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                  phase === 2 ? 'bg-emerald-500' : 'bg-slate-600'
                }`} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all border-2 ${
                          phase === 2 
                            ? 'bg-slate-800/80 border-emerald-500/40 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]' 
                            : 'bg-slate-800/60 border-slate-700/50'
                        }`}
                      >
                        <FileCheck size={20} className={phase === 2 ? "text-emerald-400" : "text-slate-400"} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white mb-0.5">SLA Enforcement</div>
                        <div className="text-[10px] text-slate-400 font-mono">Guaranteed &lt;50ms</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced circular progress */}
                  <div className="relative flex-1 flex items-center justify-center min-h-0">
                    <div className="relative">
                      <svg width="70" height="70" className="transform -rotate-90 flex-shrink-0">
                        <circle
                          cx="35"
                          cy="35"
                          r="26"
                          fill="none"
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth="3"
                        />
                        <motion.circle
                          cx="35"
                          cy="35"
                          r="26"
                          fill="none"
                          stroke={phase === 2 ? "#10b981" : "#475569"}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={`${phase === 2 ? 163 : 0} 163`}
                          animate={{ strokeDasharray: phase === 2 ? ["163 163", "163 0"] : "0 163" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-base font-bold ${phase === 2 ? "text-emerald-400" : "text-slate-500"}`}>
                          {phase === 2 ? "50ms" : "~80ms"}
                        </span>
                        <span className="text-[8px] text-slate-500 font-mono mt-0.5">RTT</span>
                      </div>
                    </div>
                  </div>
                </div>
             </motion.div>

             {/* Service 3: Threat Neutralization */}
             <motion.div 
               className={`rounded-xl p-5 flex flex-col relative overflow-hidden transition-all duration-500 lg:flex-1 min-h-0 ${
                 phase >= 1 
                   ? 'bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 border border-red-500/40 shadow-[0_0_0_1px_rgba(239,68,68,0.1)]' 
                   : 'bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] border border-slate-700/30'
               }`}
               whileHover={{ scale: 1.01, borderColor: phase >= 1 ? "rgba(239,68,68,0.5)" : "rgba(148,163,184,0.4)" }}
             >
                {/* Enhanced background pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <svg width="100%" height="100%">
                    <pattern id="card-pattern-3" width="18" height="18" patternUnits="userSpaceOnUse">
                      <path d="M 0 0 L 18 18 M 18 0 L 0 18" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#card-pattern-3)" />
                  </svg>
                </div>
                
                {/* Subtle corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                  phase >= 1 ? 'bg-red-500' : 'bg-slate-600'
                }`} style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all border-2 ${
                          phase >= 1 
                            ? 'bg-slate-800/80 border-red-500/40 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]' 
                            : 'bg-slate-800/60 border-slate-700/50'
                        }`}
                      >
                        <Shield size={20} className={phase >= 1 ? "text-red-400" : "text-slate-400"} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white mb-0.5">Threat Neutralization</div>
                        <div className="text-[10px] text-slate-400 font-mono">Auto-Block Risk Nodes</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced threat visualization */}
                  <div className="relative flex-1 flex flex-col justify-center min-h-0">
                    {phase >= 1 ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2.5 bg-slate-950/60 border border-red-500/30 rounded-lg backdrop-blur-[1px]">
                          <AlertTriangle size={14} className="text-red-400 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-bold text-red-400 font-mono truncate mb-0.5">THREAT DETECTED</div>
                            <div className="text-[8px] text-red-300/70 font-mono truncate">Node 0x3F2A...</div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-red-500/80 flex-shrink-0" />
                        </div>
                        <div className="text-[9px] text-slate-500 font-mono text-center">
                          <span className="text-red-400 font-bold">1</span> threat blocked
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-2 border-slate-700/50 flex items-center justify-center bg-slate-900/30">
                          <div className="w-8 h-8 rounded-full bg-slate-800/60 flex items-center justify-center border border-slate-700/30">
                            <Shield size={16} className="text-slate-500" />
                          </div>
                        </div>
                        <div className="text-[9px] text-slate-500 font-mono mt-2">MONITORING</div>
                      </div>
                    )}
                  </div>
                </div>
             </motion.div>
          </div>

          {/* Right: Large Visualization (2/3 width) */}
          <div className="lg:col-span-8 min-h-[260px] lg:h-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col relative order-2">
             {/* Subtle static background gradient */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />
             
             {/* Grid background */}
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                   <defs>
                     <pattern id="ai-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                     </pattern>
                   </defs>
                   <rect width="100%" height="100%" fill="url(#ai-grid)" />
                </svg>
             </div>

             <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 800 400" className="pointer-events-none">
                   <defs>
                      <filter id="neon-subtle" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                   </defs>

                   {/* --- THE COMPLIANCE FILTER (Vertical Line) --- */}
                   <line 
                     x1="300" 
                     y1="0" 
                     x2="300" 
                     y2="400" 
                     stroke={phase >= 1 ? "#ef4444" : "#334155"} 
                     strokeWidth="1.5" 
                     strokeDasharray="4 2"
                     opacity={phase >= 1 ? 0.8 : 0.3}
                   />
                   <text 
                     x="300" 
                     y="30" 
                     fill={phase >= 1 ? "#ef4444" : "#64748b"} 
                     fontSize="10" 
                     textAnchor="middle" 
                     fontFamily="monospace"
                     opacity={phase >= 1 ? 0.9 : 0.5}
                   >
                     COMPLIANCE_GATEWAY
                   </text>

                   {/* Simplified AI neurons */}
                   {[0, 1, 2, 3, 4].map((i) => {
                     const x = 140 + i * 120;
                     const y = 90 + (i % 2) * 50;
                     return (
                       <circle
                         key={i}
                         cx={x}
                         cy={y}
                         r={phase === 2 ? 3 : 2}
                         fill={phase === 2 ? "#3b82f6" : phase >= 1 ? "#475569" : "#334155"}
                         opacity={phase === 2 ? 0.8 : 0.5}
                       />
                     );
                   })}

                   {/* Simplified Nodes */}
                   <g>
                     <circle cx="50" cy="200" r="8" fill="#fff" />
                     <text 
                       x="50" 
                       y="230" 
                       fill="white" 
                       fontSize="12" 
                       textAnchor="middle" 
                       fontFamily="monospace"
                       opacity="0.9"
                     >
                       SRC
                     </text>
                   </g>
                   <g>
                     <circle cx="750" cy="200" r="8" fill="#fff" />
                     <text 
                       x="750" 
                       y="230" 
                       fill="white" 
                       fontSize="12" 
                       textAnchor="middle" 
                       fontFamily="monospace"
                       opacity="0.9"
                     >
                       DST
                     </text>
                   </g>

                   {/* --- PATH 1: VIOLATION (Red) --- */}
                   <path
                     d="M 50 200 C 150 200, 200 50, 300 50"
                     fill="none"
                     stroke={phase >= 1 ? "#ef4444" : "#334155"}
                     strokeWidth="2"
                     opacity={phase >= 1 ? 0.9 : 0.3}
                   />
                   <path
                     d="M 300 50 C 400 50, 600 200, 750 200"
                     fill="none"
                     stroke="#334155"
                     strokeWidth="1"
                     opacity="0.1"
                     strokeDasharray="2 2"
                   />

                   {/* Violation Event */}
                   <AnimatePresence>
                     {phase >= 1 && (
                       <motion.g 
                         initial={{ opacity: 0 }} 
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                       >
                          <circle cx="300" cy="50" r="12" fill="#ef4444" />
                          <path d="M 294 44 L 306 56 M 306 44 L 294 56" stroke="white" strokeWidth="2" />
                          <text
                            x="300"
                            y="80"
                            fill="#ef4444"
                            fontSize="10"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontWeight="bold"
                          >
                            POLICY_BLOCK
                          </text>
                       </motion.g>
                     )}
                   </AnimatePresence>

                   {/* --- PATH 2: COMPLIANT BUT SLOW (Yellow) --- */}
                   <path
                     d="M 50 200 Q 400 150 750 200"
                     fill="none"
                     stroke={phase >= 1 ? (phase === 2 ? "#334155" : "#f59e0b") : "#334155"}
                     strokeWidth="2"
                     opacity={phase === 2 ? 0.3 : phase >= 1 ? 0.9 : 0.3}
                   />
                   {/* Single slow packet */}
                   {phase >= 1 && phase < 2 && (
                     <motion.circle
                       r="4"
                       fill="#f59e0b"
                       style={{ offsetPath: "path('M 50 200 Q 400 150 750 200')" }}
                       animate={{ offsetDistance: ["0%", "100%"] }}
                       transition={{ 
                         duration: 3, 
                         ease: "linear",
                         repeat: Infinity,
                       }}
                     />
                   )}

                   {/* --- PATH 3: OPTIMAL (Green / Blue) --- */}
                   <path
                     d="M 50 200 Q 400 350 750 200"
                     fill="none"
                     stroke={phase === 2 ? "#10b981" : phase >= 1 ? "#3b82f6" : "#334155"}
                     strokeWidth={phase === 2 ? 3 : phase >= 1 ? 2.5 : 2}
                     filter={phase === 2 ? "url(#neon-subtle)" : ""}
                     opacity={phase === 2 ? 1 : phase >= 1 ? 0.9 : 0.3}
                   />
                   {/* Single fast packet */}
                   {phase >= 1 && (
                     <motion.circle
                       r={phase === 2 ? 6 : 5}
                       fill={phase === 2 ? "#10b981" : "#3b82f6"}
                       style={{ offsetPath: "path('M 50 200 Q 400 350 750 200')" }}
                       animate={{ offsetDistance: ["0%", "100%"] }}
                       transition={{ 
                         duration: 1.5, 
                         ease: "linear",
                         repeat: Infinity,
                       }}
                     />
                   )}

                   {/* AI Decision Matrix - simplified, moved to right side */}
                   <foreignObject x="520" y="20" width="260" height="120">
                      <div className="flex flex-col gap-2 text-slate-300 font-mono text-[10px] p-3 bg-black/60 backdrop-blur-sm border border-slate-700/50 rounded-lg w-fit">
                        <div className="flex items-center gap-2">
                          <Brain size={16} className="text-blue-400" />
                          <span className="font-bold text-white">AI_DECISION_MATRIX</span>
                          <span className={`ml-2 px-2 py-0.5 rounded-full border text-[9px] font-bold ${
                            phase === 2 
                              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" 
                              : phase === 1
                              ? "bg-red-500/10 border-red-500/40 text-red-400"
                              : "bg-slate-700/30 border-slate-600/40 text-slate-400"
                          }`}>
                            {phase === 0 ? "SCAN" : phase === 1 ? "FILTER" : "OPTIMIZE"}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                            <span>RTT: <span className="text-slate-300 font-bold">{phase === 2 ? "< 50ms" : "~80ms"}</span></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500/60" />
                            <span>PATHS: <span className="text-slate-300 font-bold">{phase === 0 ? "3" : phase === 1 ? "2" : "1"}</span></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500/60" />
                            <span>THROUGHPUT: <span className="text-slate-300 font-bold">{phase === 2 ? "40 Gbps" : "~25 Gbps"}</span></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500/60" />
                            <span>COMPLIANCE: <span className="text-slate-300 font-bold">{phase >= 1 ? "100%" : "CHECKING"}</span></span>
                          </div>
                        </div>
                      </div>
                   </foreignObject>
                </svg>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 4. HARDCORE PROTOCOL VISUALIZATIONS (V3 - Storytelling) ---

const CmpViz = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#0A0A0A] font-mono text-[10px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="whitespace-nowrap animate-pulse" style={{ animationDelay: `${i*0.2}s` }}>
            {`>> SIGNING_KEY_${i}::INIT(0x${Math.random().toString(16).slice(2,8)})`}
          </div>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center gap-12 relative z-10 p-6">
        <div className="relative flex flex-col items-center gap-2">
          <motion.div 
            className="w-16 h-20 bg-[#0F172A] border border-slate-700 rounded flex flex-col items-center justify-center relative overflow-hidden"
            animate={{ borderColor: ['#334155', '#10b981', '#334155'] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
          >
            <FileKey size={20} className="text-slate-400 mb-1" />
            <div className="w-8 h-1 bg-slate-600 rounded"></div>
            <motion.div 
              className="absolute bottom-2 w-10 h-10 border-2 border-emerald-500 rounded-full flex items-center justify-center opacity-0"
              animate={{ opacity: [0, 1, 1, 0], scale: [2, 1, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, times: [0.3, 0.35, 0.8, 1] }}
            >
              <span className="text-[6px] text-emerald-500 font-bold rotate-[-15deg]">SIGNED</span>
            </motion.div>
          </motion.div>
          <span className="text-slate-500">TAC.json</span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           <motion.div
             className="text-emerald-500 bg-[#0A0A0A] p-2 rounded-full border border-emerald-500/50 shadow-[0_0_20px_#10b981]"
             animate={{ y: [-40, 0, -40], opacity: [0, 1, 0] }}
             transition={{ duration: 3, repeat: Infinity, times: [0.1, 0.35, 0.6] }}
           >
             <Key size={24} />
           </motion.div>
        </div>
        <div className="relative flex flex-col items-center gap-2">
           <div className="w-16 h-20 bg-[#0F172A] border border-slate-700 rounded flex flex-col items-center justify-center relative overflow-hidden">
              <Shield size={20} className="text-slate-400 mb-1" />
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-emerald-400 shadow-[0_0_10px_#10b981]"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />
           </div>
           <motion.span 
             className="text-emerald-500 font-bold"
             animate={{ opacity: [0, 1, 0] }}
             transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
           >
             VALID
           </motion.span>
        </div>
      </div>
      <div className="h-8 border-t border-white/5 bg-[#050505] flex items-center px-4 gap-2 text-slate-500">
        <span className="text-emerald-500">&rarr;</span>
        <span>Issuer.Sign(TAC, PrivKey) &rarr; <span className="text-white">0x9a...f1</span></span>
      </div>
    </div>
  );
}

const CtpViz = () => {
  const [hash, setHash] = useState('0x000000');
  useEffect(() => {
    const interval = setInterval(() => {
      setHash('0x' + Math.random().toString(16).substr(2, 6).toUpperCase());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-4 bg-[#0A0A0A] font-mono text-[10px] relative gap-6">
      <div className="absolute top-4 right-4 text-right">
        <div className="text-slate-500 text-[8px] uppercase tracking-widest">Current Chain Hash</div>
        <div className="text-cyan-400 font-bold text-xs font-mono">{hash}</div>
      </div>
      <div className="flex-1 flex flex-col justify-center relative">
          <div className="flex items-center gap-2 mb-2">
             <span className="text-emerald-500 font-bold">AUTHORIZED_ROUTE</span>
             <span className="h-[1px] flex-1 bg-slate-800"></span>
          </div>
          <div className="relative flex items-center justify-between px-2">
              {['SRC', 'H1', 'H2', 'DST'].map((label, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-600 mb-1"></div>
                      <span className="text-slate-600">{label}</span>
                  </div>
              ))}
              <motion.div
                  className="absolute top-0 left-2 z-20 flex items-center"
                  animate={{ left: ['0%', '33%', '66%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", times: [0, 0.33, 0.66, 1] }}
              >
                  <div className="w-4 h-4 bg-cyan-500 rounded-sm shadow-[0_0_15px_cyan] flex items-center justify-center z-20">
                      <Hash size={10} className="text-black"/>
                  </div>
                  <motion.div className="flex gap-[1px] ml-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                     <motion.div className="w-2 h-3 bg-cyan-800 rounded-sm" animate={{ opacity: [0, 1, 1, 1] }} transition={{ duration: 4, times: [0, 0.3, 0.35, 1] }} />
                     <motion.div className="w-2 h-3 bg-cyan-700 rounded-sm" animate={{ opacity: [0, 0, 1, 1] }} transition={{ duration: 4, times: [0, 0.6, 0.65, 1] }} />
                     <motion.div className="w-2 h-3 bg-cyan-600 rounded-sm" animate={{ opacity: [0, 0, 0, 1] }} transition={{ duration: 4, times: [0, 0.9, 0.95, 1] }} />
                  </motion.div>
              </motion.div>
          </div>
      </div>
      <div className="flex-1 flex flex-col justify-center relative opacity-80">
          <div className="flex items-center gap-2 mb-2">
             <span className="text-red-500 font-bold">ROGUE_PATH</span>
             <span className="h-[1px] flex-1 bg-red-900/30 dashed"></span>
          </div>
          <div className="relative flex items-center justify-between px-2">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-900/20"></div>
              <div className="absolute left-[33%] top-[-4px] flex flex-col items-center z-10">
                 <div className="w-3 h-3 bg-red-900 border border-red-500 rounded-full animate-pulse"></div>
                 <span className="text-red-700 mt-1">BAD_ACTOR</span>
              </div>
              <motion.div
                  className="absolute top-0 left-2 z-20"
                  animate={{ left: ['0%', '30%'], opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.35, 1] }}
              >
                  <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                      <AlertTriangle size={10} className="text-white"/>
                  </div>
              </motion.div>
              <motion.div className="absolute left-[33%] top-[-10px] text-red-500 font-bold text-[8px] border border-red-500 px-1 rounded bg-red-950" animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0] }} transition={{ duration: 4, times: [0.3, 0.35, 0.6, 0.7] }}>DROPPED</motion.div>
          </div>
      </div>
    </div>
  );
}

const TvpViz = () => {
  const steps = [
    { label: "SIGNATURE", status: "VALID" },
    { label: "GEO_FENCE", status: "MATCH" },
    { label: "TIME_TTL", status: "OK" },
    { label: "HOP_CHAIN", status: "VERIFIED" }
  ];

  return (
    <div className="w-full h-full bg-[#0A0A0A] p-5 font-mono text-[10px] relative overflow-hidden flex flex-col">
      <div className="flex justify-between text-slate-500 border-b border-white/10 pb-2 mb-2">
         <span>AUDIT_LOG_#9281</span>
         <span>AUTO_VERIFY</span>
      </div>
      <div className="flex-1 space-y-3 relative">
         <motion.div 
            className="absolute left-[-20px] right-[-20px] h-6 bg-purple-500/10 border-y border-purple-500/30 z-0"
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
         />
         {steps.map((step, i) => (
           <div key={i} className="flex justify-between items-center relative z-10">
              <span className="text-slate-300">{step.label}</span>
              <motion.span className="text-emerald-500 font-bold bg-emerald-900/20 px-1 rounded" initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.6, duration: 0.2 }}>[{step.status}]</motion.span>
           </div>
         ))}
      </div>
      <motion.div className="mt-auto border-t-2 border-dashed border-slate-700 pt-3 flex flex-col items-center gap-1" initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}>
         <Fingerprint size={24} className="text-purple-500" />
         <span className="text-purple-400 font-bold tracking-widest text-xs">EVIDENCE CONFIRMED</span>
      </motion.div>
    </div>
  );
}

const ProtocolCard = ({ title, code, icon, children, accentColor }) => (
  <div className="group relative bg-[#080808] border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full min-h-[320px]">
    <div className="p-5 border-b border-white/5 bg-white/[0.01] flex justify-between items-start z-10">
      <div>
        <h3 className="text-sm font-bold text-white tracking-wide mb-1">{title}</h3>
        <div className={`text-[10px] font-mono px-2 py-0.5 rounded w-fit bg-${accentColor}-500/10 text-${accentColor}-400 border border-${accentColor}-500/20`}>
          {code}
        </div>
      </div>
      <div className={`p-2 rounded bg-white/5 text-${accentColor}-400`}>
        {icon}
      </div>
    </div>
    <div className="flex-1 relative bg-[#050505]">
      {children}
    </div>
  </div>
);

const ProtocolSuite = () => {
  return (
    <section id="protocol" className="py-20 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Trust Engine: Protocol Suite v0.2"
          title="Data Corridor Transport (DCT)"
          desc="Three specialized layers working in unison. From issuing credentials (CMP) to transporting securely (CTP) and verifying evidence (TVP)."
        />

        <div className="grid md:grid-cols-3 gap-6 items-stretch mt-12">
          <ProtocolCard title="Certificate Management" code="DCT-CMP" icon={<FileCheck size={18}/>} accentColor="emerald">
            <CmpViz />
          </ProtocolCard>
          <ProtocolCard title="Corridor Transport" code="DCT-CTP" icon={<Network size={18}/>} accentColor="cyan">
            <CtpViz />
          </ProtocolCard>
          <ProtocolCard title="Transfer Verification" code="DCT-TVP" icon={<FileJson size={18}/>} accentColor="purple">
            <TvpViz />
          </ProtocolCard>
        </div>
      </div>
    </section>
  );
};

// --- Team DNA Section ---
const TeamDNA = () => {
  const teamCards = [
    {
      icon: GraduationCap,
      title: "Research",
      subtitle: "Academic Excellence",
      desc: "Applied cryptography, routing, and systems PhDs turning peer-reviewed ideas into primitives for trusted data corridors.",
      stats: "50+ Papers"
    },
    {
      icon: Code,
      title: "Engineering",
      subtitle: "Production Ready",
      desc: "Ex-big tech and carrier engineers who have shipped large scale backbone, cloud, and security infrastructure.",
      stats: "10+ Years"
    },
    {
      icon: Gavel,
      title: "Policy",
      subtitle: "Regulatory Expertise",
      desc: "Dual-trained JD / policy experts mapping GDPR, PIPL, and sectoral rules into programmable, testable constraints.",
      stats: "5+ Jurisdictions"
    },
    {
      icon: Users,
      title: "Business",
      subtitle: "Go-to-Market & Strategy",
      desc: "Business operators and MBA profiles focused on corridor commercialization, enterprise design partners, and ecosystem building.",
      stats: "2+ Partners"
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Subtle animated background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-500/3 blur-[150px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          badge="Team DNA"
          title="Building the Future of Data Sovereignty"
          desc="A 100% PhD + MBA founding team with deep roots in networking, cryptography, and policy — shipping from lab papers to production corridors."
          color="blue"
        />

        {/* Unified info badges */}
        <motion.div 
          className="mb-10 flex flex-wrap gap-3 text-[11px] font-mono"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02, borderColor: "rgba(148,163,184,0.6)" }}
            transition={{ duration: 0.2 }}
          >
            Core team: 100% PhD + MBA / EMBA
          </motion.span>
          <motion.span 
            className="px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02, borderColor: "rgba(148,163,184,0.6)" }}
            transition={{ duration: 0.2 }}
          >
            Recent top-tier pubs: SIGCOMM, NSDI, SOSP, IEEE S&P, CCS, USENIX Security, NDSS
          </motion.span>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {teamCards.map((card, i) => {
            const IconComponent = card.icon;
            
            return (
              <motion.div
                key={i}
                className="group relative rounded-xl p-6 flex flex-col h-full bg-gradient-to-br from-slate-900/40 via-slate-800/20 to-transparent border border-slate-700/30 overflow-hidden transition-all duration-500 hover:border-slate-600/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59,130,246,0.15)"
                }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <svg width="100%" height="100%">
                    <pattern id={`team-pattern-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      {i % 2 === 0 ? (
                        <circle cx="10" cy="10" r="1" fill="white" />
                      ) : (
                        <>
                          <rect x="0" y="0" width="1" height="20" fill="white" />
                          <rect x="0" y="0" width="20" height="1" fill="white" />
                        </>
                      )}
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#team-pattern-${i})`} />
                  </svg>
                </div>

                {/* Subtle glow effect */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <motion.div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-800/50 border border-slate-700/50 group-hover:border-blue-500/30 group-hover:bg-slate-800/70 transition-all duration-300"
                        whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <IconComponent size={28} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-0.5">{card.title}</h3>
                        <p className="text-xs text-slate-400 font-mono">{card.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                    {card.desc}
                  </p>

                  {/* Stats badge */}
                  <div className="mt-auto pt-4 border-t border-slate-700/30">
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/30 border border-slate-700/40"
                      whileHover={{ scale: 1.03, borderColor: "rgba(148,163,184,0.5)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-blue-400/60"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 0.9, 0.6]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-[10px] font-mono font-bold text-slate-300">
                        {card.stats}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Subtle hover border glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/20 transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Partners = () => (
  <section className="py-24 border-t border-white/5 bg-[#020203] relative overflow-hidden">
    {/* Background Atmosphere */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      
      {/* --- TIER 1: STRATEGIC PARTNERS --- */}
      <div className="mb-28 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-16"
        >
          <span className="text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] border-b border-emerald-500/20 pb-3">Strategic Partners</span>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {/* Anapaya Systems AG */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer flex flex-col md:flex-row items-center gap-3 md:gap-4"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src="/img/anapaya.png" 
                alt="Anapaya Logo" 
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">Anapaya</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Systems AG</div>
            </div>
          </motion.div>
           
          {/* China Telecom */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer flex flex-col md:flex-row items-center gap-3 md:gap-4"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src="/img/Chinatele.png" 
                alt="China Telecom Logo" 
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">China Telecom</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Global</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- TIER 2: RESEARCH & INCUBATION --- */}
      <div className="text-center">
        <p className="text-xs font-mono text-slate-600 uppercase tracking-[0.2em] mb-12">
          Incubated by & Research Powered by
        </p>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
          {[
            { name: 'HKUST(GZ)', short: 'HKUST' },
            { name: 'ETH Zürich', short: 'ETH' },
            { name: 'CityU HK', short: 'CityU' },
            { name: 'Tsinghua Univ', short: 'THU' }
          ].map((uni, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer">
              <div className="w-24 h-10 md:h-12 flex items-center justify-center bg-white rounded shadow-sm p-2 md:p-2.5">
                 <img 
                   src={`/img/${uni.short}.png`} 
                   alt={`${uni.name} Logo`} 
                   className="max-h-full max-w-full object-contain"
                 />
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-300 tracking-wide">
                {uni.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

// --- Final CTA Section ---
const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Demo Request from Synapiron Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:dongdongdoge@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 500);
  };

  return (
    <section className="py-24 border-t border-white/5 bg-gradient-to-b from-[#020202] to-[#050505] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 rounded-full">
              <MessageSquare size={12} /> GET STARTED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Sovereign Data Corridors?
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Join leading enterprises and research institutions building the future of cross-border data infrastructure. 
              Schedule a demo or contact our team to learn more.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form" 
                className="px-6 py-3 bg-white text-black rounded-lg font-bold flex items-center gap-2 hover:bg-slate-200 transition-all"
              >
                <Calendar size={16} /> Schedule Demo
              </a>
              <a 
                href="mailto:dongdongdoge@gmail.com?subject=Contact Sales - Synapiron" 
                className="px-6 py-3 text-white border border-white/10 rounded-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Mail size={16} /> Contact Sales
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-6">Request a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your use case..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={16} /> Submit Request
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Use Cases Section ---
const UseCases = () => {
  const cases = [
    {
      title: "Financial Cross-Border Data Transfer",
      subtitle: "Banking & Financial Services",
      image: "/img/usecases/bank.jpeg", // Placeholder - replace with actual image
      desc: "Enabling compliant cross-border transaction data routing for multinational banks and financial institutions. Supports encrypted transmission of sensitive financial data including real-time transaction data, customer information, and compliance reports. Ensures continuous adherence to GDPR, PDPO, and other data protection regulations while meeting audit requirements from financial regulatory bodies across jurisdictions.",
      details: [
        "Real-time cross-border transaction data sync with <50ms latency",
        "Compliant with SWIFT, PCI-DSS, and financial industry standards",
        "Multi-jurisdictional compliance routing strategies",
        "Complete audit logs and tamper-proof transmission records"
      ],
      color: "emerald"
    },
    {
      title: "Healthcare Data Corridors",
      subtitle: "Medical Research & Hospitals",
      image: "/img/usecases/medicine.jpeg", // Placeholder - replace with actual image
      desc: "Dedicated data channels connecting global medical research institutions, hospitals, and pharmaceutical companies. Supports HIPAA-compliant transmission of anonymized patient data, clinical trial data, and medical imaging. Enables cross-border medical research collaboration while strictly protecting patient privacy and ensuring healthcare data compliance with medical data protection regulations worldwide.",
      details: [
        "HIPAA and GDPR-compliant healthcare data transmission",
        "Supports large file transfers: DICOM medical imaging, electronic health records",
        "Patient data anonymization and de-identification processing",
        "Real-time multi-center clinical trial data synchronization"
      ],
      color: "cyan"
    },
    {
      title: "Government Data Networks",
      subtitle: "Public Sector & Agencies",
      image: "/img/usecases/gov.jpeg", // Placeholder - replace with actual image
      desc: "Secure and controllable inter-departmental and cross-regional data exchange networks for government agencies and public institutions. Supports transmission of sensitive government data including population data, tax information, and public safety data. Ensures data sovereignty and national security with fine-grained access controls and data flow auditing, meeting government data classification and tiered management requirements.",
      details: [
        "Compliant with national data security and cybersecurity laws",
        "Multi-level security domain data exchange support",
        "Fine-grained access control and data flow auditing",
        "Data masking and tiered transmission strategies"
      ],
      color: "blue"
    },
    {
      title: "Multi-Region Enterprise Data Sync",
      subtitle: "Global Corporations",
      image: "/img/usecases/lake.jpeg", // Placeholder - replace with actual image
      desc: "Data synchronization and backup channels between global data centers for multinational enterprises. Supports cross-regional transmission of critical business data including ERP data, customer relationship data, and supply chain data. Ensures data consistency and business continuity. Intelligent routing optimization selects optimal transmission paths while maintaining compliance, reducing latency and costs.",
      details: [
        "Real-time global data center synchronization",
        "Enterprise system data migration: SAP, Oracle, and more",
        "Intelligent routing optimization reduces transmission costs by 30%+",
        "Data sovereignty compliance with data localization support"
      ],
      color: "purple"
    }
  ];

  return (
    <section id="usecases" className="py-24 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="Real-World Applications"
          title="Built for Critical Data Flows"
          desc="Verifiable, compliant, and sovereign data corridor infrastructure for critical data flow scenarios."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-slate-900 to-black border-b border-white/10 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  onError={(e) => {
                    // Fallback to gradient if image not found
                    e.target.style.display = 'none';
                  }}
                />
                {useCase.color === 'emerald' && <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>}
                {useCase.color === 'cyan' && <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>}
                {useCase.color === 'blue' && <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>}
                {useCase.color === 'purple' && <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>}
                <div className="absolute inset-0 flex items-center justify-center">
                  {useCase.color === 'emerald' && <div className="text-4xl font-bold text-emerald-400/20">{useCase.title.charAt(0)}</div>}
                  {useCase.color === 'cyan' && <div className="text-4xl font-bold text-cyan-400/20">{useCase.title.charAt(0)}</div>}
                  {useCase.color === 'blue' && <div className="text-4xl font-bold text-blue-400/20">{useCase.title.charAt(0)}</div>}
                  {useCase.color === 'purple' && <div className="text-4xl font-bold text-purple-400/20">{useCase.title.charAt(0)}</div>}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1">{useCase.title}</h3>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{useCase.subtitle}</p>
                </div>
                
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {useCase.desc}
                </p>

                <div className="space-y-2">
                  {useCase.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      {useCase.color === 'emerald' && <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />}
                      {useCase.color === 'cyan' && <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />}
                      {useCase.color === 'blue' && <CheckCircle size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />}
                      {useCase.color === 'purple' && <CheckCircle size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />}
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 border-t border-white/10 bg-[#050505] text-sm font-mono relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black rotate-45"></div>
            </div>
            <span className="font-bold text-white tracking-tight text-lg">SYNAPIRON</span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            Building verifiable infrastructure for cross-border data circulation.
          </p>
          <div className="flex gap-3">
            <a href="https://linkedin.com/company/synapiron" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors">
              <Linkedin size={14} />
            </a>
            <a href="https://twitter.com/synapiron" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors">
              <Twitter size={14} />
            </a>
            <a href="https://github.com/synapiron" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors">
              <Github size={14} />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Product</h4>
          <ul className="space-y-2 text-slate-500 text-xs">
            <li><a href="#network" className="hover:text-white transition-colors">Sovereign Interconnect</a></li>
            <li><a href="#policy" className="hover:text-white transition-colors">Policy Engine</a></li>
            <li><a href="#protocol" className="hover:text-white transition-colors">DCT Protocol</a></li>
            <li><a href="#smart" className="hover:text-white transition-colors">AI Optimization</a></li>
            <li><a href="#usecases" className="hover:text-white transition-colors">Use Cases</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2 text-slate-500 text-xs">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-slate-500 text-xs">
            <li><a href="#team" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact-form" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-600 text-xs uppercase tracking-wider">
          <span>© 2026 Synapiron Ltd</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 text-xs">
          <MapPin size={12} />
          <span>Hong Kong · Shenzhen · Zurich</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 text-xs">
          <Mail size={12} />
          <a href="mailto:dongdongdoge@gmail.com" className="hover:text-white transition-colors">dongdongdoge@gmail.com</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <GlobalStyles />
      <div className="bg-noise"></div>
      <Navbar />
      <Hero />
      <LayerExplainer />
      <ComplianceImperative />
      <ProtocolSuite />
      <GlobalNetwork />
      <PolicyRouting />
      <AiTrafficEngineering />
      <TeamDNA />
      <UseCases />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;

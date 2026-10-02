import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { personalInfo } from "../constants";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("agentic");

  const architectureDetails = {
    agentic: {
      title: "Multi-Agent Coordination & MCP",
      badge: "ACTIVE ORCHESTRATION",
      badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-500/30",
      code: `// Enterprise Agentic Swarm (MCP & Claude APIs)
const orchestrator = new EnterpriseAgentManager({
  protocol: "Model Context Protocol (MCP)",
  llm: "Claude 3.5 Sonnet / Claude APIs",
  agents: ["DataIngestAgent", "ReasoningAgent", "ComplianceGuard"],
  governance: "Regulated FinTech Compliance (Zero-Trust)",
  state: "Deterministic State Machine"
});

await orchestrator.coordinateWorkflow({
  target: "Automated Banking Port Routine",
  status: "Optimized & Platform Stable (100%)"
});`,
    },
    rag: {
      title: "Enterprise RAG & Vector Engine",
      badge: "SEMANTIC PIPELINE",
      badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-500/30",
      code: `// Production RAG Pipeline (ChromaDB + LangChain)
const ragPipeline = new RAGSystem({
  embeddings: "text-embedding-3-large",
  vectorStore: "ChromaDB (Multi-Tenant)",
  retrievalStrategy: "Hybrid BM25 + Dense Vector Re-rank",
  topK: 5,
  latency: "142ms",
  accuracy: "99.4% precision on regulated policies"
});`,
    },
    automation: {
      title: "ServiceNow & Cloud Infrastructure",
      badge: "ENTERPRISE AUTOMATION",
      badgeColor: "text-purple-400 bg-purple-400/10 border-purple-500/30",
      code: `// ServiceNow Flow Designer & Python Automations
const integrationLayer = new EnterpriseIntegrationHub({
  corePlatforms: ["Nedbank Banking Core", "Telkom CCO Architecture"],
  engine: "ServiceNow Flow Designer + Custom Python",
  security: "Secured Integration Points & Shared Layers",
  certification: ["Azure AZ-900 / DP-900", "OCI 2025", "AWS"]
});`,
    },
  };

  return (
    <section className='relative w-full min-h-screen pt-28 pb-16 flex items-center bg-radial-vignette bg-grid-pattern'>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full`}>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
          {/* Left Column: Black & White Typography with Interesting Accents */}
          <div className='lg:col-span-7 flex flex-col items-start'>
            {/* Live Status Pill */}
            <div className='inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium mb-5 shadow-sm'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500' />
              </span>
              <span>Available for Enterprise AI & Automation Roles</span>
            </div>

            {/* Name & Headline */}
            <h1 className='text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]'>
              Akhona <span className='silver-text-gradient'>Mkhatshwa</span>
            </h1>

            <p className='mt-3 text-lg sm:text-xl font-semibold text-white/90'>
              AI Specialist & Enterprise Automation Engineer
            </p>

            <p className='mt-4 text-secondary text-sm sm:text-base max-w-xl leading-relaxed'>
              Extensive expertise in enterprise AI automation, designing and deploying agentic workflows, RAG systems, and multi-agent coordination architectures (MCP, LangChain, Claude APIs). Proven success across top-tier regulated financial environments.
            </p>

            {/* Interesting Accent Credential Chips */}
            <div className='mt-6 flex flex-wrap gap-2.5'>
              <div className='px-3 py-1.5 rounded-lg bg-black-100 border border-white/10 text-xs font-medium flex items-center gap-2 hover:border-emerald-500/50 transition-colors'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />
                <span className='text-white/90'>Agentic AI & MCP</span>
              </div>
              <div className='px-3 py-1.5 rounded-lg bg-black-100 border border-white/10 text-xs font-medium flex items-center gap-2 hover:border-cyan-500/50 transition-colors'>
                <span className='w-1.5 h-1.5 rounded-full bg-cyan-400' />
                <span className='text-white/90'>RAG & Vector Systems</span>
              </div>
              <div className='px-3 py-1.5 rounded-lg bg-black-100 border border-white/10 text-xs font-medium flex items-center gap-2 hover:border-purple-500/50 transition-colors'>
                <span className='w-1.5 h-1.5 rounded-full bg-purple-400' />
                <span className='text-white/90'>Multi-Cloud (Azure • AWS • OCI)</span>
              </div>
              <div className='px-3 py-1.5 rounded-lg bg-black-100 border border-white/10 text-xs font-medium flex items-center gap-2 hover:border-amber-500/50 transition-colors'>
                <span className='w-1.5 h-1.5 rounded-full bg-amber-400' />
                <span className='text-white/90'>Regulated FinTech Automation</span>
              </div>
            </div>

            {/* CTAs: High-Contrast Black & White with Interesting Hover Highlights */}
            <div className='mt-8 flex flex-wrap items-center gap-3.5'>
              <a
                href='#work'
                className='px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02]'
              >
                Explore Experience
              </a>
              <a
                href='#skills'
                className='px-6 py-3 rounded-xl bg-black-100 text-white font-semibold text-sm border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all'
              >
                Skills & Tech Stack
              </a>
              <a
                href='#contact'
                className='px-5 py-3 rounded-xl text-secondary hover:text-white font-semibold text-sm transition-colors flex items-center gap-1.5'
              >
                Contact Me <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Monochrome AI Architecture Console (Replaces Web3 Computer) */}
          <div className='lg:col-span-5 w-full'>
            <div className='rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden'>
              {/* Terminal Window Header */}
              <div className='px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-[#ff5f56]' />
                  <div className='w-3 h-3 rounded-full bg-[#ffbd2e]' />
                  <div className='w-3 h-3 rounded-full bg-[#27c93f]' />
                  <span className='ml-2 text-xs font-mono text-neutral-400'>
                    ai-orchestrator@akhona:~
                  </span>
                </div>
                <div className='flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20'>
                  <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                  LIVE
                </div>
              </div>

              {/* Console Tabs */}
              <div className='flex border-b border-white/10 bg-white/[0.01]'>
                <button
                  onClick={() => setActiveTab("agentic")}
                  className={`flex-1 py-2.5 px-3 text-xs font-medium transition-all border-b-2 ${
                    activeTab === "agentic"
                      ? "border-emerald-400 text-white bg-white/[0.04]"
                      : "border-transparent text-neutral-400 hover:text-white"
                  }`}
                >
                  Agentic (MCP)
                </button>
                <button
                  onClick={() => setActiveTab("rag")}
                  className={`flex-1 py-2.5 px-3 text-xs font-medium transition-all border-b-2 ${
                    activeTab === "rag"
                      ? "border-cyan-400 text-white bg-white/[0.04]"
                      : "border-transparent text-neutral-400 hover:text-white"
                  }`}
                >
                  RAG System
                </button>
                <button
                  onClick={() => setActiveTab("automation")}
                  className={`flex-1 py-2.5 px-3 text-xs font-medium transition-all border-b-2 ${
                    activeTab === "automation"
                      ? "border-purple-400 text-white bg-white/[0.04]"
                      : "border-transparent text-neutral-400 hover:text-white"
                  }`}
                >
                  Enterprise Flow
                </button>
              </div>

              {/* Code / Architecture Display */}
              <div className='p-5'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='text-xs font-semibold text-white'>
                    {architectureDetails[activeTab].title}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${architectureDetails[activeTab].badgeColor}`}
                  >
                    {architectureDetails[activeTab].badge}
                  </span>
                </div>

                <pre className='p-4 rounded-xl bg-black-200 border border-white/5 text-[11.5px] font-mono text-neutral-300 overflow-x-auto leading-relaxed'>
                  <code>{architectureDetails[activeTab].code}</code>
                </pre>

                {/* Telemetry Metrics Bar */}
                <div className='grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center'>
                  <div className='p-2 rounded-lg bg-white/[0.02] border border-white/5'>
                    <p className='text-[10px] text-neutral-400'>Architecture</p>
                    <p className='text-xs font-bold text-white mt-0.5'>MCP & RAG</p>
                  </div>
                  <div className='p-2 rounded-lg bg-white/[0.02] border border-white/5'>
                    <p className='text-[10px] text-neutral-400'>Environments</p>
                    <p className='text-xs font-bold text-emerald-400 mt-0.5'>Top-Tier Banks</p>
                  </div>
                  <div className='p-2 rounded-lg bg-white/[0.02] border border-white/5'>
                    <p className='text-[10px] text-neutral-400'>Multi-Cloud</p>
                    <p className='text-xs font-bold text-cyan-400 mt-0.5'>Azure•AWS•OCI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

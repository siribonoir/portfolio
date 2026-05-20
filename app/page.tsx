"use client";

import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Next.js",      glyph: "⬡", level: 90 },
  { name: "AI / Bots",   glyph: "◈", level: 88 },
  { name: "UI / UX",     glyph: "◎", level: 85 },
  { name: "Python",       glyph: "◆", level: 80 },
  { name: "Excel",        glyph: "◉", level: 75 },
  { name: "C",            glyph: "◇", level: 60 },
  { name: "Antigravity",  glyph: "↑", level: 99 },
];

const PROJECTS = [
  {
    icon: "🤖",
    title: "AI Chat Bot",
    desc: "Telegram üçün NLP dəstəkli bot. İstifadəçi sorğularını anlayır, kontekstli cavab verir.",
    tags: ["Python", "AI", "Telegram API"],
    href: "https://github.com/siribonoir",
  },
  {
    icon: "⚡",
    title: "Avtomatlaşdırma Sistemi",
    desc: "Təkrarlanan iş axışlarını avtomatlaşdıran pipeline. Manual vaxtı 70% azaldır.",
    tags: ["Python", "Automation", "REST API"],
    href: "https://github.com/siribonoir",
  },
  {
    icon: "◎",
    title: "Design System",
    desc: "UI/UX komponent kitabxanası. Tutarlı dizayn dili, sürətli prototipləşdirmə.",
    tags: ["Next.js", "UI/UX", "Tailwind"],
    href: "https://github.com/siribonoir",
  },
];

const ABOUT_STATS = [
  { label: "Universitet",    val: "SDU — Kompüter Mühəndisliyi" },
  { label: "Fokus",          val: "AI Botlar & Avtomatlaşdırma" },
  { label: "Email",          val: "italibov12@gmail.com" },
  { label: "GitHub",         val: "github.com/siribonoir" },
  { label: "Yer",            val: "Sumqayıt, Azərbaycan" },
];

export default function Home() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const fullText = "developer & designer";

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`;
      }
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTyped(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, 55);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {/* Ambient bg */}
      <div className="grid-bg" />
      <div className="blob" ref={blobRef} />

      {/* Nav */}
      <nav className="nav">
        <a href="#" className="nav-logo">siribo</a>
        <div className="nav-links">
          {["haqqımda", "bacarıqlar", "layihələr", "əlaqə"].map((s) => (
            <a key={s} href={`#${s}`} className="nav-link">{s}</a>
          ))}
          <a
            href="https://github.com/siribonoir"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: "8px 16px", fontSize: 13 }}
          >
            GitHub →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow fade-up">Sumqayıt Dövlət Universiteti · KM</p>

          <h1 className="hero-name fade-up delay-1">
            Talıbov<br />
            <span className="line2">İbrahim</span>
          </h1>

          <p className="hero-role fade-up delay-2">
            <span style={{ fontFamily: "DM Mono, monospace", color: "var(--accent)" }}>&gt;&nbsp;</span>
            {typed}
            <span className="cursor">|</span>
          </p>

          <p className="hero-desc fade-up delay-3">
            Hər layihəni texniki baxışla deyil, istifadəçiyönümlü yanaşımla hazırlayıram.
            Proqram sadəcə işləmir — istifadəçiyə rahatlıq yaradır.
            Son 1 ildə <strong style={{ color: "var(--text)", fontWeight: 600 }}>AI dəstəkli botlar</strong> və
            avtomatlaşdırma sistemləri üzərindəyəm.
          </p>

          <div className="hero-cta fade-up delay-4">
            <a href="https://github.com/siribonoir" target="_blank" rel="noreferrer" className="btn-primary">
              GitHub profilim →
            </a>
            <a href="#əlaqə" className="btn-ghost">
              Əlaqə yaz
            </a>
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── ABOUT ── */}
      <section className="section" id="haqqımda">
        <div className="container">
          <div className="section-tag">haqqımda</div>
          <div className="about-grid">
            <div>
              <h2 className="section-title">
                Texniki baxışla deyil,<br />
                <span style={{ color: "var(--accent)" }}>insanı düşünərək</span>
              </h2>
              <p style={{ color: "var(--text2)", lineHeight: 1.8, fontSize: 15 }}>
                UI/UX biliyim hər proyektdə öz əksini tapır. Proqram
                sadəcə çalışmamalıdır — istifadəçi onu anlayıb sevməlidir.
                Avtomatlaşdırma ilə iş proseslərini sadələşdirmək, AI ilə
                ağıllı həllər qurmaq — mənim yanaşımım budur.
              </p>
            </div>
            <div>
              {ABOUT_STATS.map(({ label, val }) => (
                <div key={label} className="about-stat">
                  <span className="about-stat-label">{label}</span>
                  <span className="about-stat-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── SKILLS ── */}
      <section className="section" id="bacarıqlar">
        <div className="container">
          <div className="section-tag">bacarıqlar</div>
          <h2 className="section-title">Nə bilirəm</h2>
          <div className="skills-grid">
            {SKILLS.map((sk) => (
              <div key={sk.name} className="skill-card">
                <span className="skill-glyph">{sk.glyph}</span>
                <div className="skill-name">{sk.name}</div>
                <div className="skill-bar-bg">
                  <div className="skill-bar" style={{ width: `${sk.level}%` }} />
                </div>
                <div className="skill-pct">{sk.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── PROJECTS ── */}
      <section className="section" id="layihələr">
        <div className="container">
          <div className="section-tag">layihələr</div>
          <h2 className="section-title">Nə etmişəm</h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="project-card">
                <div className="project-icon">{p.icon}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 40px" }} />

      {/* ── CONTACT ── */}
      <section className="section" id="əlaqə">
        <div className="container">
          <div className="contact-box">
            <div className="avatar">İT</div>
            <div className="section-tag" style={{ justifyContent: "center" }}>əlaqə</div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-2px", marginBottom: 14, lineHeight: 1.1 }}>
              Birlikdə nəsə<br />
              <span style={{ color: "var(--accent)" }}>düzəldək?</span>
            </h2>
            <p style={{ color: "var(--text2)", fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
              Layihə, əməkdaşlıq ya da sadəcə salam üçün yaz.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:italibov12@gmail.com" className="btn-primary" style={{ fontSize: 15 }}>
                italibov12@gmail.com →
              </a>
              <a
                href="https://github.com/siribonoir"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
                style={{ fontSize: 15 }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-text">© 2025 siribo</span>
        <span className="footer-text">made with ♥ in Sumqayıt</span>
      </footer>
    </>
  );
}

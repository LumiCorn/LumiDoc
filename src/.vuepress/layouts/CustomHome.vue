<template>
  <div ref="rootEl" class="page-root">
    <!-- Particle canvas -->
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>

    <!-- Nav — outside home-root so position:fixed sticks to viewport -->
    <nav class="top-nav">
      <div class="nav-left">
        <img src="/LumiDoc_LOGO.svg" alt="Logo" class="nav-logo-img" />
        <a href="/" class="nav-logo-text">Lumi<span>Doc</span></a>
      </div>
      <div class="nav-center">
        <a href="/menu">目录</a>
        <a href="https://space.bilibili.com/234052228" target="_blank">B 站</a>
      </div>
      <div class="nav-right">
        <span class="nav-sub">悠悠狮羝 LumiCornX</span>
      </div>
    </nav>

    <div class="home-root">
      <div class="app-inner">
        <!-- Hero -->
        <section class="hero">
          <div class="orb orb-a"></div>
          <div class="orb orb-b"></div>
          <div class="orb orb-c"></div>

          <div class="hero-badge">
            <span class="dot"></span>文档聚合平台
          </div>

          <h1 class="hero-title">
            <span class="hero-title-text">LumiDoc</span>
          </h1>

          <p class="hero-tagline">
            一个由 <strong>悠悠狮羝LumiCornX</strong> 建立的文档聚合网站。
          </p>

          <a href="./menu" class="hero-cta">
            查看目录 <span class="arrow">→</span>
          </a>

          <div class="scroll-line-wrap">
            <span>向下探索</span>
            <div class="scroll-line"></div>
          </div>
        </section>

        <div class="divider"></div>

        <!-- Section 1: AI 提示词仓库 -->
        <section class="section" data-section="1">
          <div class="section-num">01</div>
          <h2 class="section-title">
            AI 提示词仓库
            <svg class="star-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L19.6 12.4H29.6L21.9 18.1L24.9 27.5L16 22L7.1 27.5L10.1 18.1L2.4 12.4H12.4Z"
                fill="#fde047" stroke="#fde047" stroke-width="1" stroke-linejoin="round"/>
            </svg>
          </h2>
          <p class="section-desc">精心整理的提示词库，让 AI 成为你最得力的创作伙伴。</p>
          <div class="grid-highlights">
            <div class="h-card">
              <div class="h-icon">
                <iconify-icon icon="ic:baseline-psychology" width="24"></iconify-icon>
              </div>
              <div class="h-body">利用大语言模型（LLM）提升内容创作效率，激发无限灵感。</div>
            </div>
            <div class="h-card">
              <div class="h-icon">
                <iconify-icon icon="ic:outline-auto-awesome" width="24"></iconify-icon>
              </div>
              <div class="h-body">通过高质量提示词，让 AI 更智能地助力你的写作与创意。</div>
            </div>
          </div>
        </section>

        <div class="divider"></div>

        <!-- Section 2: 工具/软件/教程/文档 -->
        <section class="section" data-section="2">
          <div class="section-num">02</div>
          <h2 class="section-title">工具 · 软件 · 教程 · 文档</h2>
          <p class="section-desc">精选全网优质 App、有趣的 PPT 资源，以及许多难以发现的优质文章，助你高效获取实用内容。</p>
          <div class="grid-features">
            <div class="f-card">
              <iconify-icon icon="ic:baseline-handyman" class="f-icon" width="32"></iconify-icon>
              <div class="f-title">效率工具</div>
              <div class="f-body">在 Windows 或安卓上的工具合集</div>
            </div>
            <div class="f-card">
              <iconify-icon icon="ic:round-app-shortcut" class="f-icon" width="32"></iconify-icon>
              <div class="f-title">优质 App 推荐</div>
              <div class="f-body">推荐好用但不一定贵的有趣 App</div>
            </div>
            <div class="f-card">
              <iconify-icon icon="ic:outline-document-scanner" class="f-icon" width="32"></iconify-icon>
              <div class="f-title">高清晰度文档</div>
              <div class="f-body">是逻辑清晰，不是 4K 高清</div>
            </div>
            <div class="f-card">
              <iconify-icon icon="ic:baseline-accessibility-new" class="f-icon" width="32"></iconify-icon>
              <div class="f-title">亲妈级教程</div>
              <div class="f-body">Lifehack! 一切因教程变得简单</div>
            </div>
            <div class="f-card">
              <iconify-icon icon="ic:round-school" class="f-icon" width="32"></iconify-icon>
              <div class="f-title">学习资料</div>
              <div class="f-body">祝你学业有成，早日上岸！</div>
            </div>
          </div>
        </section>

        <div class="divider"></div>

        <!-- Section 3: QQ 群 -->
        <section class="section" data-section="3">
          <div class="section-num">03</div>
          <h2 class="section-title">QQ 粉丝群</h2>
          <p class="section-desc">与粉丝群有关的一切会丢在这里。</p>
          <div class="grid-highlights">
            <div class="h-card">
              <div class="h-icon">
                <iconify-icon icon="ic:baseline-account-balance" width="24"></iconify-icon>
              </div>
              <div class="h-title">群规则</div>
              <div class="h-body">所有粉丝群都应该遵守的规则。</div>
            </div>
            <div class="h-card">
              <div class="h-icon">
                <iconify-icon icon="ic:baseline-format-list-bulleted" width="24"></iconify-icon>
              </div>
              <div class="h-title">群列表</div>
              <div class="h-body">所有 QQ 粉丝群的加群方式都在这里。</div>
            </div>
            <div class="h-card">
              <div class="h-icon">
                <iconify-icon icon="ic:baseline-more-horiz" width="24"></iconify-icon>
              </div>
              <div class="h-title">更多</div>
              <div class="h-body">其他平台的粉丝群、管理员职务等。</div>
            </div>
          </div>
        </section>

        <div class="divider"></div>

        <!-- Section 4: 关于 -->
        <section class="section" data-section="4">
          <div class="section-num">04</div>
          <h2 class="section-title">关于 悠悠狮羝LumiCornX</h2>
          <p class="section-desc">一个自强的小男孩。</p>
          <div class="grid-highlights" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));">
            <div class="h-card">
              <div class="h-icon"><iconify-icon icon="ic:baseline-account-circle" width="24"></iconify-icon></div>
              <div class="h-title">入驻平台账号</div>
            </div>
            <div class="h-card">
              <div class="h-icon"><iconify-icon icon="ic:baseline-face-retouching-natural" width="24"></iconify-icon></div>
              <div class="h-title">随笔</div>
            </div>
            <div class="h-card">
              <div class="h-icon"><iconify-icon icon="ic:outline-attach-money" width="24"></iconify-icon></div>
              <div class="h-title">向我捐款</div>
            </div>
            <div class="h-card">
              <div class="h-icon"><iconify-icon icon="ic:round-settings-accessibility" width="24"></iconify-icon></div>
              <div class="h-title">Furry 设定</div>
            </div>
            <div class="h-card">
              <div class="h-icon"><iconify-icon icon="ic:baseline-more-horiz" width="24"></iconify-icon></div>
              <div class="h-title">更多</div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer>
          <div class="foot-logo">Lumi<span>Doc</span></div>
          <p class="foot-copy">&copy;2025-至今 悠悠狮羝LumiCornX 保留所有权利</p>
          <p class="foot-info">使用 VuePress 制作 | 采用 Hope 主题 | 文档受原创性保护。CC BY-NC，内容转载需注明原链接。</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rootEl = ref<HTMLElement | null>(null)
const bgCanvas = ref<HTMLCanvasElement | null>(null)
let ctx: gsap.Context | null = null
let animFrameId = 0

onMounted(() => {
  if (!rootEl.value) return

  initParticles()

  ctx = gsap.context(() => {
    initAnimations()
  }, rootEl.value)
})

onUnmounted(() => {
  cancelAnimationFrame(animFrameId)
  ctx?.revert()
})

function initParticles() {
  const canvas = bgCanvas.value
  if (!canvas) return
  const c = canvas.getContext('2d')
  if (!c) return

  function resize() {
    canvas!.width = window.innerWidth
    canvas!.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const pts = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4 + 0.3,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    a: Math.random() * 0.35 + 0.08,
    c: Math.random() > 0.72 ? '#fde047' : '#8b5cf6',
  }))

  function loop() {
    if (!canvas || !c) return
    c.clearRect(0, 0, canvas.width, canvas.height)
    pts.forEach((p) => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width
      p.y = (p.y + p.vy + canvas.height) % canvas.height
      c.beginPath()
      c.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      c.fillStyle = p.c
      c.globalAlpha = p.a
      c.fill()
    })
    c.globalAlpha = 1
    animFrameId = requestAnimationFrame(loop)
  }
  loop()
}

function initAnimations() {
  // Nav entrance
  gsap.from('.top-nav', {
    opacity: 0, y: -24, duration: 0.9, ease: 'power3.out', delay: 0.05,
  })

  // Hero badge initial state
  gsap.set('.hero-badge', { opacity: 0, y: 18 })

  // Hero sequence timeline
  const tl = gsap.timeline({ delay: 0.3 })

  tl.to('.hero-badge', {
    opacity: 1, y: 0, duration: 0.55, ease: 'power2.out',
  })
    .from('.hero-title', {
      opacity: 0, y: 48, duration: 0.85, ease: 'power3.out',
    }, '-=0.15')
    .from('.hero-tagline', {
      opacity: 0, y: 22, duration: 0.6, ease: 'power2.out',
    }, '-=0.35')
    .from('.hero-cta', {
      opacity: 0, y: 18, scale: 0.94, duration: 0.55, ease: 'back.out(1.8)',
    }, '-=0.3')
    .to('.scroll-line-wrap', {
      opacity: 1, duration: 0.7, ease: 'power1.out',
    }, '-=0.1')

  // Scroll-line pulse
  gsap.to('.scroll-line', {
    scaleY: 0,
    transformOrigin: 'top center',
    duration: 1.4,
    repeat: -1,
    ease: 'power2.inOut',
  })

  // Floating orbs
  gsap.to('.orb-a', {
    x: 40, y: 30, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut',
  })
  gsap.to('.orb-b', {
    x: -30, y: -40, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut',
  })
  gsap.to('.orb-c', {
    x: 20, y: -25, duration: 7.5, repeat: -1, yoyo: true, ease: 'sine.inOut',
  })

  // Section reveals on scroll
  gsap.utils.toArray<HTMLElement>('[data-section]').forEach((sec) => {
    const num = sec.querySelector('.section-num')
    const title = sec.querySelector('.section-title')
    const desc = sec.querySelector('.section-desc')
    const cards = gsap.utils.toArray<HTMLElement>(sec.querySelectorAll('.h-card, .f-card'))

    if (num) gsap.set(num, { opacity: 0, x: -16 })
    if (title) gsap.set(title, { opacity: 0, y: 24 })
    if (desc) gsap.set(desc, { opacity: 0, y: 16 })
    cards.forEach(c => gsap.set(c, { opacity: 0, y: 32 }))

    const stl = gsap.timeline({
      scrollTrigger: {
        trigger: sec,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })

    if (num) stl.to(num, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' })
    if (title) stl.to(title, { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }, '-=0.15')
    if (desc) stl.to(desc, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    if (cards.length) {
      stl.to(cards, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.09, ease: 'power2.out',
      }, '-=0.25')
    }
  })

  // Footer
  gsap.set('footer', { opacity: 0, y: 20 })
  gsap.to('footer', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
    scrollTrigger: { trigger: 'footer', start: 'top 90%', toggleActions: 'play none none none' },
  })

  // Card hover glow
  gsap.utils.toArray<HTMLElement>('.h-card, .f-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { boxShadow: '0 0 28px rgba(139,92,246,0.18)', duration: 0.3 })
    })
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { boxShadow: '0 0 0px rgba(139,92,246,0)', duration: 0.4 })
    })
  })

  // Refresh ScrollTrigger to ensure correct measurements
  ScrollTrigger.refresh()
}
</script>

<style>
/* ==============================================
   Reset & Root
   ============================================== */
*, *::before, *::after { box-sizing: border-box; }

.page-root {
  --bg:         #07030f;
  --surface:    #110921;
  --surface-2:  #1b1232;
  --purple-900: #1a0533;
  --purple-700: #4a1a8a;
  --purple-600: #6b2fbe;
  --purple-500: #8b5cf6;
  --purple-400: #a78bfa;
  --purple-300: #c4b5fd;
  --yellow-400: #fde047;
  --yellow-500: #eab308;
  --text:       #ede8f9;
  --text-muted: #9b87c1;
  --border:     rgba(139,92,246,0.18);

  background: var(--bg);
  color: var(--text);
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  min-height: 100vh;
}

/* ==============================================
   Canvas
   ============================================== */
.bg-canvas {
  position: fixed; inset: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
}

.home-root { position: relative; z-index: 1; }
.app-inner { position: relative; }

/* ==============================================
   Nav
   ============================================== */
.top-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.8rem 3rem;
  backdrop-filter: blur(16px);
  background: rgba(7,3,15,0.55);
  border-bottom: 1px solid var(--border);
}

.nav-left {
  display: flex; align-items: center; gap: 0.6rem;
}

.nav-logo-img {
  width: 28px; height: 28px;
}

.nav-logo-text {
  font-family: 'Cinzel', serif;
  font-size: 1.35rem; font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--purple-400);
  text-decoration: none;
}

.nav-logo-text span { color: var(--yellow-400); }

.nav-center {
  display: flex; gap: 1.5rem;
  position: absolute; left: 50%; transform: translateX(-50%);
}

.nav-center a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-center a:hover { color: var(--text); }

.nav-right {
  display: flex; align-items: center;
}

.nav-sub {
  font-size: 0.8rem; color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* ==============================================
   Hero
   ============================================== */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  padding: 8rem 2rem 7rem;
  position: relative; overflow: hidden;
}

.orb {
  position: absolute; border-radius: 50%;
  filter: blur(90px); pointer-events: none;
}

.orb-a {
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(107,47,190,0.18) 0%, transparent 70%);
  top: -250px; left: -200px;
}

.orb-b {
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(253,224,71,0.08) 0%, transparent 70%);
  bottom: -100px; right: -100px;
}

.orb-c {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%);
  bottom: 20%; left: 5%;
}

.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(139,92,246,0.12);
  border: 1px solid rgba(139,92,246,0.28);
  border-radius: 50px; padding: 0.35rem 1rem;
  font-size: 0.78rem; color: var(--purple-300);
  letter-spacing: 0.08em; margin-bottom: 2.2rem;
}

.hero-badge .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--yellow-400);
  box-shadow: 0 0 6px var(--yellow-400);
}

.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(4.5rem, 13vw, 10rem);
  font-weight: 700; line-height: 0.95;
  letter-spacing: -0.01em;
  margin-bottom: 1.6rem;
}

.hero-title-text {
  background: linear-gradient(135deg, #c4b5fd 0%, #a78bfa 45%, #fde047 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text; display: block;
}

.hero-tagline {
  font-size: 1.05rem; color: var(--text-muted);
  max-width: 440px; margin: 0 auto 2.8rem;
  font-weight: 300;
}

.hero-tagline strong { color: var(--yellow-400); font-weight: 500; }

.hero-cta {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: var(--yellow-400); color: #1a0533;
  padding: 0.9rem 2.2rem; border-radius: 50px;
  font-weight: 700; font-size: 0.95rem;
  text-decoration: none; letter-spacing: 0.03em;
  transition: transform 0.25s, box-shadow 0.25s;
}

.hero-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(253,224,71,0.38);
}

.hero-cta .arrow { display: inline-block; transition: transform 0.22s; }

.hero-cta:hover .arrow { transform: translateX(5px); }

.scroll-line-wrap {
  position: absolute; bottom: 2.5rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column;
  align-items: center; gap: 0.6rem;
  color: var(--text-muted); font-size: 0.7rem;
  letter-spacing: 0.12em;
  opacity: 0;
}

.scroll-line {
  width: 1px; height: 44px;
  background: linear-gradient(180deg, var(--purple-500), transparent);
  transform-origin: top;
}

/* ==============================================
   Divider
   ============================================== */
.divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--purple-700) 30%, var(--purple-700) 70%, transparent 100%);
  opacity: 0.4;
}

/* ==============================================
   Sections
   ============================================== */
.section {
  max-width: 1100px; margin: 0 auto;
  padding: 6rem 2rem;
}

.section-num {
  font-size: 0.72rem; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--yellow-400); margin-bottom: 0.8rem;
}

.section-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  font-weight: 700; color: var(--text);
  margin-bottom: 0.9rem;
  display: flex; align-items: center; gap: 0.7rem;
}

.section-desc {
  font-size: 0.95rem; color: var(--text-muted);
  max-width: 580px; margin-bottom: 2.8rem;
  font-weight: 300;
}

/* ==============================================
   Highlight cards (S1, S3, S4)
   ============================================== */
.grid-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.4rem;
}

.h-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px; padding: 1.75rem;
  position: relative; overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
}

.h-card::after {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--purple-500), var(--yellow-500));
  opacity: 0; transition: opacity 0.3s;
}

.h-card:hover { border-color: rgba(139,92,246,0.45); transform: translateY(-5px); }
.h-card:hover::after { opacity: 1; }

.h-icon {
  width: 44px; height: 44px;
  background: rgba(139,92,246,0.14);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: var(--purple-400); font-size: 1.35rem;
  margin-bottom: 1rem;
}

.h-title {
  font-weight: 600; font-size: 1rem;
  color: var(--text); margin-bottom: 0.35rem;
}

.h-body { font-size: 0.88rem; color: var(--text-muted); line-height: 1.65; }

/* ==============================================
   Feature cards (S2)
   ============================================== */
.grid-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 1.2rem;
}

.f-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 14px; padding: 1.6rem 1.2rem;
  text-align: center;
  transition: border-color 0.3s, transform 0.3s, background 0.3s;
}

.f-card:hover {
  background: var(--surface);
  border-color: rgba(253,224,71,0.28);
  transform: translateY(-4px);
}

.f-icon {
  color: var(--yellow-400);
  font-size: 2rem; margin-bottom: 0.8rem; display: block;
}

.f-title { font-size: 0.9rem; font-weight: 600; color: var(--text); margin-bottom: 0.5rem; }

.f-body  { font-size: 0.78rem; color: var(--text-muted); line-height: 1.55; }

/* ==============================================
   Star SVG for S1
   ============================================== */
.star-icon { width: 2rem; height: 2rem; flex-shrink: 0; }

.grid-highlights, .grid-features { width: 100%; }

/* ==============================================
   Footer
   ============================================== */
footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 3.5rem 2rem; text-align: center;
}

.foot-logo {
  font-family: 'Cinzel', serif;
  font-size: 1.7rem; font-weight: 700;
  color: var(--purple-400); margin-bottom: 1.1rem;
}

.foot-logo span { color: var(--yellow-400); }

.foot-copy { font-size: 0.85rem; color: var(--text-muted); margin: 0 0 0.4rem; }

.foot-info { font-size: 0.78rem; color: rgba(155,135,193,0.55); margin: 0; }

/* ==============================================
   Responsive
   ============================================== */
@media (max-width: 600px) {
  .top-nav { padding: 0.8rem 1.25rem; }
  .nav-center { position: static; transform: none; }
  .nav-right { display: none; }
  .section { padding: 4rem 1.25rem; }
}
</style>

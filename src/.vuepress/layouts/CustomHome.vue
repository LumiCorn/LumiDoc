<template>
  <div class="home-root">
    <!-- Navbar -->
    <nav class="top-nav">
      <a class="nav-brand" href="/">
        <img src="/LumiDoc_LOGO.svg" alt="Logo" class="nav-logo" />
        <span class="nav-name">LumiDoc</span>
      </a>
      <div class="nav-links">
        <a href="/" class="nav-link active">首页</a>
        <a href="/menu" class="nav-link">目录</a>
        <a href="https://space.bilibili.com/234052228" class="nav-link" target="_blank">B 站</a>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg-glow"></div>
      <img class="hero-logo" src="/LumiDoc_LOGO.svg" alt="LumiDoc Logo" />
      <h1 class="hero-title">
        <span class="gradient-text">LumiDoc</span>
      </h1>
      <p class="hero-tagline">一个由 悠悠狮羝LumiCornX 建立的文档聚合网站。</p>
      <a class="hero-cta" href="./menu">
        查看目录
        <span class="arrow">→</span>
      </a>
    </section>

    <!-- AI 提示词仓库 -->
    <section class="card card-ai">
      <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"/></svg></div>
      <h2 class="card-title">AI 提示词仓库</h2>
      <ul class="card-list">
        <li>利用大语言模型（LLM）提升内容创作效率，激发无限灵感。</li>
        <li>通过高质量提示词，让 AI 更智能地助力你的写作与创意。</li>
      </ul>
    </section>

    <!-- 工具/软件/教程/文档分享 -->
    <section class="card card-tools">
      <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M5.71 15.71l4.58 4.58l-1.42 1.42l-4.58-4.58zm12.58-1.42l-4.58-4.58l1.42-1.42l4.58 4.58zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg></div>
      <h2 class="card-title">工具 / 软件 / 教程 / 文档分享</h2>
      <p class="card-desc">精选全网优质 App、有趣的 PPT 资源，以及许多难以发现的优质文章，助你高效获取实用内容。</p>
      <div class="card-grid">
        <div class="chip">效率工具 <small>在 Windows 或安卓上的工具合集</small></div>
        <div class="chip">优质 App 推荐 <small>推荐一些好用但不一定贵的有趣 App</small></div>
        <div class="chip">高清晰度文档 <small>清晰的文档（是逻辑清晰不是 4K 高清）</small></div>
        <div class="chip">亲妈级教程 <small>Lifehack! 一切因教程变得简单</small></div>
        <div class="chip">学习资料 <small>祝你学业有成，早日上岸！</small></div>
      </div>
    </section>

    <!-- QQ 群 -->
    <section class="card card-qq">
      <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
      <h2 class="card-title">QQ 群</h2>
      <p class="card-desc">与粉丝群有关的一切会丢在这里。</p>
      <div class="card-grid">
        <div class="chip">群规则 <small>所有粉丝群都应该遵守的规则</small></div>
        <div class="chip">群列表 <small>所有 QQ 粉丝群的加群方式都在这里</small></div>
        <div class="chip">更多 <small>其他平台的粉丝群、管理员职务等</small></div>
      </div>
    </section>

    <!-- 关于 -->
    <section class="card card-about">
      <div class="card-icon"><svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>
      <h2 class="card-title">关于 悠悠狮羝LumiCornX</h2>
      <p class="card-desc">一个自强的小男孩。</p>
      <div class="card-grid">
        <div class="chip">入驻平台账号</div>
        <div class="chip">随笔</div>
        <div class="chip">向我捐款</div>
        <div class="chip">Furry 设定</div>
        <div class="chip">更多</div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy;2025-至今 悠悠狮羝LumiCornX 保留所有权利</p>
      <p class="footer-sub">使用 VuePress 制作 | 采用 Hope 主题 | 文档受原创性保护。CC BY-NC，内容转载需注明原链接。</p>
    </footer>
  </div>
</template>

<style>
/* ==============================================
   Root
   ============================================== */
.home-root {
  --purple: #bf1191;
  --purple-light: #d44faa;
  --gold: #e8b730;
  --gold-light: #f5d06b;
  --bg-deep: #07060c;
  --bg-card: rgba(255, 255, 255, 0.03);
  --border-card: rgba(255, 255, 255, 0.07);
  --text-primary: #e4e0ec;
  --text-secondary: #958ea5;

  min-height: 100vh;
  background: var(--bg-deep);
  color: var(--text-primary);
  font-family: "HarmonyOS Sans", "PingFang SC", "Microsoft YaHei", sans-serif;
  overflow-x: hidden;
}

/* ==============================================
   Top navbar
   ============================================== */
.top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 56px;
  background: rgba(7, 6, 12, 0.72);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.05rem;
}

.nav-logo { width: 28px; height: 28px; }

.nav-links { display: flex; gap: 8px; }

.nav-link {
  padding: 6px 16px;
  border-radius: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

/* ==============================================
   Hero
   ============================================== */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 24px 60px;
  text-align: center;
  overflow: hidden;
}

.hero-bg-glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 17, 145, 0.18) 0%,
    rgba(191, 17, 145, 0.06) 40%,
    transparent 70%
  );
  pointer-events: none;
}

.hero-logo {
  width: 100px;
  height: 100px;
  margin-bottom: 28px;
  filter: drop-shadow(0 0 24px rgba(191, 17, 145, 0.4));
  animation: logo-float 4s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes logo-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin: 0 0 16px;
  position: relative;
  z-index: 1;
}

.gradient-text {
  background: linear-gradient(
    135deg,
    var(--purple-light) 0%,
    var(--purple) 30%,
    var(--gold) 70%,
    var(--gold-light) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0 0 36px;
  max-width: 480px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 36px;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--purple), var(--purple-light));
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 20px rgba(191, 17, 145, 0.35);
  position: relative;
  z-index: 1;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(191, 17, 145, 0.5);
}

.arrow {
  font-size: 1.2em;
  transition: transform 0.2s ease;
}

.hero-cta:hover .arrow { transform: translateX(4px); }

/* ==============================================
   Cards
   ============================================== */
.card {
  margin: 0 auto 24px;
  max-width: 720px;
  padding: 36px 40px;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  border-color: rgba(191, 17, 145, 0.25);
  box-shadow: 0 0 40px rgba(191, 17, 145, 0.08);
  transform: translateY(-2px);
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgba(191, 17, 145, 0.15), rgba(232, 183, 48, 0.1));
  color: var(--purple-light);
}

.card-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text-primary);
}

.card-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0 0 24px;
  line-height: 1.6;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-list li {
  position: relative;
  padding-left: 20px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.chip {
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.9rem;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.chip:hover {
  border-color: rgba(232, 183, 48, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.chip small {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

/* Per-card accent */
.card-ai:hover    { border-color: rgba(191, 17, 145, 0.3); }
.card-tools:hover { border-color: rgba(100, 160, 240, 0.3); }
.card-qq:hover    { border-color: rgba(100, 200, 140, 0.3); }
.card-about:hover { border-color: rgba(232, 183, 48, 0.3); }

/* ==============================================
   Footer
   ============================================== */
.footer {
  text-align: center;
  padding: 40px 24px 60px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.8;
  max-width: 720px;
  margin: 0 auto;
}

.footer p { margin: 0; }
.footer-sub { font-size: 0.78rem; opacity: 0.6; }

/* ==============================================
   Responsive
   ============================================== */
@media (max-width: 768px) {
  .top-nav { padding: 0 16px; }
  .hero { padding: 80px 20px 40px; }
  .hero-bg-glow { width: 320px; height: 320px; top: -60px; }
  .hero-logo { width: 72px; height: 72px; }
  .card { padding: 28px 24px; border-radius: 16px; }
  .card-grid { grid-template-columns: 1fr; }
}
</style>

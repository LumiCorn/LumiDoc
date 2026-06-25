<script setup lang="ts">
import { useRoutes } from "vuepress/client";
import { computed } from "vue";

interface RouteEntry {
  loader: () => Promise<{ _pageData?: { title?: string } }>;
  meta: Record<string, unknown>;
}

interface DocItem {
  title: string;
  path: string;
}

interface FolderNode {
  name: string;
  docs: DocItem[];
  folders: FolderNode[];
}

const routes = useRoutes();

function deriveTitle(path: string): string {
  const decoded = decodeURIComponent(path);
  const segments = decoded.replace(/\.html$/, "").split("/").filter(Boolean);
  const last = segments[segments.length - 1] || "";
  return last.replace(/^\d+\.\s*/, "") || last;
}

const tree = computed<FolderNode[]>(() => {
  const root: FolderNode = { name: "", docs: [], folders: [] };

  for (const [path, route] of Object.entries(routes.value)) {
    // Exclude special pages
    if (path === "/" || path === "/404.html") continue;
    if (path === "/menu.html" || path === "/portfolio.html") continue;
    // Exclude auto-generated catalog pages (paths ending with /)
    if (path.endsWith("/")) continue;

    const decodedPath = decodeURIComponent(path);
    const cleanPath = decodedPath.replace(/\.html$/, "").replace(/^\//, "");
    const segments = cleanPath.split("/");

    if (segments.length === 0) continue;

    const meta = route.meta as { title?: string };
    const title = meta.title || deriveTitle(path);

    insertIntoTree(root, segments, { title, path });
  }

  return root.folders;
});

function insertIntoTree(node: FolderNode, segments: string[], doc: DocItem) {
  if (segments.length === 1) {
    // This is a page directly in this folder
    node.docs.push(doc);
    return;
  }

  // segments.length > 1: there's a subfolder
  const folderName = segments[0];
  const remaining = segments.slice(1);

  let folder = node.folders.find((f) => f.name === folderName);
  if (!folder) {
    folder = { name: folderName, docs: [], folders: [] };
    node.folders.push(folder);
  }

  insertIntoTree(folder, remaining, doc);
}
</script>

<template>
  <div class="menu-root">
    <!-- Navbar -->
    <nav class="top-nav">
      <a class="nav-brand" href="/">
        <img src="/favicon.ico" alt="Logo" class="nav-logo" />
        <span class="nav-name">LumiDoc</span>
      </a>
      <div class="nav-links">
        <a href="/" class="nav-link">首页</a>
        <a href="/menu" class="nav-link active">目录</a>
        <a href="https://space.bilibili.com/234052228" class="nav-link" target="_blank">B 站</a>
      </div>
    </nav>

    <!-- Header -->
    <header class="menu-header">
      <h1 class="menu-title">目录</h1>
      <p class="menu-sub">浏览全部文档</p>
    </header>

    <!-- Tree -->
    <div class="menu-content">
      <FolderGroup v-for="folder in tree" :key="folder.name" :folder="folder" />
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy;2025-至今 悠悠狮羝LumiCornX 保留所有权利</p>
      <p class="footer-sub">使用 VuePress 制作 | 采用 Hope 主题 | CC BY-NC</p>
    </footer>
  </div>
</template>

<!-- Inline recursive sub-component for folder rendering -->
<script lang="ts">
import { defineComponent, h } from "vue";

const FolderGroup = defineComponent({
  name: "FolderGroup",
  props: { folder: { type: Object, required: true } },
  setup(props: any) {
    return () => {
      const f = props.folder;
      const children: any[] = [];

      // Documents in this folder
      for (const doc of f.docs) {
        children.push(
          h(
            "a",
            { class: "doc-capsule", href: doc.path },
            h("span", { class: "doc-capsule-text" }, doc.title)
          )
        );
      }

      // Sub-folders
      for (const sub of f.folders) {
        children.push(
          h(FolderGroup, { folder: sub, key: sub.name })
        );
      }

      return h(
        "div",
        { class: "folder" },
        [
          h("div", { class: "folder-header" }, [
            h("span", { class: "folder-dot" }),
            h("span", { class: "folder-name" }, f.name),
          ]),
          h("div", { class: "folder-body" }, children),
        ]
      );
    };
  },
});

export default {
  components: { FolderGroup },
};
</script>

<style>
/* ==============================================
   Root
   ============================================== */
.menu-root {
  --purple: #bf1191;
  --purple-light: #d44faa;
  --gold: #e8b730;
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
   Header
   ============================================== */
.menu-header {
  text-align: center;
  padding: 64px 24px 40px;
  position: relative;
}

.menu-header::before {
  content: "";
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(191, 17, 145, 0.12) 0%,
    rgba(191, 17, 145, 0.04) 40%,
    transparent 70%
  );
  pointer-events: none;
}

.menu-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin: 0 0 8px;
  background: linear-gradient(135deg, var(--purple-light), var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.menu-sub {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
  position: relative;
}

/* ==============================================
   Tree layout
   ============================================== */
.menu-content {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px 60px;
}

/* ==============================================
   Folder container
   ============================================== */
.folder {
  margin-bottom: 20px;
  border-radius: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.folder:hover {
  border-color: rgba(191, 17, 145, 0.15);
}

.folder-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: default;
  user-select: none;
}

.folder-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--purple);
  flex-shrink: 0;
}

.folder-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.folder-body {
  padding: 12px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Nested folder styles */
.folder .folder {
  margin-bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0.04);
  flex-basis: 100%;
}

.folder .folder .folder-header {
  padding: 12px 18px;
}

.folder .folder .folder-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

.folder .folder .folder-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.folder .folder .folder-body {
  padding: 8px 16px;
}

/* ==============================================
   Document capsule
   ============================================== */
.doc-capsule {
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.doc-capsule:hover {
  color: var(--text-primary);
  border-color: var(--gold);
  background: rgba(232, 183, 48, 0.06);
  box-shadow:
    0 0 12px rgba(232, 183, 48, 0.15),
    0 0 2px rgba(232, 183, 48, 0.3);
}

.doc-capsule-text {
  position: relative;
}

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
  .menu-header { padding: 48px 20px 32px; }
  .menu-content { padding: 0 16px 40px; }
  .folder-header { padding: 14px 18px; }
  .folder-body { padding: 10px 14px; gap: 8px; }
  .doc-capsule { padding: 6px 14px; font-size: 0.84rem; }
}
</style>

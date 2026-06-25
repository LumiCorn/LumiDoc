import type { Plugin } from "@vuepress/core";

export const archiveBannerPlugin: Plugin = {
  name: "vuepress-plugin-archive-banner",

  extendsMarkdown: (md) => {
    // Use core ruler to inject a banner before all other content
    // when the page frontmatter has archive: true
    md.core.ruler.push("archive_banner", (state) => {
      const frontmatter = state.env?.frontmatter as
        | Record<string, unknown>
        | undefined;

      if (frontmatter?.archive !== true) return;

      const note = frontmatter.archiveNote;
      let html = '<div class="archive-banner">';
      html += "<p><strong>📦 归档</strong></p>";

      if (typeof note === "string" && note.trim()) {
        html += `<p>${note}</p>`;
      }

      html += "</div>";

      const token = new state.Token("html_block", "", 0);
      token.content = html;
      token.markup = "";

      // Inject at the very beginning
      state.tokens.unshift(token);
    });
  },
};

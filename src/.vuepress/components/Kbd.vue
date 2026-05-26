<template>
  <kbd class="kbd-key" :title="tooltip">
    <span v-if="symbol" class="kbd-symbol">{{ symbol }}</span>
    <span v-else class="kbd-text">{{ label }}</span>
  </kbd>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/* prettier-ignore */
const MAP: Record<string, { mac?: string; win?: string }> = {
  cmd:       { mac: "⌘", win: "⊞" },
  command:   { mac: "⌘", win: "⊞" },
  win:       { win: "⊞" },
  windows:   { win: "⊞" },
  option:    { mac: "⌥" },
  opt:       { mac: "⌥" },
  alt:       { mac: "⌥" },
  shift:     { mac: "⇧" },
  ctrl:      { mac: "⌃" },
  control:   { mac: "⌃" },
  enter:     { mac: "↵" },
  return:    { mac: "↵" },
  esc:       { mac: "⎋" },
  escape:    { mac: "⎋" },
  tab:       { mac: "⇥" },
  backspace: { mac: "⌫" },
  delete:    { mac: "⌫" },
  del:       { mac: "⌫" },
  space:     { mac: "␣" },
  up:        { mac: "↑" },
  down:      { mac: "↓" },
  left:      { mac: "←" },
  right:     { mac: "→" },
  caps:      { mac: "⇪" },
  capslock:  { mac: "⇪" },
};

export default defineComponent({
  name: "Kbd",
  props: { k: { type: String, default: "" } },
  data() {
    return {
      isMac: false as boolean,
      MAP_OBJ: MAP,
    };
  },
  computed: {
    rawKey(): string {
      return String(this.k || "").toLowerCase().trim();
    },
    entry(): { mac?: string; win?: string } | undefined {
      return MAP[this.rawKey];
    },
    symbol(): string {
      const e = this.entry;
      if (!e) return "";
      if (this.isMac) return e.mac ?? e.win ?? "";
      return e.win ?? e.mac ?? "";
    },
    label(): string {
      if (this.symbol) return "";
      return this.k || "";
    },
    tooltip(): string {
      return this.k;
    },
  },
  mounted() {
    this.isMac =
      /Mac|Macintosh|iPod|iPhone|iPad/i.test(navigator.userAgent) ||
      (navigator.platform || "").toLowerCase().includes("mac");
  },
});
</script>

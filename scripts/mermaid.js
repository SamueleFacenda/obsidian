class MermaidLoader {
  async invoke() {
    try {
      const [mermaidModule, elkModule] = await Promise.all([
        import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs'),
        import('https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs'),
      ]);

      const mermaid = mermaidModule.default;
      const elkLayouts = elkModule.default;

      mermaid.registerLayoutLoaders(elkLayouts);
      mermaid.initialize({ startOnLoad: true });

      // Expose globally
      window.mermaid = mermaid;

      console.log("✅ Mermaid with ELK layouts loaded via CustomJS");
    } catch (err) {
      console.error("❌ Failed to load Mermaid:", err);
    }
  }
}

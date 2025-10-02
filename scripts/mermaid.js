(async () => {
  const mermaid = (await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')).default;
  const elkLayouts = (await import('https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs')).default;

  mermaid.registerLayoutLoaders(elkLayouts);
  window.mermaid = mermaid;
  console.log("✅ Mermaid with ELK layouts loaded!");
})();

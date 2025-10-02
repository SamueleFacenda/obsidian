// (async () => {
//   const mermaid = (await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')).default;
//   const elkLayouts = (await import('https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs')).default;
// 
//   mermaid.registerLayoutLoaders(elkLayouts);
//   window.mermaid = mermaid;
//   console.log("✅ Mermaid with ELK layouts loaded!");
// })();

(function () {
  Promise.all([
    import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs'),
    import('https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs')
  ]).then(([mermaidModule, elkModule]) => {
    const mermaid = mermaidModule.default;
    const elkLayouts = elkModule.default;

    mermaid.registerLayoutLoaders(elkLayouts);
    window.mermaid = mermaid;

    console.log("✅ Mermaid with ELK layouts loaded via CustomJS");
  }).catch(err => {
    console.error("❌ Failed to load Mermaid with ELK layouts:", err);
  });
})();

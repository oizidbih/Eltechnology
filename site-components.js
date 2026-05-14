(() => {
  const navItems = [
    { label: "The Core", href: "agents.html#core" },
    { label: "Agents", href: "agents.html#agent-stack" },
    { label: "Use Cases", href: "use-cases.html#use-cases-stack" },
    { label: "Interface", href: "interface.html#interface-stack" },
    { label: "Contact", href: "landing.html#contact" },
  ];

  const brand = `
    <a href="landing.html" class="brand">
      <span class="mark"></span>
      <span class="word">NAWAAH<em>OS</em></span>
    </a>
  `;

  const links = navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
  const brandBlock = `
    <div>
      ${brand.replace('class="brand"', 'class="brand" style="margin-bottom:18px"')}
      <p style="max-width:24rem">An agentic operating system for the world's most-regulated rooms. Doha · Riyadh · Cologne.</p>
    </div>
  `;

  function renderHeader() {
    document.querySelectorAll("[data-site-header]").forEach((target) => {
      target.classList.add("top");
      target.innerHTML = `
        <div class="nav-inner">
          ${brand}
          <div class="nav-links">${links}</div>
          <div class="nav-cta">
            <button class="btn primary">Request access</button>
          </div>
        </div>
      `;
    });
  }

  function renderFooter() {
    document.querySelectorAll("[data-site-footer]").forEach((target) => {
      target.innerHTML = `
        <div class="wrap">
          <div class="foot">
            ${brandBlock}
            <div>
              <h5>Platform</h5>
              ${links}
            </div>
            <div>
              <h5>Company</h5>
              <a href="#">About</a>
              <a href="#">Manifesto</a>
              <a href="#">Case studies</a>
              <a href="#">Careers · we're hiring</a>
            </div>
            <div>
              <h5>Contact</h5>
              <p>orbit@nawaah.os</p>
              <p>+974 4 · Doha HQ</p>
              <p>+49 221 · Cologne lab</p>
            </div>
          </div>
          <div class="foot-bottom">
            <span>© 2026 NawaahOS · All rights reserved.</span>
            <span class="mono">v2.6.014 · OBSIDIAN · BUILD 0xN4W7</span>
          </div>
        </div>
      `;
    });
  }

  renderHeader();
  renderFooter();
})();

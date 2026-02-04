// app.js (Brand New File)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'; // Kills the "helpful" memory
}

// Global UI Arbiter
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Target the date element
  const dateEl = document.getElementById('current-date');
  
  if (dateEl) {
    const now = new Date();
    const yyyy = now.getFullYear();
    // Months are 0-indexed, so we add 1 and pad with a leading zero
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    
    // Injects the date: 2026.01.23
    dateEl.textContent = `${yyyy}.${mm}.${dd}`;
  }

  // 2. Keep your scroll reset at the top
  window.scrollTo(0, 0);

  // System Status Pulse
  const status = document.getElementById('sys-status');
  const logs = ["INGESTING_DATA", "BUILDING_FORECAST", "CALIBRATING_THRESHOLDS",
  "PIPELINE_ACTIVE", "SYSTEM_READY",
  ];
  let i = 0;
  setInterval(() => {
    status.innerText = logs[i];
    i = (i + 1) % logs.length;
  }, 4000);

  // Theme toggle (default = system preference)
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const getSystemTheme = () => (prefersDark.matches ? 'dark' : 'light');
  const updateToggleLabel = () => {
    if (!themeToggle) return;
    const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
    themeToggle.textContent = current.toUpperCase();
  };

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', storedTheme);
  }
  updateToggleLabel();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleLabel();
    });
  }

  prefersDark.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
      updateToggleLabel();
    }
  });

});

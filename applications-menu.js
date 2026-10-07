(() => {
  const menus = [...document.querySelectorAll('.applications-menu')];
  menus.forEach(menu => {
    const list = menu.querySelector('.applications-list');
    const apps = window.profileApplications;
    if (Array.isArray(apps) && apps.length) {
      list.replaceChildren();
      apps.forEach(app => {
        if (!app.title || typeof app.path !== 'string' || !app.path.startsWith('apps/') || app.path.includes('..')) return;
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = app.title;
        link.href = app.path;
        li.append(link);
        list.append(li);
      });
    }
    menu.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });
    menu.addEventListener('focusout', event => {
      if (!menu.contains(event.relatedTarget)) menu.open = false;
    });
  });
  document.addEventListener('click', event => {
    menus.forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
  });
})();

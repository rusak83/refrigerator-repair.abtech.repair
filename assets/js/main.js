(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  const serviceZips = [
    '98006', '98039', '98040', '98033',
    '98052', '98053', '98074',
    '98027', '98029', '98103',
    '98109', '98112'
  ];

  document.querySelectorAll('.quick-form').forEach(form => {
    const zipInput = form.querySelector('input[name="zip"]');
    const zipError = form.querySelector('.zip-error');

    if (!zipInput) return;

    function clearZipError() {
      zipInput.classList.remove('invalid');
      if (zipError) zipError.textContent = '';
    }

    zipInput.addEventListener('input', clearZipError);

    form.addEventListener('submit', event => {
      const value = (zipInput.value || '').trim();
      if (!value) return;

      if (!serviceZips.includes(value)) {
        event.preventDefault();
        zipInput.classList.add('invalid');
        if (zipError) {
          zipError.textContent = 'Sorry, this ZIP is outside our current service area.';
        }
      }
    });
  });
})();

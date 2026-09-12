(function () {
  const amenityToggle = document.querySelector('[data-amenities-toggle]');
  if (amenityToggle) {
    amenityToggle.addEventListener('click', () => {
      const expanded = amenityToggle.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.amenity-extra').forEach((item) => {
        item.hidden = expanded;
      });
      amenityToggle.setAttribute('aria-expanded', String(!expanded));
      amenityToggle.firstChild.textContent = expanded ? 'Показать все зоны ' : 'Свернуть список ';
    });
  }

  const filterButtons = [...document.querySelectorAll('[data-layout-filter]')];
  const layoutCards = [...document.querySelectorAll('[data-layout]')];
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.layoutFilter;
      filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      layoutCards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.layout !== filter;
      });
    });
  });

  const paymentTabs = [...document.querySelectorAll('[data-payment-tab]')];
  const paymentPanels = [...document.querySelectorAll('[data-payment-panel]')];
  paymentTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selected = tab.dataset.paymentTab;
      paymentTabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });
      paymentPanels.forEach((panel) => {
        const active = panel.dataset.paymentPanel === selected;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    });
  });

  const unitSelect = document.querySelector('[data-calc-unit]');
  const yieldSelect = document.querySelector('[data-calc-yield]');
  const formatAed = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
  const formatUsd = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });

  function updateCalculator() {
    if (!unitSelect || !yieldSelect) return;
    const price = Number(unitSelect.value);
    const rate = Number(yieldSelect.value);
    const booking = price * 0.2;
    const annual = price * rate;
    const monthly = annual / 12;
    const usd = (value) => value / 3.6725;
    document.querySelector('[data-calc-booking]').textContent = `AED ${formatAed.format(booking)}`;
    document.querySelector('[data-calc-booking-usd]').textContent = `≈ $${formatUsd.format(usd(booking))}`;
    document.querySelector('[data-calc-annual]').textContent = `AED ${formatAed.format(annual)}`;
    document.querySelector('[data-calc-annual-usd]').textContent = `≈ $${formatUsd.format(usd(annual))}`;
    document.querySelector('[data-calc-monthly]').textContent = `AED ${formatAed.format(monthly)}`;
    document.querySelector('[data-calc-monthly-usd]').textContent = `≈ $${formatUsd.format(usd(monthly))}`;
  }

  [unitSelect, yieldSelect].forEach((select) => select?.addEventListener('change', updateCalculator));
  updateCalculator();

  const stickyCta = document.querySelector('.mobile-cta');
  if (stickyCta) {
    const updateStickyCta = () => stickyCta.classList.toggle('not-past-hero', window.scrollY < 680);
    window.addEventListener('scroll', updateStickyCta, { passive: true });
    updateStickyCta();
  }
}());

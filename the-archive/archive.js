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

  document.querySelectorAll('[data-card-gallery]').forEach((gallery) => {
    const images = [...gallery.querySelectorAll('img')];
    let index = 0;
    const show = (nextIndex) => {
      index = (nextIndex + images.length) % images.length;
      images.forEach((image, imageIndex) => image.classList.toggle('is-active', imageIndex === index));
    };
    gallery.querySelector('[data-card-prev]')?.addEventListener('click', () => show(index - 1));
    gallery.querySelector('[data-card-next]')?.addEventListener('click', () => show(index + 1));
  });

  const formatAed = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
  const formatUsd = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 });
  const usd = (value) => value / 3.6725;
  const amountText = (value) => `AED ${formatAed.format(value)} · ≈ $${formatUsd.format(usd(value))}`;

  const paymentUnit = document.querySelector('[data-payment-unit]');
  const paymentRates = {
    bookingPlusDld: 0.24,
    construction50: 0.3,
    handover50: 0.5,
    construction60: 0.4,
    post60: 0.4
  };
  const updatePaymentPlans = () => {
    if (!paymentUnit) return;
    const price = Number(paymentUnit.value);
    document.querySelectorAll('[data-payment-amount]').forEach((node) => {
      node.textContent = amountText(price * paymentRates[node.dataset.paymentAmount]);
    });
  };
  paymentUnit?.addEventListener('change', updatePaymentPlans);
  updatePaymentPlans();

  const unitSelect = document.querySelector('[data-calc-unit]');
  const yieldSelect = document.querySelector('[data-calc-yield]');
  function updateCalculator() {
    if (!unitSelect || !yieldSelect) return;
    const price = Number(unitSelect.value);
    const rate = Number(yieldSelect.value);
    const booking = price * 0.2;
    const annual = price * rate;
    const monthly = annual / 12;
    document.querySelector('[data-calc-booking]').textContent = `AED ${formatAed.format(booking)}`;
    document.querySelector('[data-calc-booking-usd]').textContent = `≈ $${formatUsd.format(usd(booking))}`;
    document.querySelector('[data-calc-annual]').textContent = `AED ${formatAed.format(annual)}`;
    document.querySelector('[data-calc-annual-usd]').textContent = `≈ $${formatUsd.format(usd(annual))}`;
    document.querySelector('[data-calc-monthly]').textContent = `AED ${formatAed.format(monthly)}`;
    document.querySelector('[data-calc-monthly-usd]').textContent = `≈ $${formatUsd.format(usd(monthly))}`;
  }
  [unitSelect, yieldSelect].forEach((select) => select?.addEventListener('change', updateCalculator));
  updateCalculator();

  const galleryThumbs = [...document.querySelectorAll('[data-gallery-thumb]')];
  const galleryStage = document.querySelector('[data-gallery-stage]');
  const galleryCaption = document.querySelector('[data-gallery-caption]');
  let galleryIndex = 0;
  const showGalleryImage = (nextIndex) => {
    if (!galleryStage || !galleryThumbs.length) return;
    galleryIndex = (nextIndex + galleryThumbs.length) % galleryThumbs.length;
    const thumb = galleryThumbs[galleryIndex];
    galleryStage.src = thumb.dataset.src;
    galleryStage.alt = thumb.dataset.alt;
    galleryCaption.textContent = thumb.dataset.caption;
    galleryThumbs.forEach((item, index) => item.classList.toggle('is-active', index === galleryIndex));
    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };
  galleryThumbs.forEach((thumb, index) => thumb.addEventListener('click', () => showGalleryImage(index)));
  document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => showGalleryImage(galleryIndex - 1));
  document.querySelector('[data-gallery-next]')?.addEventListener('click', () => showGalleryImage(galleryIndex + 1));

  const modal = document.querySelector('[data-layout-modal]');
  let modalTrigger = null;
  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalTrigger?.focus();
  };
  document.querySelectorAll('[data-layout-open]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!modal) return;
      const card = button.closest('[data-layout]');
      modalTrigger = button;
      modal.querySelector('[data-modal-title]').textContent = card.dataset.title;
      modal.querySelector('[data-modal-price]').textContent = card.dataset.price;
      modal.querySelector('[data-modal-area]').textContent = card.dataset.area;
      modal.querySelector('[data-modal-booking]').textContent = card.dataset.booking;
      modal.querySelector('[data-modal-dld]').textContent = card.dataset.dld;
      modal.querySelector('[data-modal-yield]').textContent = card.dataset.yield;
      const activeImage = card.querySelector('.layout-gallery img.is-active') || card.querySelector('.layout-gallery img');
      modal.querySelector('[data-modal-image]').src = activeImage.src;
      modal.querySelector('[data-modal-image]').alt = activeImage.alt;
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      modal.querySelector('.layout-modal-close')?.focus();
    });
  });
  modal?.querySelectorAll('[data-layout-close]').forEach((button) => button.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  const stickyCta = document.querySelector('.mobile-cta');
  if (stickyCta) {
    const updateStickyCta = () => stickyCta.classList.toggle('not-past-hero', window.scrollY < 680);
    window.addEventListener('scroll', updateStickyCta, { passive: true });
    updateStickyCta();
  }
}());

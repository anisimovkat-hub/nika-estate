const WHATSAPP_NUMBER = '971508698020';

const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});

function openWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

function checkedValue(form, name) {
  return form.querySelector(`[name="${name}"]:checked`)?.value || '';
}

function initPhoneMask(input) {
  if (!input.value.trim()) input.value = '+';

  input.addEventListener('focus', () => {
    if (!input.value.trim()) input.value = '+';
  });

  input.addEventListener('input', () => {
    const cleaned = input.value.replace(/[^0-9+ ()-]/g, '');
    input.value = `+${cleaned.replace(/\+/g, '')}`;
  });
}

document.querySelectorAll('[data-phone]').forEach(initPhoneMask);

function updateTelegramField(form) {
  const field = form.querySelector('[data-telegram-field]');
  const input = field?.querySelector('input');
  if (!field || !input) return;

  const needsTelegram = checkedValue(form, 'messenger') === 'Telegram';
  field.hidden = !needsTelegram;
  input.required = needsTelegram;
  if (!needsTelegram) input.setCustomValidity('');
}

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('change', (event) => {
    if (event.target.name === 'messenger') updateTelegramField(form);
  });
  updateTelegramField(form);
});

const quiz = document.querySelector('[data-quiz-form]');

if (quiz) {
  const steps = [...quiz.querySelectorAll('[data-quiz-step]')];
  const counter = quiz.querySelector('[data-quiz-counter]');
  const progress = quiz.querySelector('[data-quiz-progress]');
  const bottomGoal = document.querySelector('[data-goal-select]');
  let activeStep = 0;

  function renderQuiz() {
    steps.forEach((step, index) => {
      step.hidden = index !== activeStep;
    });
    counter.textContent = `${activeStep + 1} из ${steps.length}`;
    progress.style.width = `${((activeStep + 1) / steps.length) * 100}%`;
  }

  function stepHasAnswer(step) {
    const radios = [...step.querySelectorAll('input[type="radio"][required]')];
    if (radios.length && !radios.some((input) => input.checked)) {
      const first = radios[0];
      first.setCustomValidity('Выберите один вариант');
      first.reportValidity();
      first.setCustomValidity('');
      return false;
    }
    return true;
  }

  quiz.querySelectorAll('[data-quiz-next]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!stepHasAnswer(steps[activeStep])) return;
      activeStep = Math.min(activeStep + 1, steps.length - 1);
      renderQuiz();
      quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  quiz.querySelectorAll('[data-quiz-back]').forEach((button) => {
    button.addEventListener('click', () => {
      activeStep = Math.max(activeStep - 1, 0);
      renderQuiz();
    });
  });

  quiz.addEventListener('change', (event) => {
    if (event.target.matches('.quiz-option input')) {
      event.target.closest('.quiz-options').querySelectorAll('.quiz-option').forEach((option) => {
        option.classList.toggle('is-selected', option.querySelector('input').checked);
      });
    }

    if (event.target.name === 'quiz_goal' && bottomGoal) {
      bottomGoal.value = event.target.value;
    }
  });

  quiz.addEventListener('submit', (event) => {
    event.preventDefault();
    updateTelegramField(quiz);

    if (!quiz.checkValidity()) {
      quiz.reportValidity();
      return;
    }

    const data = new FormData(quiz);
    const messenger = checkedValue(quiz, 'messenger');
    const telegram = (data.get('telegram') || '').toString().trim();
    const message = [
      'Здравствуйте! Хочу получить подбор лучших объектов.',
      `Цель: ${data.get('quiz_goal')}.`,
      `Первый платёж: ${data.get('quiz_budget')}.`,
      `Регион: ${data.get('quiz_region')}.`,
      `Формат: ${data.get('quiz_type')}.`,
      `Срок покупки: ${data.get('quiz_timing')}.`,
      `Имя: ${data.get('name')}.`,
      `Телефон: ${data.get('phone')}.`,
      `Связаться: ${messenger}.`,
      telegram ? `Telegram: ${telegram}.` : ''
    ].filter(Boolean).join('\n');

    const status = quiz.querySelector('[data-form-status]');
    if (status) status.textContent = 'Подборка заполнена. Открываем сообщение для Nika Estate…';
    openWhatsApp(message);
  });

  renderQuiz();
}

const consultationForm = document.querySelector('.lead-form');

document.querySelectorAll('[data-project-link]').forEach((link) => {
  link.addEventListener('click', () => {
    if (!consultationForm) return;
    const project = link.dataset.projectLink;
    consultationForm.elements.project.value = project;
    const selected = consultationForm.querySelector('[data-selected-project]');
    selected.querySelector('strong').textContent = project;
    selected.hidden = false;
  });
});

document.querySelectorAll('.lead-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateTelegramField(form);

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const page = form.dataset.page || document.title;
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || data.get('contact') || '').toString().trim();
    const goal = (data.get('goal') || '').toString().trim();
    const project = (data.get('project') || '').toString().trim();
    const messenger = checkedValue(form, 'messenger') || 'WhatsApp';
    const telegram = (data.get('telegram') || '').toString().trim();
    const message = [
      `Здравствуйте! Хочу обсудить: ${page}.`,
      project ? `Интересует объект: ${project}.` : '',
      `Имя: ${name}.`,
      `Телефон: ${phone}.`,
      goal ? `Цель: ${goal}.` : '',
      `Связаться: ${messenger}.`,
      telegram ? `Telegram: ${telegram}.` : ''
    ].filter(Boolean).join('\n');

    const status = form.querySelector('[data-form-status]');
    if (status) status.textContent = 'Открываем сообщение для Nika Estate…';
    openWhatsApp(message);
  });
});

const mobileCta = document.querySelector('.mobile-cta');

if (mobileCta && 'IntersectionObserver' in window) {
  const coveredSections = [...document.querySelectorAll('[data-quiz-form], #request')];
  const visibleSections = new Set();
  const mobileCtaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });
    mobileCta.classList.toggle('is-hidden', visibleSections.size > 0);
  }, { threshold: 0.05 });

  coveredSections.forEach((section) => mobileCtaObserver.observe(section));
}

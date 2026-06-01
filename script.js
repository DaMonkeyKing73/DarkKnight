const form = document.getElementById('register-form');
const hiddenFrame = document.getElementById('hidden-iframe');

if (form && hiddenFrame) {
  hiddenFrame.addEventListener('load', () => {
    const button = form.querySelector('button[type="submit"]');
    button.textContent = 'Submit Registration';
    button.disabled = false;
    form.reset();
  });

  form.addEventListener('submit', event => {
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = 'Submitting...';
  });
}

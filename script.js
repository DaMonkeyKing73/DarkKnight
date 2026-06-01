const form = document.getElementById('register-form');
const formMessage = document.getElementById('form-message');

if (form) {
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const formData = new URLSearchParams(new FormData(form));

    button.disabled = true;
    button.textContent = 'Submitting...';
    formMessage.textContent = 'Submitting...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const text = await response.text();
      formMessage.textContent = text || 'Submitted';
      button.textContent = 'Submitted';
    } catch (error) {
      formMessage.textContent = 'Submission failed. Please try again.';
      console.error(error);
      button.textContent = 'Submit Registration';
    } finally {
      button.disabled = false;
    }
  });
}

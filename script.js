// Tab switching functionality
function switchTab(event, tabName) {
  if (event) {
    event.preventDefault();
  }
  
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Remove active class from all buttons and contents
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));
  
  // Add active class to correct button and content
  const button = document.querySelector(`[data-tab="${tabName}"]`);
  if (button) button.classList.add('active');
  const content = document.getElementById(tabName);
  if (content) content.classList.add('active');
  
  // Scroll to tab section
  const section = document.querySelector('.tabbed-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Attach click listeners to tab buttons
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const tabName = button.getAttribute('data-tab');
    switchTab(null, tabName);
  });
});

// Form submission handler
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

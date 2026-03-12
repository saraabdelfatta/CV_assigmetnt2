// ============================================
// Assignment 2 - Interactive CV (JavaScript)
// Features implemented:
// 1. Welcome message on page load
// 2. Dark mode / light mode toggle
// 3. Dynamic skills list (add new skill)
// 4. Show/hide certifications section
// 5. Contact form with validation
// ============================================

// ----- 1. WELCOME MESSAGE -----
window.addEventListener('load', function() {
  const welcomeDiv = document.getElementById('welcomeMessage');
  welcomeDiv.innerHTML = '<p style="background:#e0f2fe; padding:0.5rem; border-radius:8px; text-align:center;">👋 Welcome to my portfolio page! Feel free to explore.</p>';
});

// ----- 2. DARK MODE TOGGLE -----
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  // Change button text
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});

// ----- 3. DYNAMIC SKILLS LIST -----
document.getElementById('addSkillBtn').addEventListener('click', function() {
  const newSkillInput = document.getElementById('newSkill');
  const newSkill = newSkillInput.value.trim();
  
  if (newSkill === '') {
    alert('Please enter a skill name.');
    return;
  }

  const skillsList = document.getElementById('skillsList');
  const newLi = document.createElement('li');
  newLi.textContent = newSkill;
  skillsList.appendChild(newLi);

  // Clear input
  newSkillInput.value = '';
});

// ----- 4. SHOW/HIDE CERTIFICATIONS SECTION -----
const toggleCertBtn = document.getElementById('toggleCertBtn');
const certList = document.getElementById('certList');

toggleCertBtn.addEventListener('click', function() {
  if (certList.style.display === 'none') {
    certList.style.display = 'block';
    toggleCertBtn.textContent = 'Hide Certifications';
  } else {
    certList.style.display = 'none';
    toggleCertBtn.textContent = 'Show Certifications';
  }
});

// ----- 5. CONTACT FORM VALIDATION -----
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the form from submitting normally

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  // Simple email regex (basic check)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    feedback.innerHTML = '<p style="color:red;">All fields are required.</p>';
  } else if (!emailPattern.test(email)) {
    feedback.innerHTML = '<p style="color:red;">Please enter a valid email address (e.g., name@example.com).</p>';
  } else {
    feedback.innerHTML = '<p style="color:green;">Message sent successfully! (This is a demo.)</p>';
    // Optionally clear the form
    document.getElementById('contactForm').reset();
  }
});
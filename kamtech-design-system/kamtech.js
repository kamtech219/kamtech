/**
 * KAMTECH Design System
 * Interactive components logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Buttons: Simulate Loading State ---
  const loadableButtons = document.querySelectorAll('.kt-btn-loadable');

  loadableButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();

      // Prevent multiple clicks
      if (this.classList.contains('kt-loading')) return;

      const originalText = this.innerHTML;
      this.classList.add('kt-loading');
      this.dataset.originalText = originalText;

      // Simulate API call/loading delay
      setTimeout(() => {
        this.classList.remove('kt-loading');
        // Optional: you can show a success state or just revert
        // this.innerHTML = originalText;
      }, 2000);
    });
  });

  // --- Forms: Mock Validation ---
  const formElements = document.querySelectorAll('.kt-validate-form');

  formElements.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const inputs = this.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        // Find or create error message span
        let errorMsg = input.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains('kt-error-message')) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'kt-error-message';
            input.parentNode.insertBefore(errorMsg, input.nextSibling);
        }

        if (!input.value.trim()) {
          input.classList.add('kt-error');
          errorMsg.textContent = `${input.getAttribute('name') || 'This field'} is required`;
          isValid = false;
        } else if (input.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) {
          input.classList.add('kt-error');
          errorMsg.textContent = 'Please enter a valid email address';
          isValid = false;
        } else {
          input.classList.remove('kt-error');
          errorMsg.textContent = '';
        }

        // Remove error on input change
        input.addEventListener('input', function() {
            this.classList.remove('kt-error');
            const msg = this.nextElementSibling;
            if(msg && msg.classList.contains('kt-error-message')) {
                msg.textContent = '';
            }
        }, { once: true }); // Only bind once per error
      });

      if (isValid) {
        // Simulate successful submission
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.classList.add('kt-loading');
            setTimeout(() => {
                submitBtn.classList.remove('kt-loading');
                alert('Form submitted successfully!');
                this.reset();
            }, 1000);
        } else {
             alert('Form submitted successfully!');
             this.reset();
        }
      }
    });
  });

  // --- Navigation: Mobile Toggle ---
  const navToggles = document.querySelectorAll('.kt-nav-toggle');

  navToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const targetId = this.getAttribute('aria-controls');
      if (targetId) {
        const menu = document.getElementById(targetId);
        if (menu) {
          const isExpanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', !isExpanded);
          menu.classList.toggle('kt-open');
        }
      }
    });
  });
});
